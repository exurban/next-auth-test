import { UserCircleIcon } from "@heroicons/react/outline";

const UserMenuItem = (): JSX.Element => {
  const signInOut = () => {
    console.log(`sign in or out`);
  };

  return (
    <div className="mr-8">
      <UserCircleIcon className="h-8 w-8 text-gray-900" onClick={() => signInOut()} />
    </div>
  );
};

export default UserMenuItem;
