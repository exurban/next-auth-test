import ActiveLink from "./ActiveLink";

type Props = {
  link: string;
  name: string;
};

const NavMenuItem = ({ link, name }: Props): JSX.Element => {
  return (
    <li className="my-auto p-2">
      <ActiveLink activeClassName="text-purple-600" href={link}>
        <a>
          <p className="mx-2 text-2xl font-bold">{name}</p>
        </a>
      </ActiveLink>
    </li>
  );
};

export default NavMenuItem;
