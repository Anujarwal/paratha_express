import {
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
} from "@mui/material";

import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="font-[sans-serif] text-[#333]">
        <div className="min-h-screen flex fle-col items-center justify-center p-6">
          <div className="grid md:grid-cols-2 items-center gap-6 max-w-7xl w-full">
            <form className="md:max-w-md w-full">
              <h3 className="text-2xl font-extrabold mb-10">Registration</h3>
              <div className="space-y-6">
                <div>
                  <label className="text-sm mb-2 block">Name</label>
                  <input
                    name="name"
                    type="text"
                    className="bg-gray-100 w-full text-sm px-4 py-4 focus:bg-transparent outline-blue-500 transition-all"
                    placeholder="Enter name"
                  />
                </div>
                <div>
                  <label className="text-sm mb-2 block">Email</label>
                  <input
                    name="email"
                    type="text"
                    className="bg-gray-100 w-full text-sm px-4 py-4 focus:bg-transparent outline-blue-500 transition-all"
                    placeholder="Enter email"
                  />
                </div>
                <div>
                  <label className="text-sm mb-2 block">Password</label>
                  <input
                    name="password"
                    type="password"
                    className="bg-gray-100 w-full text-sm px-4 py-4 focus:bg-transparent outline-blue-500 transition-all"
                    placeholder="Enter password"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 shrink-0 border-gray-300 rounded"
                  />
                  <label for="remember-me" className="ml-3 block text-sm">
                    I accept the{" "}
                    <a
                      href="javascript:void(0);"
                      className="text-blue-500 font-semibold hover:underline ml-1"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="button"
                  className="py-4 px-6 text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 focus:outline-none"
                >
                  Create an account
                </button>
              </div>
              <p className="text-sm mt-6">
                Already have an account?{" "}
                <Link to={"/login"}>
                  <a
                    href="javascript:void(0);"
                    className="text-blue-500 font-semibold hover:underline ml-1"
                  >
                    Login here
                  </a>
                </Link>{" "}
              </p>
            </form>
            <div className="h-full max-md:mt-10">
              <img
                src="https://readymadeui.com/login-image.webp"
                className="w-full h-full object-cover"
                alt="Dining Experience"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                  <Link to="/login">Login</Link>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
            <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Enter Name
              </label>
              <div className="mt-2">
                <input
                  id=""
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Signup now
            </a>
          </p>
        </div>
      </div> */}
    </>
  );
};

export default Register;
