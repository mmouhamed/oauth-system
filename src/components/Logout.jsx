import { doLogout } from "@/app/actions";

const Logout = () => {
  return (
    <form action={doLogout}>
      <button type="submit" className="bg-blue-950 my-2 text-white rounded p-1">
        Logout
      </button>
    </form>
  );
};

export default Logout;
