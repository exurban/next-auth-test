import { PhotoInfoFragment } from "../graphql-operations";
import { Menu, Transition } from "@headlessui/react";

const DotsVertical = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-coolGray-800 dark:text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
      />
    </svg>
  );
};

const InfoIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

const ExpandIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
      />
    </svg>
  );
};

const PlusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

type Props = {
  photo: PhotoInfoFragment;
};

const SlideMenu: React.FC<Props> = ({ photo }) => {
  const addToFavorites = () => {
    console.log({ photo });
  };

  const addToShoppingBag = () => {
    console.log({ photo });
  };

  return (
    <div className="flex items-center justify-center p-2">
      <div className="relative inline-block text-left">
        <Menu>
          {({ open }) => (
            <>
              <span className="rounded-md shadow-sm">
                <Menu.Button className="inline-flex justify-center w-full px-2 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out rounded-md bg-white dark:bg-coolGray-800 hover:text-gray-500 dark:hover:bg-coolGray-700 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800">
                  <DotsVertical />
                </Menu.Button>
              </span>

              <Transition
                show={open}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  static
                  className="absolute right-0 w-56 mt-2 origin-top-right bg-white dark:bg-coolGray-700 border border-gray-200 dark:border-coolGray-800 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                >
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href={`#/image/${photo.sku}`}
                          className={`${
                            active
                              ? "bg-gray-100 text-gray-900 dark:bg-coolGray-600 dark:text-coolGray-50"
                              : "text-gray-700 dark:text-coolGray-100"
                          }  flex items-center w-full px-4 py-2 text-sm leading-5 text-left`}
                        >
                          <InfoIcon /> <p className="ml-2">Info</p>
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href={`#/carousel/subject/land/${photo.sku}`}
                          className={`${
                            active
                              ? "bg-gray-100 text-gray-900 dark:bg-coolGray-600 dark:text-coolGray-50"
                              : "text-gray-700 dark:text-coolGray-100"
                          }  flex items-center w-full px-4 py-2 text-sm leading-5 text-left`}
                        >
                          <ExpandIcon /> <p className="ml-2">View Larger</p>
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item onClick={() => addToFavorites()}>
                      {({ active }) => (
                        <a
                          href="#favorites"
                          className={`${
                            active
                              ? "bg-gray-100 text-gray-900 dark:bg-coolGray-600 dark:text-coolGray-50"
                              : "text-gray-700 dark:text-coolGray-100"
                          }  flex items-center w-full px-4 py-2 text-sm leading-5 text-left`}
                        >
                          <PlusIcon /> <p className="ml-2">Add to Favorites</p>
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item onClick={() => addToShoppingBag()}>
                      {({ active }) => (
                        <a
                          href="#shoppingBag"
                          className={`${
                            active
                              ? "bg-gray-100 text-gray-900 dark:bg-coolGray-600 dark:text-coolGray-50"
                              : "text-gray-700 dark:text-coolGray-100"
                          }  flex items-center w-full px-4 py-2 text-sm leading-5 text-left`}
                        >
                          <PlusIcon /> <p className="ml-2">Add to Shopping Bag</p>
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </div>
  );
};

export default SlideMenu;
