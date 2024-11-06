"use client";
import SocialLogin from "@/components/SocialLogin";
import { doCredentialLogin } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  async function handleFormSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const res = await doCredentialLogin(formData);

      if (!!res.error) {
        setError(res.error.message);
        console.error(res.error);
      } else {
        router.push("/home");
      }
    } catch (err) {
      console.error(err);
      setError("Check your credentials");
    }
  }
  return (
    <>
      <div className=" text-xl text-red-600 ">{error}</div>
      <form
        onSubmit={handleFormSubmit}
        className="border flex flex-col items-center my-6 p-6 rounded-md w-80"
      >
        <div className="my-4 w-full">
          <label htmlFor="email" className="block mb-2">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border px-4 py-2 rounded-md w-full"
          />
        </div>
        <div className="my-4 w-full">
          <label htmlFor="password" className="block mb-2">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="border px-4 py-2 rounded-md w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-orange-300 mt-4 rounded w-full py-2 text-white"
        >
          Login
        </button>
      </form>
      <SocialLogin />
    </>
  );
};

export default LoginForm;
