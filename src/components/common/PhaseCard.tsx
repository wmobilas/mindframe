import React from "react";
import { Card, CardContent } from "../ui/card";

interface PhaseCardProps {
  phase: string;
  icon: string;
  emoji: string;
  title: string;
  description: string;
  variant?: "default" | "compact";
}

export const PhaseCard: React.FC<PhaseCardProps> = ({
  phase,
  icon,
  emoji,
  title,
  description,
  variant = "default"
}) => {
  const isCompact = variant === "compact";
  
  return (
    <Card className={`${isCompact ? 'w-full' : 'w-[362.66px]'} overflow-hidden border-[3px] border-solid border-gray-700 bg-[linear-gradient(132deg,rgba(31,41,55,1)_0%,rgba(17,24,39,1)_100%)] rounded-none`}>
      <div className="absolute w-[355px] h-[400px] top-1 left-[-351px] bg-[linear-gradient(90deg,rgba(99,102,241,0)_0%,rgba(99,102,241,0.1)_50%,rgba(99,102,241,0)_100%)]" />
      
      <CardContent className="p-0">
        <div className={`${isCompact ? 'flex w-[315px] items-center gap-[12.11px] absolute top-[23px] left-[22px]' : 'flex w-[298px] items-center gap-[12.33px] absolute top-[35px] left-8'}`}>
          <img className={`${isCompact ? 'w-[32.29px] h-[32.29px]' : 'w-[49.29px] h-[49.29px]'}`} alt="Icon" src={icon} />
          <span className="[font-family:'Menlo-Regular',Helvetica] font-normal text-v0-friedrichshain-connection-ret-steelvercelappcornflower-blue text-[14.8px] leading-[32.9px] tracking-[0] whitespace-nowrap">
            {emoji}
          </span>
        </div>

        <div className={`${isCompact ? 'w-[312px] absolute top-[79px] left-[23px]' : 'flex flex-col w-[291px] items-start absolute top-[108px] left-9'}`}>
          <h4 className="text-[35.9px] leading-10 [font-family:'Menlo-Bold',Helvetica] font-bold text-white tracking-[0] whitespace-nowrap">
            {phase}
          </h4>
        </div>

        <div className={`${isCompact ? 'w-[312px] absolute top-[119px] left-[23px]' : 'w-[291px] items-start absolute top-[156px] left-9 flex flex-col'}`}>
          <h3 className="text-[23.8px] leading-8 [font-family:'Menlo-Bold',Helvetica] font-bold text-white tracking-[0] whitespace-nowrap">
            {title}
          </h3>
        </div>

        <div className={`${isCompact ? 'w-[312px] absolute top-[163px] left-[23px]' : 'flex flex-col w-[291px] items-start absolute top-[204px] left-9'}`}>
          <p className="text-[15.9px] leading-6 [font-family:'Menlo-Regular',Helvetica] font-normal text-v0-friedrichshain-connection-ret-steelvercelappgray-chateau tracking-[0]">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};