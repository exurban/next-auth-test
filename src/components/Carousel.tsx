import { Dispatch, SetStateAction } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { isMobile } from "react-device-detect";

type Props = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  items: CarouselItem[];
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
};

const renderPrevButton = () => {
  return (
    <button className="bg-coolGray-900 bg-opacity-80 text-white dark:bg-coolGray-50 dark:text-coolGray-800 rounded-md mr-2 mt-2">
      <div className="flex py-2 px-4 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <p className="ml-2">Prev</p>
      </div>
    </button>
  );
};

const renderNextButton = () => {
  return (
    <button className="bg-coolGray-900 bg-opacity-80 text-white dark:bg-coolGray-50 dark:text-coolGray-800 rounded-md">
      <div className="flex py-2 px-4 items-center">
        <p className="mr-2">Next</p>
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
  );
};

const Carousel: React.FC<Props> = ({ items, activeIndex, setActiveIndex }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const onSlideChanged = ({ item }) => {
    setActiveIndex(item);
  };

  return (
    <>
      <AliceCarousel
        autoWidth
        disableButtonsControls={isMobile}
        disableDotsControls
        infinite
        animationType="fadeout"
        animationDuration={800}
        animationEasingFunction="ease-in-out"
        mouseTracking
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
        items={items}
        activeIndex={activeIndex}
        onSlideChanged={onSlideChanged}
      />
    </>
  );
};

export default Carousel;
