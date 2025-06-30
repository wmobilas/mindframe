import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea } from "../../../../components/ui/scroll-area";

export const MissionProtocolSection = (): JSX.Element => {
  // Data for mission protocol cards
  const missionProtocolCards = [
    {
      id: "01",
      icon: "🧠",
      title: "COGNITIVE DIAGNOSTICS",
      description: `Engage in the "Neural Gauntlet"—a
      voice-powered assessment with Captain
      Kalm to map your unique thinking
      patterns and cognitive architecture
      through advanced AI analysis.`,
    },
    {
      id: "02-29",
      icon: "",
      title: "BRAIN SLUG BATTLES",
      description: `Embark on daily "Crucible"
      simulations. Defeat cognitive biases
      (Brain Slugs) and earn XP to upgrade
      your NFT spaceship through gamified
      neural enhancement protocols.`,
    },
    {
      id: "30",
      icon: "🏆",
      title: "MISSION DEBRIEF",
      description: `Receive your final cognitive analysis
      and a personalized roadmap to
      continue your entrepreneurial
      evolution beyond the initial mission
      parameters.`,
    },
  ];

  // Data for transformation phase cards
  const transformationPhaseCards = [
    {
      phase: "PHASE 01",
      icon: "/svg-15.svg",
      emoji: "🎤",
      title: "VOICE ANALYSIS",
      description: `Engage in live voice conversations
      with our AI to map your cognitive
      patterns, decision-making processes,
      and entrepreneurial potential through
      neural linguistic analysis.`,
    },
    {
      phase: "PHASE 02",
      icon: "/svg-20.svg",
      emoji: "🚀",
      title: "NFT SHIP FORGED",
      description: `Receive a unique "Cognitive Signature
      Ship"—a dynamic NFT representing your
      leadership style that evolves as you
      complete missions and upgrade neural
      pathways.`,
    },
    {
      phase: "PHASE 03",
      icon: "/svg-24.svg",
      emoji: "👾",
      title: "DEFEAT BRAIN SLUGS",
      description: `Embark on gamified missions to master
      cognitive skills, eliminate limiting
      thought patterns, and systematically
      upgrade your mental operating system.`,
    },
  ];

  // Data for stats cards
  const statsCards = [
    {
      value: "10,000+",
      icon: "👾",
      label: "BRAIN SLUGS DEFEATED",
    },
    {
      value: "98.7%",
      icon: "🏆",
      label: "MISSION SUCCESS RATE",
    },
    {
      value: "24/7",
      icon: "🤖",
      label: "CAPTAIN KALM AVAILABLE",
    },
  ];

  // Data for testimonial cards
  const testimonialCards = [
    {
      quote: `"Captain Kalm's sarcastic humor
      made cognitive training actually
      enjoyable. My decision-making
      speed improved 300%."`,
      name: "SARAH CHEN",
      title: "Tech Founder",
      emoji: "",
    },
    {
      quote: `"The NFT ship evolution kept me
      motivated. Watching my cognitive
      profile upgrade in real-time was
      addictive."`,
      name: "MARCUS RODRIGUEZ",
      title: "Serial Entrepreneur",
      emoji: "🚀",
    },
    {
      quote: `"Brain Slug battles are genius.
      I defeated my confirmation bias
      and closed our Series A two
      weeks later."`,
      name: "ALEX THOMPSON",
      title: "Startup CEO",
      emoji: "💼",
    },
  ];

  // Feature badges data
  const featureBadges = [
    {
      icon: "🆓",
      text: "30-DAY FREE TRIAL",
      position: "top-[22px] left-10",
    },
    {
      icon: "🤖",
      text: "AI-POWERED",
      position: "top-[23px] left-[210px]",
    },
    {
      icon: "💳",
      text: "NO CREDIT CARD",
      position: "top-[63px] left-[111px]",
    },
  ];

  return (
    <ScrollArea className="w-full h-[780px] bg-black">
      <div className="flex flex-col w-full min-h-[780px] relative">
        {/* Background effects */}
        <div className="absolute w-full h-full top-0 left-0 [background:radial-gradient(50%_50%_at_-4450%_-4450%,rgba(255,255,255,0.1)_2%,rgba(255,255,255,0)_2%)] opacity-30" />
        <div className="absolute w-full h-full top-0 left-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_3%,rgba(255,255,255,0)_3%),linear-gradient(90deg,rgba(255,255,255,0.05)_3%,rgba(255,255,255,0)_3%)] opacity-20" />
        <div className="absolute w-full h-full top-0 left-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.3)_0%,rgba(0,0,0,1)_50%,rgba(0,0,0,1)_100%)]" />

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center px-4 py-[53.61px] relative">
          <div className="flex flex-col items-center gap-6 w-full">
            <div className="flex flex-col items-center w-full">
              <h1 className="text-[length:var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-1-font-size)] tracking-[var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-1-letter-spacing)] leading-[var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-1-line-height)] font-v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-1 font-[number:var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-1-font-weight)] text-white text-center [font-style:var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-1-font-style)]">
                THE BUSINESS
              </h1>
              <h1 className="text-[length:var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-1-font-size)] tracking-[var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-1-letter-spacing)] leading-[var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-1-line-height)] font-v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-1 font-[number:var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-1-font-weight)] text-white text-center [font-style:var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-1-font-style)]">
                MULTIVERSE IS
              </h1>
              <div className="relative">
                <div className="absolute -top-px -left-px opacity-50">
                  <span className="text-v0-friedrichshain-connection-ret-steelvercelappflamingo text-3xl tracking-[-1.50px] leading-[30px] [font-family:'Menlo-BoldItalic',Helvetica] font-bold italic text-center underline whitespace-nowrap">
                    CHAOS.
                  </span>
                </div>
                <div className="absolute top-px left-px opacity-50">
                  <span className="text-v0-friedrichshain-connection-ret-steelvercelappcornflower-blue text-3xl tracking-[-1.50px] leading-[30px] [font-family:'Menlo-BoldItalic',Helvetica] font-bold italic text-center underline whitespace-nowrap">
                    CHAOS.
                  </span>
                </div>
                <span className="text-v0-friedrichshain-connection-ret-steelvercelappflamingo text-[length:var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-1-underline-font-size)] tracking-[var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-1-underline-letter-spacing)] leading-[var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-1-underline-line-height)] font-v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-1-underline font-[number:var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-1-underline-font-weight)] [font-style:var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-1-underline-font-style)] text-center underline whitespace-nowrap">
                  CHAOS.
                </span>
              </div>
            </div>

            <div className="w-full text-center">
              <p className="bg-[linear-gradient(176deg,rgba(255,255,255,1)_0%,rgba(229,231,235,1)_100%)] text-[19.8px] leading-7 [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Menlo-Bold',Helvetica] font-bold text-transparent text-center tracking-[0]">
                YOUR MIND DOESN'T HAVE TO BE.
              </p>
            </div>

            <div className="max-w-4xl w-full px-4 text-center">
              <p className="[font-family:'Menlo-Regular',Helvetica] font-normal text-v0-friedrichshain-connection-ret-steelvercelappgray-chateau text-[15.9px] tracking-[0] leading-[26px]">
                Launch your free 30-day cognitive
                <br />
                enhancement mission. Battle
                <br />
                "Brain Slugs" and forge your
                <br />
                unique entrepreneurial mindset
                <br />
                through Captain Kalm's sarcastic-
                <br />
                yet-brilliant training protocols
                <br />
                in the Kalmverse.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 pt-6 pb-0 px-4 w-full">
              <Button className="max-w-[280px] w-[280px] min-h-11 px-[23px] py-[13px] bg-v0-friedrichshain-connection-ret-steelvercelappflamingo border-[3px] border-solid border-red-500 rounded-none relative overflow-hidden">
                <div className="absolute w-[274px] h-11 top-[3px] left-[-271px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0)_100%)]" />
                <span className="text-[12.4px] tracking-[0.64px] leading-[19.2px] [font-family:'Menlo-Bold',Helvetica] font-bold text-v0-friedrichshain-connection-ret-steelvercelappblack text-center whitespace-nowrap">
                  🚀 LAUNCH FREE 30-DAY MISSION
                </span>
              </Button>

              <Button
                variant="outline"
                className="max-w-[280px] w-[280px] min-h-11 px-[23px] py-[13px] border-[3px] border-solid border-white rounded-none relative overflow-hidden"
              >
                <div className="absolute w-[274px] h-[61px] top-[3px] left-[-271px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0)_100%)]" />
                <div className="flex items-center gap-2">
                  <img
                    className="w-[15.61px] h-4"
                    alt="Frame"
                    src="/frame-3.svg"
                  />
                  <span className="text-[length:var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-button-upper-font-size)] tracking-[var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-button-upper-letter-spacing)] leading-[var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-button-upper-line-height)] font-v0-friedrichshain-connection-ret-steel-vercel-app-semantic-button-upper font-[number:var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-button-upper-font-weight)] text-white text-center [font-style:var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-button-upper-font-style)]">
                    🚀 WATCH CAPTAIN KALM
                    <br />
                    DEMO
                  </span>
                </div>
              </Button>
            </div>

            {/* Feature Badges */}
            <div className="relative w-full h-[127.22px]">
              {featureBadges.map((badge, index) => (
                <Badge
                  key={index}
                  className={`h-7 pt-[5px] pb-[6.61px] px-2.5 absolute ${badge.position} inline-flex items-center bg-v0-friedrichshain-connection-ret-steelvercelappwhite-5 border-2 border-solid border-gray-700 backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)] rounded-none`}
                >
                  <span className="text-[length:var(--v0-friedrichshain-connection-ret-steel-vercel-app-menlo-bold-upper-font-size)] tracking-[var(--v0-friedrichshain-connection-ret-steel-vercel-app-menlo-bold-upper-letter-spacing)] leading-[var(--v0-friedrichshain-connection-ret-steel-vercel-app-menlo-bold-upper-line-height)] font-v0-friedrichshain-connection-ret-steel-vercel-app-menlo-bold-upper font-[number:var(--v0-friedrichshain-connection-ret-steel-vercel-app-menlo-bold-upper-font-weight)] text-v0-friedrichshain-connection-ret-steelvercelappmischka text-center whitespace-nowrap [font-style:var(--v0-friedrichshain-connection-ret-steel-vercel-app-menlo-bold-upper-font-style)]">
                    {badge.icon} {badge.text}
                  </span>
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* This Isn't Another Webinar Section */}
        <section className="flex flex-col items-center py-16 w-full bg-v0-friedrichshain-connection-ret-steelvercelappebony relative">
          <div className="absolute w-full h-full top-0 left-0 [background:radial-gradient(50%_50%_at_-4450%_-4450%,rgba(255,255,255,0.1)_2%,rgba(255,255,255,0)_2%),linear-gradient(0deg,rgba(239,68,68,1)_0%,rgba(239,68,68,1)_100%)]" />

          <div className="flex flex-col max-w-4xl w-[358px] items-start gap-[23px] relative z-10">
            <h2 className="text-[length:var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-2-font-size)] leading-[var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-2-line-height)] font-v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-2 font-[number:var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-2-font-weight)] text-v0-friedrichshain-connection-ret-steelvercelappblack text-center tracking-[var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-2-letter-spacing)] [font-style:var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-2-font-style)] w-full">
              THIS ISN'T AN🚫THER
              <br />
              WEBINAR
            </h2>

            <div className="px-4 w-full">
              <p className="[font-family:'Menlo-Regular',Helvetica] font-normal text-v0-friedrichshain-connection-ret-steelvercelappathens-gray text-[17.9px] text-center tracking-[0] leading-[29.2px]">
                Standard leadership training
                <br />
                is broken—abstract theories
                <br />
                with zero practical
                <br />
                application. We offer a<br />
                single, intensive 30-day
                <br />
                cognitive enhancement campaign
                <br />
                designed to build measurable
                <br />
                entrepreneurial skills through
                <br />
                gamified neural warfare. 🧠⚔
              </p>
            </div>
          </div>
        </section>

        {/* Mission Protocol Section */}
        <section className="flex flex-col items-center py-16 w-full bg-v0-friedrichshain-connection-ret-steelvercelappblack relative">
          <div className="absolute w-full h-full top-0 left-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_3%,rgba(255,255,255,0)_3%),linear-gradient(90deg,rgba(255,255,255,0.05)_3%,rgba(255,255,255,0)_3%)] opacity-10" />

          <div className="flex flex-col w-full max-w-screen-xl items-start gap-12 px-4 relative">
            <h2 className="bg-[linear-gradient(175deg,rgba(255,255,255,1)_0%,rgba(229,231,235,1)_100%)] text-[length:var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-2-font-size)] leading-[var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-2-line-height)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-2 font-[number:var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-2-font-weight)] text-transparent text-center tracking-[var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-2-letter-spacing)] [font-style:var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-2-font-style)] w-full">
              🎯 MISSION PROTOCOL
            </h2>

            <div className="flex flex-col w-[358px] max-w-6xl items-start justify-center gap-6">
              {missionProtocolCards.map((card, index) => (
                <Card
                  key={index}
                  className="w-full h-[259.75px] bg-v0-friedrichshain-connection-ret-steelvercelappblack border-[3px] border-solid border-white rounded-none overflow-hidden relative"
                >
                  <div className="absolute w-[352px] h-[254px] top-[3px] left-[-349px] bg-[linear-gradient(90deg,rgba(239,68,68,0)_0%,rgba(239,68,68,0.1)_50%,rgba(239,68,68,0)_100%)]" />

                  <CardContent className="p-0">
                    <div className="w-[312px] gap-[21.61px] absolute top-[22px] left-[23px] rotate-[1.41deg] flex items-center">
                      <span className="[font-family:'Menlo-Bold',Helvetica] font-bold text-v0-friedrichshain-connection-ret-steelvercelappflamingo text-4xl tracking-[0] leading-10 whitespace-nowrap">
                        {card.id}
                      </span>
                      {card.icon && (
                        <span className="[font-family:'Menlo-Bold',Helvetica] font-bold text-v0-friedrichshain-connection-ret-steelvercelappflamingo text-[21.9px] leading-10 tracking-[0] whitespace-nowrap">
                          {card.icon}
                        </span>
                      )}
                    </div>

                    <div className="w-[312px] absolute top-[79px] left-[23px]">
                      <h3 className="text-[length:var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-3-font-size)] leading-[var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-3-line-height)] whitespace-nowrap font-v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-3 font-[number:var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-3-font-weight)] text-white tracking-[var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-3-letter-spacing)] [font-style:var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-3-font-style)]">
                        {card.title}
                      </h3>
                    </div>

                    <div className="w-[312px] absolute top-[123px] left-[23px]">
                      <p className="text-[13.9px] leading-[22.8px] [font-family:'Menlo-Regular',Helvetica] font-normal text-v0-friedrichshain-connection-ret-steelvercelappgray-chateau tracking-[0]">
                        {card.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* From Abstract to Actionable Section */}
        <section className="flex flex-col items-center py-16 w-full bg-v0-friedrichshain-connection-ret-steelvercelappebony relative">
          <div className="absolute w-full h-full top-0 left-0 [background:radial-gradient(50%_50%_at_-4450%_-4450%,rgba(255,255,255,0.1)_2%,rgba(255,255,255,0)_2%)] opacity-10" />

          <div className="flex flex-col w-full max-w-screen-xl items-start gap-12 px-4 relative">
            <h2 className="bg-[linear-gradient(170deg,rgba(255,255,255,1)_0%,rgba(229,231,235,1)_100%)] text-[length:var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-2-font-size)] leading-[var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-2-line-height)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-2 font-[number:var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-2-font-weight)] text-transparent text-center tracking-[var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-2-letter-spacing)] [font-style:var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-2-font-style)] w-full">
              🔄 FROM ABSTRACT TO
              <br />
              ACTIONABLE
            </h2>

            <div className="flex flex-col w-[358px] max-w-6xl items-start justify-center gap-6">
              {transformationPhaseCards.map((card, index) => (
                <Card
                  key={index}
                  className={`w-full ${index === 2 ? "h-[277px]" : "h-[299.75px]"} overflow-hidden border-[3px] border-solid border-gray-700 bg-[linear-gradient(140deg,rgba(31,41,55,1)_0%,rgba(17,24,39,1)_100%)] rounded-none`}
                >
                  <div className="absolute w-[352px] h-[294px] top-[3px] left-[-349px] bg-[linear-gradient(90deg,rgba(99,102,241,0)_0%,rgba(99,102,241,0.1)_50%,rgba(99,102,241,0)_100%)]" />

                  <CardContent className="p-0">
                    <div className="flex w-[315px] items-center gap-[12.11px] absolute top-[23px] left-[22px]">
                      <img
                        className="w-[32.29px] h-[32.29px]"
                        alt="Icon"
                        src={card.icon}
                      />
                      <span className="[font-family:'Menlo-Regular',Helvetica] font-normal text-v0-friedrichshain-connection-ret-steelvercelappcornflower-blue text-[12.9px] leading-[28.3px] tracking-[0] whitespace-nowrap">
                        {card.emoji}
                      </span>
                    </div>

                    <div className="w-[312px] absolute top-[79px] left-[23px]">
                      <h4 className="text-[23.8px] leading-8 [font-family:'Menlo-Bold',Helvetica] font-bold text-white tracking-[0] whitespace-nowrap">
                        {card.phase}
                      </h4>
                    </div>

                    <div className="w-[312px] absolute top-[119px] left-[23px]">
                      <h3 className="text-[length:var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-3-font-size)] leading-[var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-3-line-height)] whitespace-nowrap font-v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-3 font-[number:var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-3-font-weight)] text-white tracking-[var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-3-letter-spacing)] [font-style:var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-3-font-style)]">
                        {card.title}
                      </h3>
                    </div>

                    <div className="w-[312px] absolute top-[163px] left-[23px]">
                      <p className="text-[13.9px] leading-[22.8px] [font-family:'Menlo-Regular',Helvetica] font-normal text-v0-friedrichshain-connection-ret-steelvercelappgray-chateau tracking-[0]">
                        {card.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Join the Cognitive Elite Section */}
        <section className="flex flex-col items-center py-16 w-full bg-v0-friedrichshain-connection-ret-steelvercelappblack relative">
          <div className="absolute w-full h-full top-0 left-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_3%,rgba(255,255,255,0)_3%),linear-gradient(90deg,rgba(255,255,255,0.05)_3%,rgba(255,255,255,0)_3%)] opacity-15" />

          <div className="flex flex-col w-full max-w-screen-xl items-start gap-12 px-4 relative">
            <h2 className="bg-[linear-gradient(170deg,rgba(255,255,255,1)_0%,rgba(229,231,235,1)_100%)] text-[length:var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-2-font-size)] leading-[var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-2-line-height)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-2 font-[number:var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-2-font-weight)] text-transparent text-center tracking-[var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-2-letter-spacing)] [font-style:var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-2-font-style)] w-full">
              🎮 JOIN THE COGNITIVE
              <br />
              ELITE
            </h2>

            <div className="flex flex-col w-[358px] max-w-4xl items-start justify-center gap-6">
              {statsCards.map((card, index) => (
                <Card
                  key={index}
                  className="h-[126px] w-full p-[23px] border-[3px] border-solid border-gray-700 [background:radial-gradient(50%_50%_at_50%_50%,rgba(17,24,39,1)_0%,rgba(0,0,0,1)_100%)] rounded-none"
                >
                  <CardContent className="p-0 flex flex-col gap-4">
                    <div className="flex items-center justify-center gap-2 w-full">
                      <span className="[font-family:'Menlo-Bold',Helvetica] font-bold text-v0-friedrichshain-connection-ret-steelvercelappflamingo text-[29.9px] text-center leading-9 whitespace-nowrap">
                        {card.value}
                      </span>
                      <span className="[font-family:'Menlo-Bold',Helvetica] font-bold text-v0-friedrichshain-connection-ret-steelvercelappflamingo text-[15px] text-center leading-8 whitespace-nowrap">
                        {card.icon}
                      </span>
                    </div>
                    <div className="text-[17.9px] [font-family:'Menlo-Bold',Helvetica] font-bold text-v0-friedrichshain-connection-ret-steelvercelappmischka text-center leading-7 w-full">
                      {card.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="flex flex-col items-center py-16 w-full bg-v0-friedrichshain-connection-ret-steelvercelappebony relative">
          <div className="absolute w-full h-full top-0 left-0 [background:radial-gradient(50%_50%_at_-4450%_-4450%,rgba(255,255,255,0.1)_2%,rgba(255,255,255,0)_2%)] opacity-10" />

          <div className="flex flex-col w-[358px] max-w-6xl items-start justify-center gap-6">
            {testimonialCards.map((testimonial, index) => (
              <Card
                key={index}
                className="h-[214px] w-full bg-v0-friedrichshain-connection-ret-steelvercelappebony-clay border-[3px] border-solid border-gray-700 rounded-none"
              >
                <CardContent className="flex flex-col gap-6 p-[23px]">
                  <p className="text-[15.9px] leading-[26px] [font-family:'Menlo-Regular',Helvetica] font-normal text-v0-friedrichshain-connection-ret-steelvercelappmischka tracking-[0]">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-3 w-full">
                    {testimonial.emoji ? (
                      <span className="font-v0-friedrichshain-connection-ret-steel-vercel-app-menlo-regular font-[number:var(--v0-friedrichshain-connection-ret-steel-vercel-app-menlo-regular-font-weight)] text-white text-[length:var(--v0-friedrichshain-connection-ret-steel-vercel-app-menlo-regular-font-size)] tracking-[var(--v0-friedrichshain-connection-ret-steel-vercel-app-menlo-regular-letter-spacing)] leading-[var(--v0-friedrichshain-connection-ret-steel-vercel-app-menlo-regular-line-height)] whitespace-nowrap [font-style:var(--v0-friedrichshain-connection-ret-steel-vercel-app-menlo-regular-font-style)]">
                        {testimonial.emoji}
                      </span>
                    ) : (
                      <div className="w-[24.02px] h-7" />
                    )}
                    <div className="flex flex-col">
                      <h4 className="[font-family:'Menlo-Bold',Helvetica] font-bold text-white text-[13.9px] tracking-[0] leading-5 whitespace-nowrap">
                        {testimonial.name}
                      </h4>
                      <p className="[font-family:'Menlo-Regular',Helvetica] font-normal text-v0-friedrichshain-connection-ret-steelvercelappcornflower-blue text-[13.9px] tracking-[0] leading-5 whitespace-nowrap">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Ready for Cognitive Domination Section */}
        <section className="flex flex-col items-center py-16 w-full bg-v0-friedrichshain-connection-ret-steelvercelappblack relative">
          <div className="absolute w-full h-full top-0 left-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_3%,rgba(255,255,255,0)_3%),linear-gradient(90deg,rgba(255,255,255,0.05)_3%,rgba(255,255,255,0)_3%)] opacity-20" />
          <div className="absolute w-full h-full top-0 left-0 [background:radial-gradient(50%_50%_at_-4450%_-4450%,rgba(255,255,255,0.1)_2%,rgba(255,255,255,0)_2%)] opacity-10" />

          <div className="flex flex-col w-[358px] max-w-4xl items-center gap-[23.3px] relative">
            <h2 className="bg-[linear-gradient(170deg,rgba(255,255,255,1)_0%,rgba(229,231,235,1)_100%)] text-[length:var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-2-font-size)] leading-[var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-2-line-height)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-2 font-[number:var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-2-font-weight)] text-transparent text-center tracking-[var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-2-letter-spacing)] [font-style:var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-heading-2-font-style)] w-full">
              🎯 READY FOR COGNITIVE
              <br />
              DOMINATION?
            </h2>

            <div className="px-4 w-full">
              <p className="[font-family:'Menlo-Regular',Helvetica] font-normal text-v0-friedrichshain-connection-ret-steelvercelappgray-chateau text-[17.9px] text-center tracking-[0] leading-[29.2px]">
                Your 30-day neural enhancement
                <br />
                mission is completely free. No
                <br />
                credit card required. No
                <br />
                corporate bureaucracy. Just
                <br />
                pure cognitive evolution with
                <br />
                Captain Kalm's guidance in the
                <br />
                Kalmverse. 🚀🧠
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 pt-[8.7px] pb-[24.7px] px-4 w-full">
              <Button className="max-w-[280px] w-[280px] min-h-11 px-[23px] py-[13px] bg-v0-friedrichshain-connection-ret-steelvercelappflamingo border-[3px] border-solid border-red-500 rounded-none relative overflow-hidden">
                <div className="absolute w-[274px] h-11 top-[3px] left-[-271px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0)_100%)]" />
                <span className="text-[12.4px] tracking-[0.64px] leading-[19.2px] [font-family:'Menlo-Bold',Helvetica] font-bold text-v0-friedrichshain-connection-ret-steelvercelappblack text-center whitespace-nowrap">
                  🔥 INITIATE NEURAL SYNC
                </span>
              </Button>

              <Button
                variant="outline"
                className="max-w-[280px] w-[280px] min-h-11 px-[23px] py-[13px] border-[3px] border-solid border-white rounded-none relative overflow-hidden"
              >
                <div className="absolute w-[274px] h-[39px] top-[3px] left-[-271px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0)_100%)]" />
                <span className="text-[length:var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-button-upper-font-size)] tracking-[var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-button-upper-letter-spacing)] leading-[var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-button-upper-line-height)] font-v0-friedrichshain-connection-ret-steel-vercel-app-semantic-button-upper font-[number:var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-button-upper-font-weight)] text-white text-center whitespace-nowrap [font-style:var(--v0-friedrichshain-connection-ret-steel-vercel-app-semantic-button-upper-font-style)]">
                  🚀 MEET CAPTAIN KALM
                </span>
              </Button>
            </div>

            <Card className="w-[326px] p-7 bg-v0-friedrichshain-connection-ret-steelvercelappblack border-4 border-solid border-white rounded-none relative">
              <div className="absolute w-[318px] h-48 top-1 left-1 [background:radial-gradient(50%_50%_at_-4450%_-4450%,rgba(255,255,255,0.1)_2%,rgba(255,255,255,0)_2%)] opacity-10" />

              <CardContent className="p-0 flex flex-col gap-4">
                <h3 className="font-v0-friedrichshain-connection-ret-steel-vercel-app-menlo-bold font-[number:var(--v0-friedrichshain-connection-ret-steel-vercel-app-menlo-bold-font-weight)] text-white text-[length:var(--v0-friedrichshain-connection-ret-steel-vercel-app-menlo-bold-font-size)] text-center tracking-[var(--v0-friedrichshain-connection-ret-steel-vercel-app-menlo-bold-letter-spacing)] leading-[var(--v0-friedrichshain-connection-ret-steel-vercel-app-menlo-bold-line-height)] [font-style:var(--v0-friedrichshain-connection-ret-steel-vercel-app-menlo-bold-font-style)]">
                  "THIS IS FINE." 🔥
                </h3>

                <p className="[font-family:'Menlo-Regular',Helvetica] font-normal text-v0-friedrichshain-connection-ret-steelvercelappgray-chateau text-[13.9px] leading-5 text-center tracking-[0]">
                  — Captain Kalm, moments before
                  <br />
                  his garage startup AGI-3000
                  <br />
                  achieved unicorn status while
                  <br />
                  battling cosmic Brain Slugs in
                  <br />
                  the Kalmverse 🦄👾
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Scroll indicator */}
        <div className="inline-flex flex-col items-center absolute bottom-[52px] left-1/2 transform -translate-x-1/2">
          <img className="w-6 h-6" alt="Scroll down" src="/svg-22.svg" />
        </div>
      </div>
    </ScrollArea>
  );
};
