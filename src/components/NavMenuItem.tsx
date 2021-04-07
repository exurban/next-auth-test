import ActiveLink from "./ActiveLink";

type Props = {
  link: string;
  name: string;
};

const NavMenuItem = ({ link, name }: Props): JSX.Element => {
  return (
    <li
      className="my-auto p-2 text-2xl font-heading font-bold text-coolGray-800 hover:text-indigo-600 dark:text-white dark:hover:text-indigo-500"
      aria-label={`${name}`}
    >
      <ActiveLink activeClassName="text-indigo-600 dark:text-indigo-500" href={link}>
        <a>
          <p className="mx-2 ">{name}</p>
        </a>
      </ActiveLink>
    </li>
  );
};

export default NavMenuItem;
