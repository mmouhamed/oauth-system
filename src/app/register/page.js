import RegistrationForm from "@/components/RegistrationForm";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center m-10 ">
        <h1 className="flex text-2xl">Register Page</h1>
        <RegistrationForm />

        <p>
          Already have an account?
          <Link href="/home" className="mx-2 underline text-blue-600">
            Login
          </Link>
        </p>
      </div>
    </>
  );
};

export default RegisterPage;
