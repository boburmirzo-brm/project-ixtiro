import React from "react";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  return (
    <section className="flex w-full h-screen items-center justify-center">
      <form
        action=""
        className="w-[500px] shadow-md p-4 border"
      >
        <p className="text-xl font-medium mb-5">Sign in</p>
        <label className="mb-4 block" htmlFor="username">
          <span className="text-slate-600">
            Username <span className="text-red-500">*</span>
          </span>
          <input
            id="username"
            type="text"
            className="border w-full h-10 indent-2"
            placeholder="username"
          />
        </label>
        <label className="mb-4 block" htmlFor="password">
          <span className="text-slate-600">
            Password <span className="text-red-500">*</span>
          </span>
          <input
            id="password"
            type="password"
            className="border w-full h-10 indent-2"
            placeholder="password"
          />
        </label>
        <button className="block w-full h-10 bg-slate-800 text-white">
          Login
        </button>
      </form>
      <Toaster position="bottom-right" reverseOrder={false} />
    </section>
  );
};

export default Login;
