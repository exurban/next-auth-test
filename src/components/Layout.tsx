import ActiveLink from "./ActiveLink";
import NavMenuItem from "./NavMenuItem";
import ThemeMenuItem from "./ThemeMenuItem";
import UserMenuItem from "./UserMenuItem";
import FavoritesMenuItem from "./FavoritesMenuItem";
import ShoppingBagMenuItem from "./ShoppingBagMenuItem";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <div className="sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
            <nav>
              <ul className="flex flex-row h-full font-sans">
                <li className="my-auto p-2">
                  <ActiveLink activeClassName="text-purple-600" href="/">
                    <a className="mx-2 font-bold">
                      <img
                        src="GP-Logo.svg"
                        alt="gibbs-photography-logo"
                        width="50px"
                        height="50px"
                      />
                    </a>
                  </ActiveLink>
                </li>

                <NavMenuItem name="Featured" link="/featured" />
                <NavMenuItem name="Land" link="/subjects/land" />
                <NavMenuItem name="Water" link="/subjects/water" />
                <NavMenuItem name="Sky" link="/subjects/sky" />
                <NavMenuItem name="Bloom" link="/subjects/bloom" />
                <NavMenuItem name="Bird" link="/subjects/bird" />
                <NavMenuItem name="Beast" link="/subjects/beast" />
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

      <main className="min-h-screen">{children}</main>
    </>
  );
};

export default Layout;
