import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";

const ThemeMenuItem = (): JSX.Element => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="mr-8">
      {theme === "light" ? (
        <MoonIcon className="h-7 w-7 text-yellow-400" onClick={() => setTheme("dark")} />
      ) : (
        <SunIcon className="h-7 w-7 text-yellow-200" onClick={() => setTheme("light")} />
      )}
    </div>
  );
};

export default ThemeMenuItem;
