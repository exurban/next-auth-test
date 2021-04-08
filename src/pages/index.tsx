import { NextSeo } from "next-seo";
import Link from "next/link";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <>
      <NextSeo
        title="Gibbs Photography"
        description="Gibbs Photography | Nature & Landscape Photography"
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://www.gibbs-photography.com",
          site_name: "Gibbs Photography",
          title: "Gibbs Photography",
          description: `Gibbs Photography | Nature & Landscape Photography`
        }}
        twitter={{
          handle: "@gibbs_photog",
          site: "https://gibbs-photography.com",
          cardType: "summary_large_image"
        }}
      />

      <div className="flex flex-col items-center justify-center h-96 xl:h-120 2xl:h-140 max-w-full relative overflow-hidden z-0">
        <Image
          src="https://configcdkstack-gpbucketc7c11d3d-qtgzc43jqi2c.s3.us-east-2.amazonaws.com/photo_1089-1612563104512.webp"
          alt="Hero"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="flex flex-col w-11/12 max-w-screen-md mx-auto mt-12 lg:mt-20">
        <h1 className="font-heading text-3xl lg:text-4xl text-coolGray-800 dark:text-white">
          Welcome
        </h1>
        <p className="mt-12 lg:mt-20 font-heading text-lg lg:text-xl xl:text-2xl text-coolGray-800 dark:text-white">
          Nature scenes are the creative inspiration for photographers Boyd and Scott Gibbs, a
          father-son team. From single subjects to vast landscapes, their works convey both the
          ephemeral and enduring qualities of the American wilderness.
        </p>
        <div className="flex flex-col mx-auto mt-12 lg:mt-20">
          <Link href="/gallery/featured">
            <a className="flex flex-col items-center px-4 py-3 max-w-md border border-transparent text-base font-medium rounded-md text-purple-50 bg-indigo-600 shadow-lg hover:bg-purple-600 hover:text-white sm:px-8">
              Enter the Gallery
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
