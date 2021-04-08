// import { useRouter } from "next/router";
import { PhotoInfoFragment } from "../graphql-operations";
import Slide from "./Slide";

type Props = {
  photos: PhotoInfoFragment[];
};

const Gallery: React.FC<Props> = ({ photos }) => {
  // const router = useRouter();

  return (
    <>
      <div className="pt-6 pb-12 ml-6 xl:ml-12 xl:mr-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-flow-row-dense gap-x-4 gap-y-12 justify-evenly justify-items-center">
        {photos.map((photo, idx) => (
          <div key={photo.sku} className="container">
            <Slide photo={photo} priority={idx < 12} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
