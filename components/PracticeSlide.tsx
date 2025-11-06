"use client";
import BookMark from "@/utils/BookMark";

const PracticeSlide = () => {
  return (
    <section className="h-fit w-full overflow-hidden bg-black sm:py-32 py-20 sm:px-10 px-5">
      <div className="screen-max-width">
        <div className="mb-12 justify-between items-end w-full md:flex">
          <div className="text-gray-400 lg:mb-0 mb-5 font-medium">
            <p className="lg:text-6xl md:text-5xl text-3xl">iOS 26.NEW look.</p>{" "}
            <p className="lg:text-6xl md:text-5xl text-3xl">Even more magic</p>
          </div>
        </div>
        <BookMark />
      </div>
    </section>
  );
};

export default PracticeSlide;
