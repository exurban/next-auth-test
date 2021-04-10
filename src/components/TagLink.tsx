import Link from "next/link";

type Props = {
  text: string;
  url: string;
};

export const TagLinkPrimary: React.FC<Props> = ({ text, url }) => {
  return (
    <Link href={url}>
      <a>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full mx-1 text-xs lg:text-base font-medium bg-indigo-700 hover:bg-indigo-500 text-indigo-50 hover:text-white">
          {text}
        </span>
      </a>
    </Link>
  );
};

export const TagLinkSecondary: React.FC<Props> = ({ text, url }) => {
  return (
    <Link href={url}>
      <a>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full mx-1 text-xs lg:text-base font-medium bg-purple-800 hover:bg-purple-600 text-purple-200 hover:text-white">
          {text}
        </span>
      </a>
    </Link>
  );
};
