import React from "react";
import { Card, CardContent } from "../ui/card";

interface MissionCardProps {
  id: string;
  emoji?: string;
  title: string;
  description: string;
  variant?: "default" | "compact";
}

export const MissionCard: React.FC<MissionCardProps> = ({
  id,
  emoji,
  title,
  description,
  variant = "default"
}) => {
  const isCompact = variant === "compact";
  
  return (
    <Card className={`${isCompact ? 'w-full h-[259.75px]' : 'w-[362.66px]'} bg-v0-friedrichshain-connection-ret-steelvercelappblack border-[3px] border-solid border-white rounded-none overflow-hidden relative`}>
      <div className="absolute w-[355px] h-[387px] top-1 left-[-351px] bg-[linear-gradient(90deg,rgba(239,68,68,0)_0%,rgba(239,68,68,0.1)_50%,rgba(239,68,68,0)_100%)]" />
      
      <CardContent className="p-0">
        <div className={`${isCompact ? 'w-[312px] gap-[21.61px] absolute top-[22px] left-[23px] rotate-[1.41deg]' : 'gap-[36.01px] relative w-full rotate-[-0.30deg]'} flex items-center`}>
          <span className="[font-family:'Menlo-Bold',Helvetica] font-bold text-v0-friedrichshain-connection-ret-steelvercelappflamingo text-[59.9px] tracking-[0] leading-[60px] whitespace-nowrap">
            {id}
          </span>
          {emoji && (
            <span className="[font-family:'Menlo-Bold',Helvetica] font-bold text-v0-friedrichshain-connection-ret-steelvercelappflamingo text-[36.9px] tracking-[0] leading-[60px] whitespace-nowrap">
              {emoji}
            </span>
          )}
        </div>

        <div className={`${isCompact ? 'w-[312px] absolute top-[79px] left-[23px]' : 'relative w-full flex flex-col items-start mt-4'}`}>
          <h3 className="text-[23.8px] leading-8 [font-family:'Menlo-Bold',Helvetica] font-bold text-white tracking-[0] whitespace-pre-line">
            {title}
          </h3>
        </div>

        <div className={`${isCompact ? 'w-[312px] absolute top-[123px] left-[23px]' : 'flex flex-col items-start pt-[1.3px] pb-0 px-0 relative w-full mt-4'}`}>
          <p className="text-[15.9px] leading-6 [font-family:'Menlo-Regular',Helvetica] font-normal text-v0-friedrichshain-connection-ret-steelvercelappgray-chateau tracking-[0]">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};