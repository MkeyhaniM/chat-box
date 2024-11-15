"use client";
import type {Register} from "@/src/types";

import Link from "next/link";
import {useForm} from "react-hook-form";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: Register) => console.log(data);

  return (
    <>
      <div className="flex justify-center items-center h-full bg-gradient-to-r from-[#7487A8] via-[#C0979C] to-[#B8262B]">
        <div className="lg:w-[400px] lg:p-5 rounded-lg shadow-lg bg-slate-200 flex flex-col gap-10">
          <h1>Register</h1>
          <form
            className="flex flex-col justify-around h-full gap-10"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-4">
              <input
                type="text"
                {...register("username", {required: true})}
                className="outline-none bg-transparent h-8 border-b-2 border-gray-400 w-full"
                placeholder="username"
              />
              {errors.username && <span>This field is required</span>}

              <input
                type="gmail"
                {...register("email", {required: true})}
                className="outline-none bg-transparent h-8 border-b-2 border-gray-400 w-full"
                placeholder="email"
              />
              {errors.email && <span>This field is required</span>}

              <input
                type="text"
                {...register("password", {required: true})}
                className="outline-none bg-transparent h-8 border-b-2 border-gray-400 w-full"
                placeholder="password"
              />
              {errors.password && <span>This field is required</span>}

              <input
                type="text"
                {...register("confirmPassword", {required: true})}
                className="outline-none bg-transparent h-8 border-b-2 border-gray-400 w-full"
                placeholder="confirm password"
              />
              {errors.confirmPassword && <span>This field is required</span>}
            </div>
            <input
              className="rounded-3xl py-3 px-8 border-2 border-slate-300 mx-auto"
              type="submit"
              value="Submit"
            />
          </form>
          <Link href="/auth/login">
            <span className="text-blue-400 hover:text-blue-500">you have an account ?</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
