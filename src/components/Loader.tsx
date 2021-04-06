import GridLoader from "react-spinners/GridLoader";

const Loader: React.FC = () => {
  return (
    <div className="container mx-auto flex flex-col h-screen justify-center items-center">
      <GridLoader size={75} color="#eef" loading={true} />
    </div>
  );
};

export default Loader;
