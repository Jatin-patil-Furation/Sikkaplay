import { GameFeature } from "@/constants";
import React from "react";

const GameFeatures = () => {
  return (
    <section className="feature text-white flex flex-wrap justify-evenly p-20 bg-[#150e1c] gap-4 ">
      {GameFeature.length > 0 &&
        GameFeature.map((feature) => {
          return (
            <div
              key={feature.id}
              className="basis-full lg:basis-[30%] flex flex-col items-center py-3 gap-3 align-baseline"
            >
              <div className="text-center w-[76px] h-[76px] object-fill">
                <img src={feature.featureLogo} alt="feature-Image" />
              </div>
              <h4 className="text-xl text-center">{feature.featureHeading}</h4>
              <p className="text-gray-500 w-[75%] mx-auto text-center text-base">
                {feature.featurePara}
              </p>
            </div>
          );
        })}
    </section>
  );
};

export default GameFeatures;
