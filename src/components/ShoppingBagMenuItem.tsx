import { ShoppingBagIcon } from "@heroicons/react/outline";

const ShoppingBagMenuItem = (): JSX.Element => {
  const showShoppingBag = () => {
    console.log(`show shopping bag`);
  };

  return (
    <div className="mr-8">
      <ShoppingBagIcon className="h-8 w-8 text-gray-900" onClick={() => showShoppingBag()} />
    </div>
  );
};

export default ShoppingBagMenuItem;
