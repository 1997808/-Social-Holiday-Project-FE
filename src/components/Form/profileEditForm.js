import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../Button/button";
import { data_limit, input_normal, text_limit } from "../../utils/css";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { login } from "../../app/auth";
import { MyAxios } from "../../utils/api";

export const ProfileEditForm = () => {
  const { register, handleSubmit, formState: { errors }, reset, setError } = useForm();
  let navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = async () => {
    const form = new FormData();
    form.append("file", selectedFile);
    await MyAxios.post(`users/profile/icon`, form)
      .then((res) => {
        if (res.data) {
          setIsFilePicked(false);
          // setSelectedFile(null);
          setTimeout(() => {
            navigate("/profile", { replace: true });
          }, 1000)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const getUser = async () => {
      await MyAxios.get(`users`)
        .then((res) => {
          if (res.data) {
            reset({ ...res.data })
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getUser();
  }, [reset]);

  const onSubmit = async (data) => {
    await MyAxios.post(`users/profile`, data)
      .then((res) => {
        if (res.data) {
          setError("email", { type: "success", message: res.data.message });
        } else {
          setError("email", { type: "failed", message: res.data.message });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="w-full p-8 rounded h-full flex flex-col justify-between items-center bg-white">
        <div className="mb-16">
          <input type="file" name="file" onChange={changeHandler} />
          {isFilePicked ? (
            <div>
              <p>Filename: {selectedFile.name}</p>
              <p>Filetype: {selectedFile.type}</p>
              <p>Size: {Math.ceil(selectedFile.size / 1000)}KB</p>
            </div>
          ) : (
            <p>Select a file to show details</p>
          )}
          {errors.file && <p className={`${errors.file.type === "success" ? "text-green-500" : "text-red-500"} text-xs mb-4 lg:mb-6`}>{errors.file.message}</p>}

          <Button text={"Change profile picture"} onClick={isFilePicked ? handleSubmission : () => { }} />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col justify-between items-center"
        >
          <div className="w-full mb-4 lg:mb-6">
            <input
              type="text"
              placeholder="Name"
              maxLength={data_limit}
              {...register("name", { required: true })}
              className={input_normal}
            />
          </div>

          <div className="w-full mb-4 lg:mb-6">
            <input
              type="text"
              placeholder="Username"
              maxLength={data_limit}
              {...register("username", { required: true })}
              className={input_normal}
            />
          </div>

          <div className="w-full mb-4 lg:mb-6">
            <input
              type="text"
              placeholder="Email"
              maxLength={data_limit}
              {...register("email", { required: true })}
              className={input_normal}
            />
          </div>
          <div className="w-full mb-4 lg:mb-6">
            <input
              type="password"
              placeholder="Password"
              maxLength={data_limit}
              {...register("password")}
              className={input_normal}
            />
          </div>

          <div className="w-full mb-4 lg:mb-6">
            <textarea
              type="text"
              placeholder="Profile"
              maxLength={text_limit}
              {...register("profile", { required: true })}
              className="text-sm w-full focus:outline-none border border-gray-200 rounded px-4 py-2 mr-5"
            />
          </div>

          {errors.email && <p className={`${errors.email.type === "success" ? "text-green-500" : "text-red-500"} text-xs mb-4 lg:mb-6`}>{errors.email.message}</p>}
          <Button text={"Submit edit"} type="submit" />
        </form>
      </div>
    </>
  );
};
