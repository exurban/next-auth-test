// import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { AllPhotosOfSubjectDocument, AllPhotosOfSubjectInput } from "../graphql-operations";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import Slide from "./Slide";

type Props = {
  input: AllPhotosOfSubjectInput;
};

const Gallery: React.FC<Props> = ({ input }) => {
  // const router = useRouter();

  const { loading, error, data } = useQuery(AllPhotosOfSubjectDocument, {
    variables: {
      input: input
    }
  });

  if (error) return <ErrorMessage message="Error loading photos." />;

  if (loading) return <Loader />;

  if (!data) return null;

  const { subjectInfo, total, photos } = data.allPhotosOfSubject;

  console.log(subjectInfo, total);

  return (
    <>
      <div className="container w-full mx-auto mt-20 grid grid-cols-4 grid-flow-row-dense gap-x-4 gap-y-8 justify-evenly justify-items-center m-4">
        {photos.map((photo, idx) => (
          <div key={photo.sku} className="container w-full h-full">
            <Slide photo={photo} priority={idx < 12} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
