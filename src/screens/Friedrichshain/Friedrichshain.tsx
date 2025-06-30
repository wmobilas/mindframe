import React from "react";
import { ActionableStepsSection } from "./sections/ActionableStepsSection";
import { CognitiveDominationSection } from "./sections/CognitiveDominationSection";
import { CognitiveEliteSection } from "./sections/CognitiveEliteSection";
import { MissionProtocolSection } from "./sections/MissionProtocolSection";
import { WebinarSection } from "./sections/WebinarSection";

export const Friedrichshain = (): JSX.Element => {
  return (
    <div className="bg-[#444444] flex flex-row justify-center w-full min-h-screen">
      <div className="bg-[#444444] border border-solid border-[#ffffff1a] w-full max-w-[1400px] relative flex flex-col lg:flex-row gap-4 p-4">
        <div className="w-full lg:w-[31%]">
          <CognitiveEliteSection />
        </div>

        <div className="w-full lg:w-[23%]">
          <WebinarSection />
        </div>

        <div className="w-full lg:w-[17%]">
          <ActionableStepsSection />
        </div>

        <div className="w-full lg:w-[13%]">
          <CognitiveDominationSection />
        </div>

        <div className="w-full lg:w-[6%]">
          <MissionProtocolSection />
        </div>
      </div>
    </div>
  );
};