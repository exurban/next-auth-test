const ShoppingBagMenuItem = (): JSX.Element => {
  const showShoppingBag = () => {
    console.log(`show shopping bag`);
  };

  const ShoppingBagIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
    );
  };

  return (
    <button
      className="mr-6 text-coolGray-800 hover:text-purple-600 dark:text-white dark:hover:text-purple-500"
      aria-label="shopping bag"
      onClick={() => showShoppingBag()}
    >
      <ShoppingBagIcon />
    </button>
  );
};

export default ShoppingBagMenuItem;
