import React from "react";
import { useForm } from "react-hook-form";

const Login = ({setToggle}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-neutral-900 rounded-2xl shadow-lg p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
            alt="Spotify"
            className="h-10"
          />
        </div>

        <h1 className="text-white text-2xl font-bold text-center mb-6">
          Log in to Spotify
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Email or username
            </label>
            <input
              type="text"
              {...register("email", { required: "Email is required" })}
              className="w-full rounded-md bg-neutral-800 border border-neutral-700 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Password
            </label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="w-full rounded-md bg-neutral-800 border border-neutral-700 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember me */}
          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-white">
              <input type="checkbox" className="mr-2 accent-green-500" />
              Remember me
            </label>
            <a href="#" className="text-sm text-white underline">
              Forgot your password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3 rounded-full transition"
          >
            Log In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-neutral-700" />
          <span className="mx-3 text-neutral-400 text-sm">or</span>
          <div className="flex-grow border-t border-neutral-700" />
        </div>

        {/* Signup */}
        <p className="text-center text-neutral-400 text-sm">
          Don’t have an account?{' '}
          <a href="#" className="text-white underline" onClick={()=>setToggle((prev)=>!prev)}>
            Sign up for Spotify
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;