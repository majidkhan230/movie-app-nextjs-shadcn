"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

const SearchInput = () => {
  const { reset, register, handleSubmit } = useForm();
  const router = useRouter();
  const onSubmit = (values) => {
    console.log(values);
    router.push(`/search/${values.search}`);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          defaultValue="spiderman"
          {...register("search")}
          placeholder="search"
        />
      </form>
    </div>
  );
};

export default SearchInput;
