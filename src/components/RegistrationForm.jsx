"use client";
import SocialLogin from "./SocialLogin";
import { useRouter } from "next/navigation";

const RegistrationForm = () => {
  const router = useRouter();
  async function handleSubmitForm(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);

      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");

      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      response.status === 201 && router.push("/");

      console.log("FORM NAME:", name, email, password);
    } catch (e) {
      console.error(e.message);
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmitForm}
        className="border flex flex-col items-center my-6 p-6 rounded-md w-80"
      >
        <div className="my-4 w-full">
          <label htmlFor="email" className="block mb-2">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="border px-4 py-2 rounded-md w-full"
          />
        </div>
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
          Register
        </button>
      </form>
      <SocialLogin />
    </>
  );
};

export default RegistrationForm;
