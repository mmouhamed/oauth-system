import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import Logout from "@/components/Logout";

const HomePage = async () => {
  const session = await auth();
  console.log(session);

  if (!session?.user) {
    redirect("/");
  }

  return (
    <div className="flex flex-col items-center justify-center m-10">
      {session?.user?.image && session?.user?.name ? (
        <>
          <div className="text-3xl my-6">Welcome Home</div>
          <div>{session?.user?.name}</div>
          <div>{session?.user?.email}</div>
          <Image
            src={session?.user?.image}
            alt={session?.user?.name}
            width={72}
            height={72}
            className="rounded-full "
          />
        </>
      ) : (
        <>
          <div className="text-3xl my-6">Welcome Home</div>
          <div>{session?.user?.name}</div>
          <div>{session?.user?.email}</div>
        </>
      )}

      <Logout />
    </div>
  );
};

export default HomePage;
