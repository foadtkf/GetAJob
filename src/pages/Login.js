import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import loginImage from "../assets/login.svg";
import { useDispatch, useSelector } from "react-redux";
import { googleLogin, loginUser } from "../features/auth/authSlice";
import { toast } from "react-hot-toast";
const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, user, isError, error } = useSelector(
    (state) => state.auth
  );
  const { email } = user;
  const onSubmit = ({ email, password }) => {
    dispatch(loginUser({ email, password }));
    // console.log(data);
  };
  useEffect(() => {
    if (!isLoading && email) {
      navigate("/");
    }
  }, [isLoading, email]);
  const handleGoogleLogin = () => {
    dispatch(googleLogin());
  };
  useEffect(() => {
    if (isError) {
      toast.error(error);
    }
  }, [isError, error]);
  return (
    <div className="flex h-screen items-center">
      <div className="w-1/2">
        <img src={loginImage} className="h-full w-full" alt="" />
      </div>
      <div className="w-1/2 grid place-items-center">
        <div className="bg-[#FFFAF4] rounded-lg grid place-items-center p-10">
          <h1 className="mb-10 font-medium text-2xl">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-3">
              <div className="flex flex-col items-start">
                <label htmlFor="email" className="ml-5">
                  Email
                </label>
                <input
                  className="w-full"
                  type="email"
                  {...register("email")}
                  id="email"
                />
              </div>
              <div className="flex flex-col items-start">
                <label htmlFor="password" className="ml-5">
                  Password
                </label>
                <input
                  className="w-full"
                  type="password"
                  id="password"
                  {...register("password")}
                />
              </div>
              <div className="relative !mt-8">
                <button
                  type="submit"
                  className="font-bold text-white py-3 rounded-full bg-primary w-full"
                >
                  Login
                </button>
              </div>
              <div>
                <p>
                  Don't have an account?{" "}
                  <span
                    className="text-primary hover:underline cursor-pointer"
                    onClick={() => navigate("/signup")}
                  >
                    Sign up
                  </span>
                </p>
              </div>
            </div>
          </form>
          <button
            onClick={handleGoogleLogin}
            className="font-bold text-white py-3 rounded-full bg-primary w-full"
          >
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
