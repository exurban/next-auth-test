import ActiveLink from "./ActiveLink";
import NavMenuItem from "./NavMenuItem";
import ThemeMenuItem from "./ThemeMenuItem";
import UserMenuItem from "./UserMenuItem";
import FavoritesMenuItem from "./FavoritesMenuItem";
import ShoppingBagMenuItem from "./ShoppingBagMenuItem";

const GPLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 lg:h-10 xl:h-12 2xl:h-14 w-8 lg:w-10 xl:w-12 2xl:w-14"
      fill="currentColor"
      viewBox="0 0 512 512"
      stroke="currentColor"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M496 256c0 132.548-107.452 240-240 240S16 388.548 16 256 123.452 16 256 16s240 107.452 240 240zm-3 0c0 130.891-106.109 237-237 237-130.891 0-237-106.109-237-237C19 125.109 125.109 19 256 19c130.891 0 237 106.109 237 237z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M512 256c0 141.385-114.615 256-256 256S0 397.385 0 256 114.615 0 256 0s256 114.615 256 256zm-8 0c0 136.967-111.033 248-248 248C119.033 504 8 392.967 8 256 8 119.033 119.033 8 256 8c136.967 0 248 111.033 248 248z"
      />
      <path d="M58.969 208.188c0 69.843 50.312 116.406 123.593 116.406 32.657 0 65.313-8.282 84.063-22.032v-62.968c0-13.906 3.281-17.656 20-19.844v-7.656h-90.469v7.656c17.813 2.188 21.094 5.938 21.094 19.844v65.156c-6.094 5.312-17.812 9.219-31.875 9.219-42.344 0-65-50.157-65-107.969 0-62.188 24.531-103.594 67.031-103.594 33.438 0 55.469 27.5 63.75 64.844h7.344l-1.562-61.094c-12.657-8.437-37.969-14.375-71.876-14.375-69.687 0-126.093 40.157-126.093 116.407z" />
      <path d="M475.125 277.688c0-42.657-36.719-65.313-101.094-65.313h-98.75v7.656c17.657 3.281 21.094 7.031 21.094 21.094V409.25c0 14.062-3.437 17.812-21.094 21.094V438h99.375v-7.656c-19.375-2.813-22.812-7.969-22.812-23.438v-59.687h22.187c56.563 0 101.094-23.281 101.094-69.531zm-58.437 2.343c0 33.594-18.126 56.25-53.75 57.813l-11.094.468V221.281l11.094.469c37.031 1.562 53.75 25.156 53.75 58.281z" />
    </svg>
  );
};

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <div className="sticky top-0 z-10 bg-white dark:bg-coolGray-800">
        <div className="mx-10 xl:mx-20">
          <div className="flex justify-between items-center py-2 md:justify-start md:space-x-8">
            <nav>
              <ul className="flex">
                <li className="my-auto p-2 text-coolGray-800 hover:text-indigo-600 dark:text-white dark:hover:text-indigo-500">
                  <ActiveLink
                    activeClassName="text-indigo-600 dark:text-indigo-500"
                    href="/"
                    aria-label="home"
                  >
                    <a>
                      <GPLogo />
                    </a>
                  </ActiveLink>
                </li>

                <NavMenuItem name="Featured" link="/gallery/featured" />
                <NavMenuItem name="Land" link="/gallery/subject/land" />
                <NavMenuItem name="Water" link="/gallery/subject/water" />
                <NavMenuItem name="Sky" link="/gallery/subject/sky" />
                <NavMenuItem name="Bloom" link="/gallery/subject/bloom" />
                <NavMenuItem name="Bird" link="/gallery/subject/bird" />
                <NavMenuItem name="Beast" link="/gallery/subject/beast" />
              </ul>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0"></div>
            <UserMenuItem />
            <FavoritesMenuItem />
            <ShoppingBagMenuItem />
            <ThemeMenuItem />
          </div>
        </div>
      </div>

      <main className="min-h-screen bg-white dark:bg-coolGray-800">{children}</main>
    </>
  );
};

export default Layout;
