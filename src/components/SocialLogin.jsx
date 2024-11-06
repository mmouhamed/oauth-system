import { doSocialLogin } from "@/app/actions/index";

const SocialLogin = () => {
  return (
    <form action={doSocialLogin} className="m-2">
      <button
        className="m-1 border rounded-md p-1 bg-blue-600 text-white"
        type="submit"
        name="action"
        value="google"
      >
        Sign In With Google
      </button>

      <button
        className="m-1 border rounded-md p-1 bg-black text-white"
        type="submit"
        name="action"
        value="github"
      >
        Sign In With Github
      </button>
    </form>
  );
};

export default SocialLogin;
