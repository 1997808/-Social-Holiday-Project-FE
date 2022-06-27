import React, { useRef, useState } from "react";
import logo from "../../assets/logo-2.svg";
import { useForm } from "react-hook-form";
import { ButtonSmall } from "../Button/buttonSmall";
import { MyAxios } from "../../utils/api";
import { useSelector } from "react-redux";
import { Image } from "cloudinary-react";
import { text_limit } from "../../utils/css";
import {
  PhotographIcon,
} from "@heroicons/react/outline";

export const PostForm = () => {
  const { register, handleSubmit, reset } = useForm();
  let user = useSelector((state) => state.user);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFilePicked, setIsFilePicked] = useState(false);
  const fileInput = useRef(null)

  const changeHandler = (event) => {
    // cancel choose when already have image
    if (event.target.files[0] !== undefined) {
      setSelectedFile(event.target.files[0]);
      setIsFilePicked(true);
    }
  };

  const onSubmit = async (data) => {
    const form = new FormData();
    form.append("author", user.id);
    form.append("content", data.content);
    form.append("file", selectedFile);
    try {
      const res = await MyAxios.post(`posts/image`, form)
      // console.log(res.data) data post just created
      if (res.statusText === "Created") {
        reset({ content: "" });
        setSelectedFile(null)
        setIsFilePicked(false)
      } else {
        console.log("fail");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-auto flex bg-white rounded border-b border-solid border-gray-200 p-5">
      {user.profileImageId ?
        <Image
          className="h-10 w-10 rounded object-cover mr-5"
          cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
          publicId={user.profileImageId}
          crop="scale"
        />
        :
        <img
          className="h-10 w-10 rounded object-cover mr-5"
          src={logo}
          alt="logo"
        />
      }
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col">
        <textarea
          type="text"
          placeholder="What is new?"
          maxLength={text_limit}
          {...register("content", { required: true })}
          className="h-28 text-sm w-full focus:outline-none border-none rounded mb-5"
        />
        <input className="hidden" type="file" name="file" ref={fileInput} onChange={changeHandler} />
        <div
          className={`w-32 h-32 flex justify-center items-center cursor-pointer ${isFilePicked ? '' : 'border border-dashed opacity-50'} mb-8`}
          onClick={() => fileInput.current.click()}
        >
          {isFilePicked && selectedFile !== null ? (
            <img className="w-32 h-32 object-cover my-8" src={URL.createObjectURL(selectedFile)} alt="omegalul" />
          ) : (
            <>
              <PhotographIcon className="h-6 w-6" />
              Image
            </>
          )}
        </div>
        <div className="flex justify-end">
          <ButtonSmall text={"Upload"} type="submit" />
        </div>
      </form>
    </div>
  );
};
