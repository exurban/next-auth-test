const Arrows: React.FC = () => {
  return (
    <div className="flex flex-row">
      <button className="bg-coolGray-900 bg-opacity-80 text-white dark:bg-coolGray-50 dark:text-coolGray-800 rounded-md">
        <div className="flex flex-row px-4 py-2">
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <p>Prev</p>
        </div>
      </button>
      <button className="bg-coolGray-900 bg-opacity-80 text-white dark:bg-coolGray-50 dark:text-coolGray-800 rounded-md">
        <div className="flex flex-row px-4 py-2">
          <p>Next</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default Arrows;
