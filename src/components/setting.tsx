const Setting = ({ role }: { role: string }) => {
  return (
    <div className="pb-7">
      <div className="space-y-7">
        <div>
          <div className="bg-zinc-100 dark:bg-[#1c1917] rounded-lg w-full px-3 lg:px-9 space-y-5 py-9">
            <h1 className="text-lg lg:text-xl dark:text-zinc-300 underline underline-offset-8">
              Change <span className="font-semibold"> password</span>
            </h1>
            <p className="text-sx md:text-md dark:text-zinc-300">
              Change your password at a regular interval to make yourself
              secure.
            </p>
            <div className="flex justify-end">
              <button
                type="button"
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Change
              </button>
            </div>
          </div>
        </div>
        {role === "ADMIN" && (
          <div>
            <div className="bg-zinc-100 dark:bg-[#1c1917] rounded-lg w-full px-3 lg:px-9 space-y-5 py-9">
              <h1 className="text-lg lg:text-xl dark:text-zinc-300 underline underline-offset-8">
                Remove yourself <span className="font-semibold"> as admin</span>
              </h1>
              <p className="text-sx md:text-md dark:text-zinc-300">
                Removing yourself as an admin is undone process. You need to
                talk to an admin if you want to be an admin again.
              </p>
              <div className="flex justify-end">
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Change
                </button>
              </div>
            </div>
          </div>
        )}
        <div>
          <div className="bg-zinc-100 dark:bg-[#1c1917] rounded-lg w-full px-3 lg:px-9 space-y-5 py-9">
            <h1 className="text-lg lg:text-xl dark:text-zinc-300 underline underline-offset-8">
              Account <span className="font-semibold"> deletion</span>
            </h1>
            <p className="text-sx md:text-md dark:text-zinc-300">
              Deleting your account is permanent and it is irreversible process,
              so make sure before the deletion of your account. Deleting your
              account will also delete all of your personal information as well
              from <span className="font-semibold">Blink~Bards</span> system.
            </p>
            <div className="flex justify-end">
              <button
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Delete your account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
