import React from 'react';
import { useForm } from 'react-hook-form';
import { input_search } from '../../utils/css';
import { SearchIcon } from '@heroicons/react/solid'

export const SearchUserForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="w-full h-auto flex items-center rounded p-5 group">
      <SearchIcon className="h-5 w-5 text-gray-500" />
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col">
        <input
          type="text"
          placeholder="Search people"
          {...register("username", { required: true })}
          className={`${input_search} text-gray-500`}
        />
      </form>
    </div>
  );
};