const Newsletter: React.FC = () => {
  return (
    <div className="mt-8 mx-auto max-w-xl">
      <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
        Subscribe to our newsletter
      </h3>
      <p className="mt-4 text-base text-gray-500">
        We send out 3-4 newsletters per year. We will not sell or otherwise disclose your email
        address. Previous newsletters can be found in our blog.
      </p>
      <form className="mt-4 sm:flex sm:max-w-md">
        <label htmlFor="emailAddress" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          name="emailAddress"
          id="emailAddress"
          autoComplete="email"
          required
          className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:placeholder-gray-400"
          placeholder="Enter your email"
        />
        <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button
            type="submit"
            className="w-full bg-indigo-600 flex items-center justify-center border border-transparent rounded-md py-2 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
