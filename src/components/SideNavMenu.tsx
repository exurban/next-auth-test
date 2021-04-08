import { Menu, Transition } from "@headlessui/react";

const MenuIcon = () => {
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
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
};

const SideNavMenu: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-2">
      <div className="relative inline-block text-left">
        <Menu>
          {({ open }) => (
            <>
              <span className="rounded-md shadow-sm">
                <Menu.Button
                  className="inline-flex justify-center w-full px-2 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out rounded-md bg-white dark:bg-coolGray-800 hover:text-gray-500 dark:hover:bg-coolGray-700 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                  aria-label="show slide menu"
                >
                  <MenuIcon />
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
                  className="absolute left-0 w-56 mt-2 origin-top-right bg-white dark:bg-coolGray-700 border border-gray-200 dark:border-coolGray-800 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                >
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          aria-label="info"
                          href={`/gallery/featured`}
                          className={`${
                            active
                              ? "bg-gray-100 text-gray-900 dark:bg-coolGray-600 dark:text-coolGray-50"
                              : "text-gray-700 dark:text-coolGray-100"
                          }  flex items-center w-full px-4 py-4 text-lg leading-5 text-left`}
                        >
                          <p className="ml-2">Featured</p>
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          aria-label="land gallery"
                          href={`/gallery/subject/land`}
                          className={`${
                            active
                              ? "bg-gray-100 text-gray-900 dark:bg-coolGray-600 dark:text-coolGray-50"
                              : "text-gray-700 dark:text-coolGray-100"
                          }  flex items-center w-full px-4 py-4 text-lg leading-5 text-left`}
                        >
                          <p className="ml-2">Land</p>
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          aria-label="water gallery"
                          href={`/gallery/subject/water`}
                          className={`${
                            active
                              ? "bg-gray-100 text-gray-900 dark:bg-coolGray-600 dark:text-coolGray-50"
                              : "text-gray-700 dark:text-coolGray-100"
                          } flex items-center w-full px-4 py-4 text-lg leading-5 text-left`}
                        >
                          <p className="ml-2">Water</p>
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          aria-label="sky gallery"
                          href={`/gallery/subject/sky`}
                          className={`${
                            active
                              ? "bg-gray-100 text-gray-900 dark:bg-coolGray-600 dark:text-coolGray-50"
                              : "text-gray-700 dark:text-coolGray-100"
                          } flex items-center w-full px-4 py-4 text-lg leading-5 text-left`}
                        >
                          <p className="ml-2">Sky</p>
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          aria-label="bloom gallery"
                          href={`/gallery/subject/bloom`}
                          className={`${
                            active
                              ? "bg-gray-100 text-gray-900 dark:bg-coolGray-600 dark:text-coolGray-50"
                              : "text-gray-700 dark:text-coolGray-100"
                          } flex items-center w-full px-4 py-4 text-lg leading-5 text-left`}
                        >
                          <p className="ml-2">Bloom</p>
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          aria-label="bird gallery"
                          href={`/gallery/subject/bird`}
                          className={`${
                            active
                              ? "bg-gray-100 text-gray-900 dark:bg-coolGray-600 dark:text-coolGray-50"
                              : "text-gray-700 dark:text-coolGray-100"
                          } flex items-center w-full px-4 py-4 text-lg leading-5 text-left`}
                        >
                          <p className="ml-2">Bird</p>
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          aria-label="beast gallery"
                          href={`/gallery/subject/beast`}
                          className={`${
                            active
                              ? "bg-gray-100 text-gray-900 dark:bg-coolGray-600 dark:text-coolGray-50"
                              : "text-gray-700 dark:text-coolGray-100"
                          } flex items-center w-full px-4 py-4 text-lg leading-5 text-left`}
                        >
                          <p className="ml-2">Beast</p>
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

export default SideNavMenu;
