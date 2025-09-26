import React from "react";
import FeatureCard from "./common/feature-card";
import { features } from "@/data/features";

const Features = () => {
  return (
    <section className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Generate</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            isNew={feature.isNew}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
