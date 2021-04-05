import { StarIcon } from "@heroicons/react/outline";

const FavoritesMenuItem = (): JSX.Element => {
  const showFavorites = () => {
    console.log(`show favorites`);
  };

  return (
    <div className="mr-8">
      <StarIcon className="h-8 w-8 text-gray-900" onClick={() => showFavorites()} />
    </div>
  );
};

export default FavoritesMenuItem;
