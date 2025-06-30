import React from "react";
import { Card, CardContent } from "../ui/card";

interface StatCardProps {
  value: string;
  emoji: string;
  label: string;
  variant?: "default" | "compact";
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  emoji,
  label,
  variant = "default"
}) => {
  const isCompact = variant === "compact";
  
  return (
    <Card className={`${isCompact ? 'h-[126px] w-full p-[23px]' : 'flex flex-col w-[277.33px] items-start gap-4 p-[27px]'} border-[3px] border-solid border-gray-700 [background:radial-gradient(50%_50%_at_50%_50%,rgba(17,24,39,1)_0%,rgba(0,0,0,1)_100%)] rounded-none`}>
      <CardContent className={`p-0 ${isCompact ? 'flex flex-col gap-4' : 'w-full'}`}>
        <div className="flex items-center justify-center gap-4 w-full">
          <span className={`[font-family:'Menlo-Bold',Helvetica] font-bold text-v0-friedrichshain-connection-ret-steelvercelappflamingo ${isCompact ? 'text-[29.9px] leading-9' : 'text-[35.9px] leading-10'} text-center whitespace-nowrap`}>
            {value}
          </span>
          <span className={`[font-family:'Menlo-Bold',Helvetica] font-bold text-v0-friedrichshain-connection-ret-steelvercelappflamingo ${isCompact ? 'text-[15px] leading-8' : 'text-[21.9px] leading-10'} text-center whitespace-nowrap`}>
            {emoji}
          </span>
        </div>
        
        <div className={`${isCompact ? '' : 'flex flex-col items-center w-full'}`}>
          <h3 className={`${isCompact ? 'text-[17.9px]' : 'text-[19.8px]'} [font-family:'Menlo-Bold',Helvetica] font-bold text-v0-friedrichshain-connection-ret-steelvercelappmischka text-center tracking-[0] leading-7 w-full`}>
            {label.split(' ').map((word, i) => (
              <React.Fragment key={i}>
                {word}
                {i === 0 && <br />}
              </React.Fragment>
            ))}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
};