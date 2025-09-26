import React from "react";

type Props = {
  title: string;
  isNew: boolean;
  description: string;
  icon: string;
};

const FeatureCard = ({ title, isNew, description, icon }: Props) => {
  return (
    <section className="flex items-center gap-4 p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition">
      {/* Icon */}
      <div className="bg-gray-200 dark:bg-gray-700 rounded-xl size-12 shrink-0 flex items-center justify-center">
        <span className="text-gray-500 dark:text-gray-300">{icon}</span>
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex items-center gap-x-2">
          <h6 className="font-medium text-sm text-gray-900 dark:text-gray-100">
            {title}
          </h6>
          {isNew && (
            <span className="text-[10px] font-semibold bg-blue-500 text-white px-2 py-0.5 rounded-full">
              New
            </span>
          )}
        </div>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>

      {/* Action Button */}
      <button className="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-700 dark:text-gray-100 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition">
        Open
      </button>
    </section>
  );
};

export default FeatureCard;
