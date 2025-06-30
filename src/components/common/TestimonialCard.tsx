import React from "react";
import { Card, CardContent } from "../ui/card";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  emoji?: string;
  variant?: "default" | "compact";
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  role,
  emoji,
  variant = "default"
}) => {
  const isCompact = variant === "compact";
  
  return (
    <Card className={`${isCompact ? 'h-[214px] w-full' : 'flex flex-col w-[362.66px] items-start gap-6'} bg-v0-friedrichshain-connection-ret-steelvercelappebony-clay border-[3px] border-solid border-gray-700 rounded-none`}>
      <CardContent className={`${isCompact ? 'flex flex-col gap-6 p-[23px]' : 'p-0 w-full'}`}>
        <div className="flex flex-col items-start w-full">
          <p className={`${isCompact ? 'text-[15.9px] leading-[26px]' : 'text-lg leading-7'} [font-family:'Menlo-Regular',Helvetica] font-normal text-v0-friedrichshain-connection-ret-steelvercelappmischka tracking-[0] w-full`}>
            {quote}
          </p>
        </div>

        <div className={`flex items-center gap-3 w-full ${isCompact ? '' : 'mt-6'}`}>
          {emoji ? (
            <span className="[font-family:'Menlo-Regular',Helvetica] font-normal text-white text-[15px] leading-8 whitespace-nowrap">
              {emoji}
            </span>
          ) : (
            <div className="w-[28.81px] h-8" />
          )}
          
          <div className="flex flex-col">
            <h4 className="[font-family:'Menlo-Bold',Helvetica] font-bold text-white text-[15.9px] tracking-[0] leading-6 whitespace-nowrap">
              {name}
            </h4>
            <p className="[font-family:'Menlo-Regular',Helvetica] font-normal text-v0-friedrichshain-connection-ret-steelvercelappcornflower-blue text-[13.9px] tracking-[0] leading-5 whitespace-nowrap">
              {role}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};