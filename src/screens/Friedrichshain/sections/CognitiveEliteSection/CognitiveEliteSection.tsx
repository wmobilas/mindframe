import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";
import { Separator } from "../../../../components/ui/separator";

export const CognitiveEliteSection = (): JSX.Element => {
  // Define data for mission protocol cards
  const missionProtocolCards = [
    {
      number: "01",
      emoji: "🧠",
      title: "COGNITIVE\nDIAGNOSTICS",
      description: "Engage in the \"Neural\nGauntlet\"—a voice-powered\nassessment with Captain Kalm\nto map your unique thinking\npatterns and cognitive\narchitecture through advanced\nAI analysis."
    },
    {
      number: "02-29",
      title: "BRAIN SLUG BATTLES",
      description: "Embark on daily \"Crucible\"\nsimulations. Defeat cognitive\nbiases (Brain Slugs) and earn\nXP to upgrade your NFT\nspaceship through gamified\nneural enhancement protocols."
    },
    {
      number: "30",
      emoji: "🏆",
      title: "MISSION DEBRIEF",
      description: "Receive your final cognitive\nanalysis and a personalized\nroadmap to continue your\nentrepreneurial evolution\nbeyond the initial mission\nparameters."
    }
  ];

  // Define data for abstract to actionable cards
  const abstractToActionableCards = [
    {
      phase: "PHASE 01",
      icon: "/svg-8.svg",
      emoji: "🎤",
      title: "VOICE ANALYSIS",
      description: "Engage in live voice\nconversations with our AI to\nmap your cognitive patterns,\ndecision-making processes, and\nentrepreneurial potential\nthrough neural linguistic\nanalysis."
    },
    {
      phase: "PHASE 02",
      icon: "/svg-7.svg",
      emoji: "🚀",
      title: "NFT SHIP FORGED",
      description: "Receive a unique \"Cognitive\nSignature Ship\"—a dynamic NFT\nrepresenting your leadership\nstyle that evolves as you\ncomplete missions and upgrade\nneural pathways."
    },
    {
      phase: "PHASE 03",
      icon: "/svg-21.svg",
      emoji: "👾",
      title: "DEFEAT BRAIN SLUGS",
      description: "Embark on gamified missions to\nmaster cognitive skills,\neliminate limiting thought\npatterns, and systematically\nupgrade your mental operating\nsystem."
    }
  ];

  // Define data for stats cards
  const statsCards = [
    {
      value: "10,000+",
      emoji: "👾",
      label: "BRAIN SLUGS\nDEFEATED"
    },
    {
      value: "98.7%",
      emoji: "🏆",
      label: "MISSION SUCCESS\nRATE"
    },
    {
      value: "24/7",
      emoji: "🤖",
      label: "CAPTAIN KALM\nAVAILABLE"
    }
  ];

  // Define data for testimonial cards
  const testimonialCards = [
    {
      quote: "\"Captain Kalm's sarcastic\nhumor made cognitive\ntraining actually\nenjoyable. My decision-\nmaking speed improved\n300%.\"",
      name: "SARAH CHEN",
      title: "Tech Founder"
    },
    {
      quote: "\"The NFT ship evolution\nkept me motivated.\nWatching my cognitive\nprofile upgrade in real-\ntime was addictive.\"",
      emoji: "🚀",
      name: "MARCUS RODRIGUEZ",
      title: "Serial Entrepreneur"
    },
    {
      quote: "\"Brain Slug battles are\ngenius. I defeated my\nconfirmation bias and\nclosed our Series A two\nweeks later.\"",
      emoji: "💼",
      name: "ALEX THOMPSON",
      title: "Startup CEO"
    }
  ];

  // Define data for feature badges
  const featureBadges = [
    {
      text: "🆓 30-DAY FREE TRIAL",
      left: "left-[181px]"
    },
    {
      text: "🤖 AI-POWERED",
      left: "left-[392px]"
    },
    {
      text: "💳 NO CREDIT CARD",
      left: "left-[545px]"
    }
  ];

  return (
    <section className="flex flex-col w-full min-h-[1200px] relative bg-[linear-gradient(0deg,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_100%),linear-gradient(0deg,rgba(18,18,18,1)_0%,rgba(18,18,18,1)_100%)] overflow-y-auto">
      <div className="flex flex-col min-h-[1200px] items-center justify-center relative w-full">
        <div className="inline-flex flex-col min-h-[1200px] items-start relative w-full bg-v0-friedrichshain-connection-ret-steelvercelappblack overflow-hidden overflow-y-auto">
          <div className="absolute w-full h-[1200px] [background:radial-gradient(50%_50%_at_-4450%_-4450%,rgba(255,255,255,0.1)_2%,rgba(255,255,255,0)_2%)] opacity-30" />
          <div className="absolute w-full h-[1200px] bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_3%,rgba(255,255,255,0)_3%),linear-gradient(90deg,rgba(255,255,255,0.05)_3%,rgba(255,255,255,0)_3%)] opacity-20" />
          
          {/* Hero Section */}
          <div className="min-h-[1200px] justify-center py-[225px] overflow-hidden flex items-center relative w-full">
            <div className="absolute w-full h-[1200px] top-[360px] left-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.3)_0%,rgba(0,0,0,1)_50%,rgba(0,0,0,1)_100%)]" />
            <img className="absolute w-8 h-8 top-[57px] left-[119px]" alt="Svg" src="/svg-6.svg" />
            <div className="inline-flex flex-col items-start absolute top-[195px] left-[977px]">
              <img className="relative w-7 h-7" alt="Svg" src="/svg-3.svg" />
            </div>
            <div className="inline-flex flex-col items-start absolute top-[1014px] left-[158px] rotate-[89.59deg]">
              <img className="relative w-[27.34px] h-[27.34px] mt-[-0.10px] mb-[-0.10px] ml-[-0.10px] mr-[-0.10px] rotate-[-89.59deg]" alt="Svg" src="/svg-11.svg" />
            </div>
            <div className="inline-flex flex-col items-start absolute top-[1138px] left-[600px]">
              <img className="relative w-8 h-8" alt="Svg" src="/svg-9.svg" />
            </div>
            <div className="flex flex-col max-w-screen-xl items-start px-6 py-0 relative">
              <div className="flex flex-col items-start gap-8 relative w-full">
                <div className="items-start relative w-full flex flex-col">
                  <div className="flex flex-col items-center relative w-full">
                    <h1 className="relative w-full mt-[-1.00px] [font-family:'Menlo-Bold',Helvetica] font-bold text-white text-[94.9px] text-center tracking-[-4.80px] leading-[96px]">
                      THE BUSINESS
                    </h1>
                  </div>
                  <div className="flex flex-col items-center relative w-full">
                    <h1 className="relative w-full mt-[-1.00px] [font-family:'Menlo-Bold',Helvetica] font-bold text-white text-[94.9px] text-center tracking-[-4.80px] leading-[96px]">
                      MULTIVERSE IS
                    </h1>
                  </div>
                  <div className="flex flex-col items-center relative w-full">
                    <div className="flex flex-col w-[896px] h-24 items-center absolute -top-px -left-px opacity-80">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Menlo-BoldItalic',Helvetica] font-bold italic text-v0-friedrichshain-connection-ret-steelvercelappflamingo text-8xl text-center tracking-[-4.80px] leading-[96px] underline whitespace-nowrap">
                        CHAOS.
                      </div>
                    </div>
                    <div className="flex flex-col w-[896px] h-24 items-center absolute top-px left-px opacity-80">
                      <div className="text-v0-friedrichshain-connection-ret-steelvercelappcornflower-blue text-8xl tracking-[-4.80px] leading-[96px] relative w-fit mt-[-1.00px] [font-family:'Menlo-BoldItalic',Helvetica] font-bold italic text-center underline whitespace-nowrap">
                        CHAOS.
                      </div>
                    </div>
                    <div className="text-v0-friedrichshain-connection-ret-steelvercelappflamingo text-[94.3px] tracking-[-4.80px] leading-[96px] relative w-fit mt-[-1.00px] [font-family:'Menlo-BoldItalic',Helvetica] font-bold italic text-center underline whitespace-nowrap">
                      CHAOS.
                    </div>
                  </div>
                </div>
                <div className="items-center relative w-full flex flex-col">
                  <h2 className="relative w-full mt-[-1.00px] bg-[linear-gradient(177deg,rgba(255,255,255,1)_0%,rgba(229,231,235,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Menlo-Bold',Helvetica] font-bold text-transparent text-[47.8px] text-center tracking-[0] leading-[48px]">
                    YOUR MIND DOESN&#39;T HAVE TO BE.
                  </h2>
                </div>
                <div className="flex flex-col max-w-4xl w-[896px] items-center px-4 py-0 relative">
                  <p className="relative w-fit mt-[-1.00px] [font-family:'Menlo-Regular',Helvetica] font-normal text-v0-friedrichshain-connection-ret-steelvercelappgray-chateau text-[19.8px] text-center tracking-[0] leading-7">
                    Launch your free 30-day cognitive enhancement mission.
                    Battle &#34;Brain
                    <br />
                    Slugs&#34; and forge your unique entrepreneurial mindset
                    through Captain
                    <br />
                    Kalm&#39;s sarcastic-yet-brilliant training protocols in the
                    Kalmverse.
                  </p>
                </div>
                <div className="flex items-center justify-center gap-6 pt-8 pb-0 px-4 relative w-full">
                  <Button 
                    className="min-h-14 px-9 py-5 bg-v0-friedrichshain-connection-ret-steelvercelappflamingo overflow-hidden border-4 border-solid border-red-500 relative"
                  >
                    <div className="absolute w-[378px] h-14 top-1 left-[-374px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0)_100%)]" />
                    <span className="relative w-fit mt-[-1.00px] [font-family:'Menlo-Bold',Helvetica] font-bold text-v0-friedrichshain-connection-ret-steelvercelappblack text-[15.6px] text-center tracking-[1.60px] leading-6 whitespace-nowrap">
                      🚀 LAUNCH FREE 30-DAY MISSION
                    </span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="min-h-14 px-9 py-5 relative overflow-hidden border-4 border-solid border-white"
                  >
                    <div className="absolute w-[374px] h-14 top-1 left-[-374px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0)_100%)]" />
                    <div className="flex flex-col w-6 h-4 items-start pl-0 pr-2 py-0 relative">
                      <div className="flex flex-col w-4 h-4 items-center justify-center relative">
                        <img className="relative flex-1 w-4 grow" alt="Frame" src="/frame.svg" />
                      </div>
                    </div>
                    <span className="relative w-fit mt-[-1.00px] [font-family:'Menlo-Bold',Helvetica] font-bold text-white text-base text-center tracking-[1.60px] leading-6 whitespace-nowrap">
                      🚀 WATCH CAPTAIN KALM DEMO
                    </span>
                  </Button>
                </div>
                <div className="relative w-full h-[106px]">
                  {featureBadges.map((badge, index) => (
                    <Badge 
                      key={index}
                      className={`inline-flex h-[38px] px-[18px] py-2.5 absolute top-8 ${badge.left} bg-v0-friedrichshain-connection-ret-steelvercelappwhite-5 border-2 border-solid border-gray-700 backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)]`}
                    >
                      <span className="relative w-fit mt-[-2.00px] [font-family:'Menlo-Bold',Helvetica] font-bold text-v0-friedrichshain-connection-ret-steelvercelappmischka text-[11.6px] text-center tracking-[1.20px] leading-[18px] whitespace-nowrap">
                        {badge.text}
                      </span>
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* This Isn't Another Webinar Section */}
          <div className="flex flex-col items-center px-0 py-20 relative w-full bg-v0-friedrichshain-connection-ret-steelvercelappebony">
            <div className="absolute w-[1200px] h-[352px] top-0 left-0 [background:radial-gradient(50%_50%_at_-4450%_-4450%,rgba(255,255,255,0.1)_2%,rgba(255,255,255,0)_2%),linear-gradient(0deg,rgba(239,68,68,1)_0%,rgba(239,68,68,1)_100%)]" />
            <div className="flex flex-col max-w-4xl w-[896px] items-start gap-8 relative">
              <div className="flex flex-col items-center relative w-full">
                <h2 className="relative w-full mt-[-1.00px] [font-family:'Menlo-Bold',Helvetica] font-bold text-v0-friedrichshain-connection-ret-steelvercelappblack text-[46.5px] text-center tracking-[0] leading-[48px]">
                  THIS ISN&#39;T AN🚫THER WEBINAR
                </h2>
              </div>
              <div className="flex flex-col items-center px-4 py-0 relative w-full">
                <p className="relative w-full mt-[-1.00px] [font-family:'Menlo-Regular',Helvetica] font-normal text-v0-friedrichshain-connection-ret-steelvercelappathens-gray text-[19.8px] text-center tracking-[0] leading-7">
                  Standard leadership training is broken—abstract theories with
                  zero
                  <br />
                  practical application. We offer a single, intensive 30-day
                  cognitive
                  <br />
                  enhancement campaign designed to build measurable
                  entrepreneurial
                  <br />
                  skills through gamified neural warfare. 🧠⚔
                </p>
              </div>
            </div>
          </div>
          
          {/* Mission Protocol Section */}
          <div className="flex-col px-0 py-20 bg-v0-friedrichshain-connection-ret-steelvercelappblack flex items-center relative w-full">
            <div className="absolute w-[1200px] h-[679px] top-0 left-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_3%,rgba(255,255,255,0)_3%),linear-gradient(90deg,rgba(255,255,255,0.05)_3%,rgba(255,255,255,0)_3%)] opacity-10" />
            <div className="flex flex-col max-w-screen-xl w-[1200px] items-start gap-16 px-6 py-0 relative">
              <div className="flex flex-col items-center relative w-full">
                <h2 className="bg-[linear-gradient(177deg,rgba(255,255,255,1)_0%,rgba(229,231,235,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent text-[57.7px] text-center leading-[60px] relative w-full mt-[-1.00px] [font-family:'Menlo-Bold',Helvetica] font-bold tracking-[0]">
                  🎯 MISSION PROTOCOL
                </h2>
              </div>
              <div className="flex max-w-6xl w-[1152px] items-start justify-center gap-8 relative">
                {missionProtocolCards.map((card, index) => (
                  <Card 
                    key={index}
                    className="flex flex-col w-[362.66px] items-start gap-[14.7px] pt-[34.73px] pb-9 px-9 relative bg-v0-friedrichshain-connection-ret-steelvercelappblack overflow-hidden border-4 border-solid border-white"
                  >
                    <div className="absolute w-[355px] h-[387px] top-1 left-[-351px] bg-[linear-gradient(90deg,rgba(239,68,68,0)_0%,rgba(239,68,68,0.1)_50%,rgba(239,68,68,0)_100%)]" />
                    <CardContent className="p-0">
                      <div className="gap-[36.01px] relative w-full rotate-[-0.30deg] flex items-center">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Menlo-Bold',Helvetica] font-bold text-v0-friedrichshain-connection-ret-steelvercelappflamingo text-[59.9px] tracking-[0] leading-[60px] whitespace-nowrap">
                          {card.number}
                        </div>
                        {card.emoji && (
                          <div className="relative w-fit mt-[-1.00px] [font-family:'Menlo-Bold',Helvetica] font-bold text-v0-friedrichshain-connection-ret-steelvercelappflamingo text-[36.9px] tracking-[0] leading-[60px] whitespace-nowrap">
                            {card.emoji}
                          </div>
                        )}
                      </div>
                      <div className="relative w-full flex flex-col items-start">
                        <h3 className="relative w-full mt-[-1.00px] [font-family:'Menlo-Bold',Helvetica] font-bold text-white text-[23.8px] tracking-[0] leading-8">
                          {card.title}
                        </h3>
                      </div>
                      <div className="flex flex-col items-start pt-[1.3px] pb-0 px-0 relative w-full">
                        <p className="relative w-full mt-[-1.00px] [font-family:'Menlo-Regular',Helvetica] font-normal text-v0-friedrichshain-connection-ret-steelvercelappgray-chateau text-base tracking-[0] leading-6">
                          {card.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          
          {/* From Abstract to Actionable Section */}
          <div className="flex flex-col items-center px-0 py-20 relative w-full bg-v0-friedrichshain-connection-ret-steelvercelappebony">
            <div className="absolute w-[1200px] h-[692px] top-0 left-0 [background:radial-gradient(50%_50%_at_-4450%_-4450%,rgba(255,255,255,0.1)_2%,rgba(255,255,255,0)_2%)] opacity-10" />
            <div className="flex flex-col max-w-screen-xl w-[1200px] items-start gap-16 px-6 py-0 relative">
              <div className="flex flex-col items-center relative w-full">
                <h2 className="relative w-full mt-[-1.00px] bg-[linear-gradient(177deg,rgba(255,255,255,1)_0%,rgba(229,231,235,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Menlo-Bold',Helvetica] font-bold text-transparent text-[58.4px] text-center tracking-[0] leading-[60px]">
                  🔄 FROM ABSTRACT TO ACTIONABLE
                </h2>
              </div>
              <div className="flex max-w-6xl w-[1152px] items-start justify-center gap-8 relative">
                {abstractToActionableCards.map((card, index) => (
                  <Card 
                    key={index}
                    className="relative w-[362.66px] overflow-hidden border-4 border-solid border-gray-700 bg-[linear-gradient(132deg,rgba(31,41,55,1)_0%,rgba(17,24,39,1)_100%)]"
                  >
                    <div className="absolute w-[355px] h-[400px] top-1 left-[-351px] bg-[linear-gradient(90deg,rgba(99,102,241,0)_0%,rgba(99,102,241,0.1)_50%,rgba(99,102,241,0)_100%)]" />
                    <CardContent className="p-0">
                      <div className="flex w-[298px] items-center gap-[12.33px] absolute top-[35px] left-8">
                        <img className="relative w-[49.29px] h-[49.29px]" alt="Svg" src={card.icon} />
                        <div className="inline-flex flex-col items-start relative">
                          <div className="w-fit [font-family:'Menlo-Regular',Helvetica] font-normal text-v0-friedrichshain-connection-ret-steelvercelappcornflower-blue text-[14.8px] leading-[32.9px] whitespace-nowrap relative mt-[-1.00px] tracking-[0]">
                            {card.emoji}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col w-[291px] items-start absolute top-[108px] left-9">
                        <div className="text-[35.9px] leading-10 relative w-fit mt-[-1.00px] [font-family:'Menlo-Bold',Helvetica] font-bold text-white tracking-[0] whitespace-nowrap">
                          {card.phase}
                        </div>
                      </div>
                      <div className="w-[291px] items-start absolute top-[156px] left-9 flex flex-col">
                        <h3 className="relative w-fit mt-[-1.00px] [font-family:'Menlo-Bold',Helvetica] font-bold text-white text-[23.8px] tracking-[0] leading-8 whitespace-nowrap">
                          {card.title}
                        </h3>
                      </div>
                      <div className="flex flex-col w-[291px] items-start absolute top-[204px] left-9">
                        <p className="relative w-fit mt-[-1.00px] [font-family:'Menlo-Regular',Helvetica] font-normal text-v0-friedrichshain-connection-ret-steelvercelappgray-chateau text-base tracking-[0] leading-6">
                          {card.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          
          {/* Join the Cognitive Elite Section */}
          <div className="flex-col px-0 py-20 bg-v0-friedrichshain-connection-ret-steelvercelappblack flex items-center relative w-full">
            <div className="absolute w-[1200px] h-[450px] top-0 left-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_3%,rgba(255,255,255,0)_3%),linear-gradient(90deg,rgba(255,255,255,0.05)_3%,rgba(255,255,255,0)_3%)] opacity-15" />
            <div className="flex flex-col max-w-screen-xl w-[1200px] items-center gap-16 px-6 py-0 relative">
              <div className="flex flex-col items-center relative w-full">
                <h2 className="relative w-full mt-[-1.00px] bg-[linear-gradient(177deg,rgba(255,255,255,1)_0%,rgba(229,231,235,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Menlo-Bold',Helvetica] font-bold text-transparent text-[58.2px] text-center tracking-[0] leading-[60px]">
                  🎮 JOIN THE COGNITIVE ELITE
                </h2>
              </div>
              <div className="flex max-w-4xl w-[896px] items-start justify-center gap-8 relative">
                {statsCards.map((card, index) => (
                  <Card 
                    key={index}
                    className="flex flex-col w-[277.33px] items-start gap-4 p-[27px] relative border-[3px] border-solid border-gray-700 [background:radial-gradient(50%_50%_at_50%_50%,rgba(17,24,39,1)_0%,rgba(0,0,0,1)_100%)]"
                  >
                    <CardContent className="p-0 w-full">
                      <div className="flex items-center justify-center gap-[16.01px] relative w-full">
                        <div className="w-fit [font-family:'Menlo-Bold',Helvetica] font-bold text-v0-friedrichshain-connection-ret-steelvercelappflamingo text-[35.9px] text-center leading-10 whitespace-nowrap relative mt-[-1.00px] tracking-[0]">
                          {card.value}
                        </div>
                        <div className="inline-flex flex-col items-center relative">
                          <div className="w-fit [font-family:'Menlo-Bold',Helvetica] font-bold text-v0-friedrichshain-connection-ret-steelvercelappflamingo text-[21.9px] text-center leading-10 whitespace-nowrap relative mt-[-1.00px] tracking-[0]">
                            {card.emoji}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center relative w-full">
                        <div className="relative w-full mt-[-1.00px] [font-family:'Menlo-Bold',Helvetica] font-bold text-v0-friedrichshain-connection-ret-steelvercelappmischka text-[19.8px] text-center tracking-[0] leading-7">
                          {card.label}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          
          {/* Testimonials Section */}
          <div className="flex flex-col items-center px-0 py-20 relative w-full bg-v0-friedrichshain-connection-ret-steelvercelappebony">
            <div className="absolute w-[1200px] h-[468px] top-0 left-0 [background:radial-gradient(50%_50%_at_-4450%_-4450%,rgba(255,255,255,0.1)_2%,rgba(255,255,255,0)_2%)] opacity-10" />
            <div className="flex max-w-6xl w-[1152px] items-start justify-center gap-8 relative">
              {testimonialCards.map((card, index) => (
                <Card 
                  key={index}
                  className="flex flex-col w-[362.66px] items-start gap-6 p-9 relative bg-v0-friedrichshain-connection-ret-steelvercelappebony-clay border-4 border-solid border-gray-700"
                >
                  <CardContent className="p-0 w-full">
                    <div className="flex flex-col items-start relative w-full">
                      <p className="text-lg leading-7 relative w-full mt-[-1.00px] [font-family:'Menlo-Regular',Helvetica] font-normal text-v0-friedrichshain-connection-ret-steelvercelappmischka tracking-[0]">
                        {card.quote}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 relative w-full mt-6">
                      {card.emoji ? (
                        <div className="inline-flex flex-col items-start relative">
                          <div className="w-fit [font-family:'Menlo-Regular',Helvetica] font-normal text-white text-[15px] leading-8 whitespace-nowrap relative mt-[-1.00px] tracking-[0]">
                            {card.emoji}
                          </div>
                        </div>
                      ) : (
                        <div className="relative w-[28.81px] h-8" />
                      )}
                      <div className="inline-flex flex-col items-start relative">
                        <div className="flex flex-col items-start relative w-full">
                          <div className="relative w-fit mt-[-1.00px] [font-family:'Menlo-Bold',Helvetica] font-bold text-white text-[15.9px] tracking-[0] leading-6 whitespace-nowrap">
                            {card.name}
                          </div>
                        </div>
                        <div className="flex flex-col items-start relative w-full">
                          <div className="relative w-fit mt-[-1.00px] [font-family:'Menlo-Regular',Helvetica] font-normal text-v0-friedrichshain-connection-ret-steelvercelappcornflower-blue text-[13.9px] tracking-[0] leading-5 whitespace-nowrap">
                            {card.title}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Final CTA Section */}
          <div className="flex-col px-0 py-20 bg-v0-friedrichshain-connection-ret-steelvercelappblack flex items-center relative w-full">
            <div className="absolute w-[1200px] h-[740px] top-0 left-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_3%,rgba(255,255,255,0)_3%),linear-gradient(90deg,rgba(255,255,255,0.05)_3%,rgba(255,255,255,0)_3%)] opacity-20" />
            <div className="absolute w-[1200px] h-[740px] top-0 left-0 [background:radial-gradient(50%_50%_at_-4450%_-4450%,rgba(255,255,255,0.1)_2%,rgba(255,255,255,0)_2%)] opacity-10" />
            <div className="flex flex-col max-w-4xl w-[896px] items-start gap-8 pt-0 pb-[232px] px-0 relative">
              <div className="flex flex-col items-center relative w-full">
                <h2 className="relative w-full mt-[-1.00px] bg-[linear-gradient(172deg,rgba(255,255,255,1)_0%,rgba(229,231,235,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Menlo-Bold',Helvetica] font-bold text-transparent text-[57.9px] text-center tracking-[0] leading-[60px]">
                  🎯 READY FOR COGNITIVE
                  <br />
                  DOMINATION?
                </h2>
              </div>
              <div className="flex flex-col items-center px-4 py-0 relative w-full">
                <p className="relative w-full mt-[-1.00px] [font-family:'Menlo-Regular',Helvetica] font-normal text-v0-friedrichshain-connection-ret-steelvercelappgray-chateau text-[19.8px] text-center tracking-[0] leading-7">
                  Your 30-day neural enhancement mission is completely free. No
                  credit
                  <br />
                  card required. No corporate bureaucracy. Just pure cognitive
                  evolution
                  <br />
                  with Captain Kalm&#39;s guidance in the Kalmverse. 🚀🧠
                </p>
              </div>
              <div className="flex items-center justify-center gap-6 pt-4 pb-0 px-4 relative w-full">
                <Button className="inline-flex min-h-14 items-center justify-center px-9 py-5 relative bg-v0-friedrichshain-connection-ret-steelvercelappflamingo overflow-hidden border-4 border-solid border-red-500">
                  <div className="absolute w-[310px] h-14 top-1 left-[-306px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0)_100%)]" />
                  <span className="relative w-fit mt-[-1.00px] [font-family:'Menlo-Bold',Helvetica] font-bold text-v0-friedrichshain-connection-ret-steelvercelappblack text-[15.5px] text-center tracking-[1.60px] leading-6 whitespace-nowrap">
                    🔥 INITIATE NEURAL SYNC
                  </span>
                </Button>
                <Button
                  variant="outline"
                  className="inline-flex min-h-14 items-center justify-center px-9 py-5 relative overflow-hidden border-4 border-solid border-white"
                >
                  <div className="absolute w-[283px] h-14 top-1 left-[-282px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0)_100%)]" />
                  <span className="relative w-fit mt-[-4.00px] [font-family:'Menlo-Bold',Helvetica] font-bold text-white text-base text-center tracking-[1.60px] leading-6 whitespace-nowrap">
                    🚀 MEET CAPTAIN KALM
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col w-8 h-8 items-start justify-center absolute top-0 -left-4">
        <img
          className="relative flex-1 self-stretch w-full grow"
          alt="Mask group"
          src="/mask-group-1.svg"
        />
      </div>
    </section>
  );
};