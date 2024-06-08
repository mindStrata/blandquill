import { signIn } from "@/auth";

const Login = () => {
  const handleLogin = async (formdata: FormData) => {
    "use server";
    const email = formdata.get("email") as string;
    const password = formdata.get("password") as string;
    await signIn("credentials", {
      email,
      password,
      redirect: true,
      redirectTo: "/dashboard/overview",
    });
  };

  return (
    <div className="my-10 flex flex-col justify-center items-center">
      <div className="space-y-7 w-80">
        <div className="flex flex-col my-3 items-center justify-center">
          <h1 className="flex text-center text-4xl font-semibold gap-x-2 items-center">
            Hello again 👋
          </h1>
        </div>
        <form className="max-w-sm mx-auto" action={handleLogin}>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-11"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
