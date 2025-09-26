import { LucideIcon } from "lucide-react";
import React from "react";

type Props = {
  title: string;
  isNew: boolean;
  description: string;
  icon: LucideIcon; // 👈 use LucideIcon type instead of IconNode
  iconBg?: string;
};

const FeatureCard = ({
  title,
  isNew,
  description,
  icon: Icon,
  iconBg,
}: Props) => {
  return (
    <section className="flex items-center gap-4 p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition">
      <div
        className={`${iconBg} rounded-xl size-12 shrink-0 flex items-center justify-center`}
      >
        <Icon className="w-6 h-6 text-gray-100 dark:text-gray-200" />
      </div>

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

      <button className="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-700 dark:text-gray-100 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition">
        Open
      </button>
    </section>
  );
};

export default FeatureCard;
