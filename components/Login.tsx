"use client";
import { BuiltInProviderType } from "next-auth/providers";
import { ClientSafeProvider, signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { useForm, SubmitHandler, LiteralUnion } from "react-hook-form";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import LoginImg from "../public/Dating.gif";
import { useRouter } from "next/navigation";
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
const Login = ({ providers }: Props) => {
  // const registerOptions = {
  //     name: { required: "Name is required" },
  //     email: { required: "Email is required" },
  //     password: {
  //         required: "Password is required",
  //         minLength: {
  //             value: 8,
  //             message: "Password must have at least 8 characters",
  //         },
  //     },
  // };

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Please fill all the fields");
      return;
    }
    fetch(`http://localhost:5000/v1/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        if (!res.ok) throw Error("Could not fetch the data for that resource");
        console.log("Error!");
        return res.json();
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem("name", data.user.name);
        localStorage.setItem("userId", data.user.id);
        router.push("/details");
      });
  }

  return (
    <section className="min-h-screen flex items-center justify-between w-full">
      <div className=" flex rounded-2xl space-x-6 pt-10 w-full px-8 md:px-20 items-center">
        <div className="md:w-1/2 px-2 md:px-2 ">
          <h1 className="text-4xl antialiased font-bold dark:text-white">
            Welcome to MatchMaster
          </h1>
          <h2 className="font-bold text-2xl text-fuchsia-600 dark:text-[#e5ff12]">
            Fast Login
          </h2>
          <p className="text-xs mt-4 text-fuchsia-700 dark:text-white">
            Easy login with Google, Facebook, Twitter and LinkedIn
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              className="py-2 px-4 mt-8 rounded-xl border"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative">
              <input
                className="py-2 px-4 rounded-xl border w-full"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-fit text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
            >
              Login
            </button>
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
                    onClick={() =>
                      signIn(provider.id, {
                        callbackUrl: "/details",
                      })
                    }
                    className="bg-white border py-3 px-3 md:px-0 md:w-1/2 rounded-xl mt-5 flex justify-center items-center text-sm  duration-300 text-fuchsia-700"
                  >
                    <FcGoogle className="text-2xl" />
                    <div className="ml-2  font-semibold">
                      Continue With Google
                    </div>
                  </button>
                ) : (
                  <button
                    key={id}
                    onClick={() =>
                      signIn(provider.id, {
                        callbackUrl: "/details",
                      })
                    }
                    className="bg-white border py-3 px-3 md:px-0 md:w-1/2 rounded-xl mt-5 flex justify-center items-center text-sm  duration-300 text-fuchsia-700"
                  >
                    <BsFacebook className="text-xl text-blue-500" />
                    <div className="ml-2 font-semibold">
                      Continue With Facebook
                    </div>
                  </button>
                )
              )}
          </div>

          <div className="mt-3 text-xs flex space-x-2 dark:text-white">
            <p>Don't have an account?</p>
            <Link
              href="/register"
              className="font-medium text-fuchsia-600 hover:underline dark:text-fuchsia-500"
            >
              Register
            </Link>
          </div>
        </div>
        <div className="md:inline-block hidden w-1/2 h-full">
          <img
            className="rounded-2xl dark:invert h-auto w-full "
            src={LoginImg.src}
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
