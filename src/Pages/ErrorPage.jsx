const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center mt-40 space-y-5">
      <h2 className="text-3xl font-semibold">Error!! </h2>
      <h3 className="text-3xl">404</h3>
      <p className="text-gray-500 text-xl">
        Some error has occured! Please check your Internet Connection
      </p>
    </div>
  );
};

export default ErrorPage;
