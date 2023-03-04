"use client";
import { BuiltInProviderType } from "next-auth/providers";
import { ClientSafeProvider, signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { useForm, SubmitHandler, LiteralUnion } from "react-hook-form";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import RegisterImage from "../public/cta2.gif"
type Props = {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
};
interface Inputs {
  email: string;
  password: string;
}
const Register = ({ providers }: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const registerOptions = {
    name: { required: "Name is required" },
    email: { required: "Email is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters",
      },
    },
  };
  return (
      <section className=" min-h-screen   flex items-center justify-between w-full">
        <div className=" flex rounded-2xl pt-10 w-full px-8 md:px-20 items-center">
          <div className="md:w-1/2 px-2 md:px-2 ">
            <h1 className="text-4xl antialiased font-bold dark:text-white">
              Welcome to Reflections
            </h1>
            <h2 className="font-bold text-2xl text-purple-600 dark:text-[#e5ff12]">
              Fast Register
            </h2>
            <p className="text-xs mt-4 text-[#002D74] dark:text-white">
              Easy login with Google, Github, Twitter and LinkedIn
            </p>

            <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="name@company.com" required/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" required/>
                  </div>
                  <div>
                      <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                      <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" required/>
                  </div>
                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-purple-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-purple-600 dark:ring-offset-gray-800" required/>
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-purple-600 hover:underline dark:text-purple-500" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                  <button type="submit" className="w-full md:w-fit text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Create an account</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <Link href="/login" className="font-medium text-purple-600 hover:underline dark:text-purple-500">Login here</Link>
                  </p>
              </form>

            <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div>
            <div className="flex space-x-4">
              {providers &&
                Object.values(providers).map((provider, id) =>
                  provider.name === "Google" ? (
                    <button
                      key={id}
                      onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                      className="bg-white border py-3 px-3 md:px-0 md:w-1/2 rounded-xl mt-5 flex justify-center items-center text-sm  duration-300 text-[#002D74]"
                    >
                      <FcGoogle className="text-2xl" />
                      <div className="ml-2  font-semibold">
                        Continue With Google
                      </div>
                    </button>
                  ) : (
                    <button
                      key={id}
                      onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                      className="bg-white border py-3 px-3 md:px-0 md:w-1/2 rounded-xl mt-5 flex justify-center items-center text-sm  duration-300 text-[#002D74]"
                    >
                      <BsGithub className="text-xl" />
                      <div className="ml-2 font-semibold">
                        Continue With Github
                      </div>
                    </button>
                  )
                )}
            </div>
          </div>
          <div className="md:inline-block hidden w-1/2 h-full">
            <img
              className="rounded-2xl dark:invert h-auto w-full "
              src={RegisterImage.src}
            />
          </div>
        </div>
      </section>
  );
};

export default Register;
