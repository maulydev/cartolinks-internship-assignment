import React from "react";

type Props = {
  label: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
};

const CarouselCard = ({
  label,
  title,
  subtitle,
  description,
  buttonText,
}: Props) => {
  return (
    <div className="w-full md:w-[66.66%] lg:w-[50%] flex-shrink-0 h-[400px] relative ">
      {/* Background placeholder */}
      <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 rounded-2xl mx-3" />

      {/* Content overlay */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-2xl dark:from-gray-900/80 dark:via-gray-900/50 dark:to-transparent mx-2">
        <span className="text-xs uppercase tracking-wide text-gray-200 dark:text-gray-400">
          {label}
        </span>
        <h2 className="text-5xl font-bold text-white dark:text-gray-100">
          {title}
        </h2>
        <h3 className="text-lg font-semibold mt-2 text-gray-100 dark:text-gray-300">
          {subtitle}
        </h3>
        <p className="text-sm mt-1 max-w-xl text-gray-200 dark:text-gray-400">
          {description}
        </p>
        <button className="mt-4 bg-white text-black px-4 py-2 rounded-full w-fit dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 transition">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CarouselCard;
