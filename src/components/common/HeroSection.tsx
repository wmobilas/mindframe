import React from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { heroContent } from "../../data/content";

interface HeroSectionProps {
  size?: "small" | "medium" | "large";
  showBadges?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  size = "large", 
  showBadges = true 
}) => {
  const sizeClasses = {
    small: {
      title: "text-[29.6px] leading-[30px] tracking-[-1.50px]",
      subtitle: "text-[19.8px] leading-7",
      description: "text-[15.9px] leading-[26px]",
      button: "min-h-11 px-[23px] py-[13px] text-[12.4px] tracking-[0.64px]"
    },
    medium: {
      title: "text-[59.3px] leading-[60px] tracking-[-3.00px]",
      subtitle: "text-[29.9px] leading-9",
      description: "text-[19.8px] leading-7",
      button: "min-h-12 px-[27px] py-[15px] text-[13.7px] tracking-[0.70px]"
    },
    large: {
      title: "text-[94.9px] leading-[96px] tracking-[-4.80px]",
      subtitle: "text-[47.8px] leading-[48px]",
      description: "text-[19.8px] leading-7",
      button: "min-h-14 px-9 py-5 text-[15.6px] tracking-[1.60px]"
    }
  };

  const classes = sizeClasses[size];

  return (
    <div className="flex flex-col items-center gap-8 w-full relative">
      {/* Main Headline */}
      <div className="flex flex-col items-center w-full">
        <h1 className={`${classes.title} [font-family:'Menlo-Bold',Helvetica] font-bold text-white text-center w-full`}>
          {heroContent.title.line1}
        </h1>
        <h1 className={`${classes.title} [font-family:'Menlo-Bold',Helvetica] font-bold text-white text-center w-full`}>
          {heroContent.title.line2}
        </h1>
        <div className="relative flex flex-col items-center w-full">
          <div className="flex flex-col items-center absolute -top-px -left-px opacity-80">
            <span className={`${classes.title} text-v0-friedrichshain-connection-ret-steelvercelappflamingo [font-family:'Menlo-BoldItalic',Helvetica] font-bold italic text-center underline whitespace-nowrap`}>
              {heroContent.title.line3}
            </span>
          </div>
          <div className="flex flex-col items-center absolute top-px left-px opacity-80">
            <span className={`${classes.title} text-v0-friedrichshain-connection-ret-steelvercelappcornflower-blue [font-family:'Menlo-BoldItalic',Helvetica] font-bold italic text-center underline whitespace-nowrap`}>
              {heroContent.title.line3}
            </span>
          </div>
          <span className={`${classes.title} text-v0-friedrichshain-connection-ret-steelvercelappflamingo [font-family:'Menlo-BoldItalic',Helvetica] font-bold italic text-center underline whitespace-nowrap`}>
            {heroContent.title.line3}
          </span>
        </div>
      </div>

      {/* Subtitle */}
      <div className="flex flex-col items-center w-full">
        <h2 className={`${classes.subtitle} bg-[linear-gradient(177deg,rgba(255,255,255,1)_0%,rgba(229,231,235,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Menlo-Bold',Helvetica] font-bold text-transparent text-center tracking-[0] w-full`}>
          {heroContent.subtitle}
        </h2>
      </div>

      {/* Description */}
      <div className="flex flex-col max-w-4xl w-full items-center px-4">
        <p className={`${classes.description} [font-family:'Menlo-Regular',Helvetica] font-normal text-v0-friedrichshain-connection-ret-steelvercelappgray-chateau text-center tracking-[0]`}>
          {heroContent.description}
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 pt-8 w-full px-4">
        <Button className={`${classes.button} bg-v0-friedrichshain-connection-ret-steelvercelappflamingo border-[3px] border-solid border-red-500 relative overflow-hidden rounded-none`}>
          <span className="[font-family:'Menlo-Bold',Helvetica] font-bold text-v0-friedrichshain-connection-ret-steelvercelappblack text-center whitespace-nowrap leading-6">
            {heroContent.buttons.primary}
          </span>
        </Button>

        <Button
          variant="outline"
          className={`${classes.button} border-[3px] border-solid border-white rounded-none relative overflow-hidden`}
        >
          <div className="flex items-center gap-2">
            <img className="w-4 h-4" alt="Play" src="/frame.svg" />
            <span className="[font-family:'Menlo-Bold',Helvetica] font-bold text-white text-center whitespace-nowrap leading-6">
              {heroContent.buttons.secondary}
            </span>
          </div>
        </Button>
      </div>

      {/* Feature Badges */}
      {showBadges && (
        <div className="flex flex-wrap justify-center gap-4 mt-4 w-full">
          {heroContent.badges.map((badge, index) => (
            <Badge
              key={index}
              className="h-[33px] px-3.5 py-2 bg-v0-friedrichshain-connection-ret-steelvercelappwhite-5 border-2 border-solid border-gray-700 backdrop-blur-[5px] rounded-none"
            >
              <span className="text-[10.7px] tracking-[1.12px] leading-[16.8px] [font-family:'Menlo-Bold',Helvetica] font-bold text-v0-friedrichshain-connection-ret-steelvercelappmischka text-center whitespace-nowrap">
                {badge}
              </span>
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};