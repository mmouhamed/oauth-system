import LoginForm from "@/components/LoginForm";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center m-10">
      <h1 className="flex text-3xl my-3">Hey, time to sign in</h1>
      <LoginForm />

      <p>
        You don't have an account?
        <Link href="/register" className="mx-2 underline text-blue-800">
          Register Now!
        </Link>
      </p>
    </div>
  );
}
