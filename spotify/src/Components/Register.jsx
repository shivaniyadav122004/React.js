import React from "react";
import { useForm } from "react-hook-form";

const Register = ({setToggle}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    console.log("Register Data:", data);
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
          Sign up for Spotify
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Username
            </label>
            <input
              type="text"
              {...register("username", { required: "Username is required" })}
              className="w-full rounded-md bg-neutral-800 border border-neutral-700 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.username && (
              <p className="text-red-500 text-xs mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
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
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full rounded-md bg-neutral-800 border border-neutral-700 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              className="w-full rounded-md bg-neutral-800 border border-neutral-700 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Terms */}
          <div className="flex items-start text-sm text-white">
            <input type="checkbox" className="mt-1 mr-2 accent-green-500" />
            <span>
              I agree to Spotify’s{' '}
              <a href="#" className="underline">Terms</a> and{' '}
              <a href="#" className="underline">Privacy Policy</a>
            </span>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3 rounded-full transition"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-neutral-700" />
          <span className="mx-3 text-neutral-400 text-sm">or</span>
          <div className="flex-grow border-t border-neutral-700" />
        </div>

        {/* Login */}
        <p className="text-center text-neutral-400 text-sm">
          Already have an account?{' '}
          <a href="#" className="text-white underline" onClick={()=>setToggle((prev)=>!prev)}>
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;