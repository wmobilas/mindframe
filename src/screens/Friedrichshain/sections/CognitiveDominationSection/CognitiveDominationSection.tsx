import { PlayIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const CognitiveDominationSection = (): JSX.Element => {
  // Data for mission protocol cards
  const missionProtocolCards = [
    {
      id: "01",
      emoji: "🧠",
      title: "COGNITIVE DIAGNOSTICS",
      description:
        'Engage in the "Neural Gauntlet"—a voice-powered assessment with Captain Kalm to map your unique thinking patterns and cognitive architecture through advanced AI analysis.',
    },
    {
      id: "02-29",
      title: "BRAIN SLUG BATTLES",
      description:
        'Embark on daily "Crucible" simulations. Defeat cognitive biases (Brain Slugs) and earn XP to upgrade your NFT spaceship through gamified neural enhancement protocols.',
    },
    {
      id: "30",
      emoji: "🏆",
      title: "MISSION DEBRIEF",
      description:
        "Receive your final cognitive analysis and a personalized roadmap to continue your entrepreneurial evolution beyond the initial mission parameters.",
    },
  ];

  // Data for phase cards
  const phaseCards = [
    {
      phase: "PHASE 01",
      icon: "/svg-4.svg",
      emoji: "🎤",
      title: "VOICE ANALYSIS",
      description:
        "Engage in live voice conversations with our AI to map your cognitive patterns, decision-making processes, and entrepreneurial potential through neural linguistic analysis.",
    },
    {
      phase: "PHASE 02",
      icon: "/svg-16.svg",
      emoji: "🚀",
      title: "NFT SHIP FORGED",
      description:
        'Receive a unique "Cognitive Signature Ship"—a dynamic NFT representing your leadership style that evolves as you complete missions and upgrade neural pathways.',
    },
    {
      phase: "PHASE 03",
      icon: "/svg-25.svg",
      emoji: "👾",
      title: "DEFEAT BRAIN SLUGS",
      description:
        "Embark on gamified missions to master cognitive skills, eliminate limiting thought patterns, and systematically upgrade your mental operating system.",
    },
  ];

  // Data for stats cards
  const statsCards = [
    {
      value: "10,000+",
      emoji: "👾",
      label: "BRAIN SLUGS DEFEATED",
    },
    {
      value: "98.7%",
      emoji: "🏆",
      label: "MISSION SUCCESS RATE",
    },
    {
      value: "24/7",
      emoji: "🤖",
      label: "CAPTAIN KALM AVAILABLE",
    },
  ];

  // Data for testimonial cards
  const testimonialCards = [
    {
      quote:
        '"Captain Kalm\'s sarcastic humor made cognitive training actually enjoyable. My decision-making speed improved 300%."',
      name: "SARAH CHEN",
      role: "Tech Founder",
    },
    {
      quote:
        '"The NFT ship evolution kept me motivated. Watching my cognitive profile upgrade in real-time was addictive."',
      emoji: "🚀",
      name: "MARCUS RODRIGUEZ",
      role: "Serial Entrepreneur",
    },
    {
      quote:
        '"Brain Slug battles are genius. I defeated my confirmation bias and closed our Series A two weeks later."',
      emoji: "💼",
      name: "ALEX THOMPSON",
      role: "Startup CEO",
    },
  ];

  // Data for feature badges
  const featureBadges = [
    { text: "🆓 30-DAY FREE TRIAL" },
    { text: "🤖 AI-POWERED" },
    { text: "💳 NO CREDIT CARD" },
  ];

  return (
    <section className="flex flex-col w-full relative bg-black overflow-y-auto">
      {/* Grid overlay for visual effect */}
      <div className="absolute w-full h-full top-0 left-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_3%,rgba(255,255,255,0)_3%),linear-gradient(90deg,rgba(255,255,255,0.05)_3%,rgba(255,255,255,0)_3%)] opacity-20" />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center relative w-full py-20 overflow-hidden">
        <div className="absolute w-full h-full top-0 left-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.3)_0%,rgba(0,0,0,1)_50%,rgba(0,0,0,1)_100%)]" />

        <div className="flex flex-col items-center gap-8 px-6 py-0 relative z-10 max-w-screen-xl w-full">
          <div className="flex flex-col items-center w-full">
            <h1 className="text-[59.3px] tracking-[-3.00px] leading-[60px] [font-family:'Menlo-Bold',Helvetica] font-bold text-white text-center w-full">
              THE BUSINESS
            </h1>
            <h1 className="text-[59.3px] tracking-[-3.00px] leading-[60px] [font-family:'Menlo-Bold',Helvetica] font-bold text-white text-center w-full">
              MULTIVERSE IS
            </h1>
            <div className="relative w-full flex flex-col items-center">
              <div className="flex flex-col w-full h-[60px] items-center absolute -top-px -left-px opacity-80">
                <span className="text-v0-friedrichshain-connection-ret-steelvercelappflamingo text-6xl tracking-[-3.00px] leading-[60px] [font-family:'Menlo-BoldItalic',Helvetica] font-bold italic text-center underline whitespace-nowrap">
                  CHAOS.
                </span>
              </div>
              <div className="flex flex-col w-full h-[60px] items-center absolute top-px left-px opacity-80">
                <span className="text-v0-friedrichshain-connection-ret-steelvercelappcornflower-blue text-6xl tracking-[-3.00px] leading-[60px] [font-family:'Menlo-BoldItalic',Helvetica] font-bold italic text-center underline whitespace-nowrap">
                  CHAOS.
                </span>
              </div>
              <span className="text-v0-friedrichshain-connection-ret-steelvercelappflamingo text-[58.9px] tracking-[-3.00px] leading-[60px] [font-family:'Menlo-BoldItalic',Helvetica] font-bold italic text-center underline whitespace-nowrap">
                CHAOS.
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center w-full">
            <h2 className="bg-[linear-gradient(177deg,rgba(255,255,255,1)_0%,rgba(229,231,235,1)_100%)] text-[29.9px] leading-9 [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Menlo-Bold',Helvetica] font-bold text-transparent text-center tracking-[0] w-full">
              YOUR MIND DOESN&#39;T HAVE TO BE.
            </h2>
          </div>

          <div className="flex flex-col max-w-4xl w-full items-center px-4">
            <p className="[font-family:'Menlo-Regular',Helvetica] font-normal text-v0-friedrichshain-connection-ret-steelvercelappgray-chateau text-[19.8px] text-center tracking-[0] leading-7">
              Launch your free 30-day cognitive enhancement mission.
              <br />
              Battle &#34;Brain Slugs&#34; and forge your unique
              <br />
              entrepreneurial mindset through Captain Kalm&#39;s sarcastic-
              <br />
              yet-brilliant training protocols in the Kalmverse.
            </p>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8 w-full px-4">
            <Button className="min-h-12 px-[27px] py-[15px] bg-v0-friedrichshain-connection-ret-steelvercelappflamingo border-[3px] border-solid border-red-500 relative overflow-hidden">
              <div className="absolute w-[303px] h-[45px] top-[3px] left-[-300px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0)_100%)]" />
              <span className="text-[13.7px] tracking-[0.70px] leading-[21px] [font-family:'Menlo-Bold',Helvetica] font-bold text-v0-friedrichshain-connection-ret-steelvercelappblack text-center whitespace-nowrap">
                🚀 LAUNCH FREE 30-DAY MISSION
              </span>
            </Button>

            <Button
              variant="outline"
              className="min-h-12 px-[27px] py-[15px] relative overflow-hidden border-[3px] border-solid border-white"
            >
              <div className="absolute w-[306px] h-[45px] top-[3px] left-[-305px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0)_100%)]" />
              <div className="flex items-center gap-2">
                <PlayIcon className="w-4 h-4" />
                <span className="text-sm tracking-[0.70px] leading-[21px] whitespace-nowrap [font-family:'Menlo-Bold',Helvetica] font-bold text-white text-center">
                  🚀 WATCH CAPTAIN KALM DEMO
                </span>
              </div>
            </Button>
          </div>

          <div className="relative w-full h-[100.8px] flex justify-center gap-4 mt-4">
            {featureBadges.map((badge, index) => (
              <Badge
                key={index}
                className="h-[33px] px-3.5 py-2 bg-v0-friedrichshain-connection-ret-steelvercelappwhite-5 border-2 border-solid border-gray-700 backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)]"
              >
                <span className="text-[10.7px] tracking-[1.12px] leading-[16.8px] [font-family:'Menlo-Bold',Helvetica] font-bold text-v0-friedrichshain-connection-ret-steelvercelappmischka text-center whitespace-nowrap">
                  {badge.text}
                </span>
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* This Isn't Another Webinar Section */}
      <div className="flex flex-col items-center px-0 py-20 w-full bg-v0-friedrichshain-connection-ret-steelvercelappebony relative">
        <div className="w-full h-[372px] absolute top-0 left-0 [background:radial-gradient(50%_50%_at_-4450%_-4450%,rgba(255,255,255,0.1)_2%,rgba(255,255,255,0)_2%),linear-gradient(0deg,rgba(239,68,68,1)_0%,rgba(239,68,68,1)_100%)]" />

        <div className="flex flex-col max-w-4xl w-full items-start gap-8 relative z-10 px-6">
          <div className="flex flex-col items-center w-full">
            <h2 className="text-[34.9px] leading-10 [font-family:'Menlo-Bold',Helvetica] font-bold text-v0-friedrichshain-connection-ret-steelvercelappblack text-center tracking-[0] w-full">
              THIS ISN&#39;T AN🚫THER WEBINAR
            </h2>
          </div>

          <div className="flex flex-col items-center px-4 w-full">
            <p className="[font-family:'Menlo-Regular',Helvetica] font-normal text-v0-friedrichshain-connection-ret-steelvercelappathens-gray text-[19.8px] text-center tracking-[0] leading-7">
              Standard leadership training is broken—abstract theories
              <br />
              with zero practical application. We offer a single,
              <br />
              intensive 30-day cognitive enhancement campaign designed
              <br />
              to build measurable entrepreneurial skills through
              <br />
              gamified neural warfare. 🧠⚔
            </p>
          </div>
        </div>
      </div>

      {/* Mission Protocol Section */}
      <div className="flex flex-col items-center px-0 py-20 w-full bg-v0-friedrichshain-connection-ret-steelvercelappblack relative">
        <div className="absolute w-full h-full top-0 left-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_3%,rgba(255,255,255,0)_3%),linear-gradient(90deg,rgba(255,255,255,0.05)_3%,rgba(255,255,255,0)_3%)] opacity-10" />

        <div className="flex flex-col max-w-screen-xl w-full items-start gap-16 px-6 relative z-10">
          <div className="flex flex-col items-center w-full">
            <h2 className="bg-[linear-gradient(177deg,rgba(255,255,255,1)_0%,rgba(229,231,235,1)_100%)] text-[34.6px] leading-10 [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Menlo-Bold',Helvetica] font-bold text-transparent text-center tracking-[0] w-full">
              🎯 MISSION PROTOCOL
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
            {missionProtocolCards.map((card, index) => (
              <Card
                key={index}
                className="flex flex-col items-center gap-[11.8px] pt-[22.81px] pb-[27px] px-[27px] bg-v0-friedrichshain-connection-ret-steelvercelappblack overflow-hidden border-[3px] border-solid border-white relative"
              >
                <div className="absolute w-full h-full top-[3px] left-[-335px] bg-[linear-gradient(90deg,rgba(239,68,68,0)_0%,rgba(239,68,68,0.1)_50%,rgba(239,68,68,0)_100%)]" />

                <div className="w-full flex items-center gap-9 rotate-[-1.46deg]">
                  <span className="[font-family:'Menlo-Bold',Helvetica] font-bold text-v0-friedrichshain-connection-ret-steelvercelappflamingo text-[59.9px] tracking-[0] leading-[60px] whitespace-nowrap">
                    {card.id}
                  </span>
                  {card.emoji && (
                    <span className="[font-family:'Menlo-Bold',Helvetica] font-bold text-v0-friedrichshain-connection-ret-steelvercelappflamingo text-[36.9px] tracking-[0] leading-[60px] whitespace-nowrap">
                      {card.emoji}
                    </span>
                  )}
                </div>

                <CardContent className="p-0 w-full">
                  <h3 className="text-[23.8px] leading-8 [font-family:'Menlo-Bold',Helvetica] font-bold text-white tracking-[0]">
                    {card.title}
                  </h3>

                  <p className="mt-[4.2px] [font-family:'Menlo-Regular',Helvetica] font-normal text-v0-friedrichshain-connection-ret-steelvercelappgray-chateau text-[15.9px] tracking-[0] leading-6">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* From Abstract to Actionable Section */}
      <div className="flex flex-col items-center px-0 py-20 w-full bg-v0-friedrichshain-connection-ret-steelvercelappebony relative">
        <div className="absolute w-full h-[1052px] top-0 left-0 [background:radial-gradient(50%_50%_at_-4450%_-4450%,rgba(255,255,255,0.1)_2%,rgba(255,255,255,0)_2%)] opacity-10" />

        <div className="flex flex-col max-w-screen-xl w-full items-start gap-16 px-6 relative z-10">
          <div className="flex flex-col items-center w-full">
            <h2 className="bg-[linear-gradient(177deg,rgba(255,255,255,1)_0%,rgba(229,231,235,1)_100%)] text-[35px] leading-10 [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Menlo-Bold',Helvetica] font-bold text-transparent text-center tracking-[0] w-full">
              🔄 FROM ABSTRACT TO ACTIONABLE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
            {phaseCards.map((card, index) => (
              <Card
                key={index}
                className="flex flex-col items-start p-[27px] bg-[linear-gradient(131deg,rgba(31,41,55,1)_0%,rgba(17,24,39,1)_100%)] border-[3px] border-solid border-gray-700 relative overflow-hidden"
              >
                <div className="absolute w-full h-full top-[3px] left-[-335px] bg-[linear-gradient(90deg,rgba(99,102,241,0)_0%,rgba(99,102,241,0.1)_50%,rgba(99,102,241,0)_100%)]" />

                <div className="flex w-full items-center gap-3 mb-6">
                  <img className="w-12 h-12" alt="Icon" src={card.icon} />
                  <span className="[font-family:'Menlo-Regular',Helvetica] font-normal text-v0-friedrichshain-connection-ret-steelvercelappcornflower-blue text-[14.8px] tracking-[0] leading-8 whitespace-nowrap">
                    {card.emoji}
                  </span>
                </div>

                <CardContent className="p-0 w-full space-y-4">
                  <h3 className="text-[35.9px] leading-10 [font-family:'Menlo-Bold',Helvetica] font-bold text-white tracking-[0] whitespace-nowrap">
                    {card.phase}
                  </h3>

                  <h4 className="text-[23.8px] leading-8 [font-family:'Menlo-Bold',Helvetica] font-bold text-white tracking-[0] whitespace-nowrap">
                    {card.title}
                  </h4>

                  <p className="[font-family:'Menlo-Regular',Helvetica] font-normal text-v0-friedrichshain-connection-ret-steelvercelappgray-chateau text-[15.9px] tracking-[0] leading-6">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Join the Cognitive Elite Section */}
      <div className="flex flex-col items-center px-0 py-20 w-full bg-v0-friedrichshain-connection-ret-steelvercelappblack relative">
        <div className="absolute w-full h-[438px] top-0 left-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_3%,rgba(255,255,255,0)_3%),linear-gradient(90deg,rgba(255,255,255,0.05)_3%,rgba(255,255,255,0)_3%)] opacity-15" />

        <div className="flex flex-col max-w-screen-xl w-full items-start gap-16 px-6 relative z-10">
          <div className="flex flex-col items-center w-full">
            <h2 className="bg-[linear-gradient(177deg,rgba(255,255,255,1)_0%,rgba(229,231,235,1)_100%)] text-[34.9px] leading-10 [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Menlo-Bold',Helvetica] font-bold text-transparent text-center tracking-[0] w-full">
              🎮 JOIN THE COGNITIVE ELITE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
            {statsCards.map((card, index) => (
              <Card
                key={index}
                className="flex flex-col items-center gap-4 p-[27px] border-[3px] border-solid border-gray-700 [background:radial-gradient(50%_50%_at_50%_50%,rgba(17,24,39,1)_0%,rgba(0,0,0,1)_100%)]"
              >
                <div className="flex items-center justify-center gap-4 w-full">
                  <span className="[font-family:'Menlo-Bold',Helvetica] font-bold text-v0-friedrichshain-connection-ret-steelvercelappflamingo text-[47.8px] text-center leading-[48px] whitespace-nowrap">
                    {card.value}
                  </span>
                  <span className="[font-family:'Menlo-Bold',Helvetica] font-bold text-v0-friedrichshain-connection-ret-steelvercelappflamingo text-[21.9px] text-center leading-10 whitespace-nowrap">
                    {card.emoji}
                  </span>
                </div>

                <CardContent className="p-0 w-full">
                  <h3 className="text-[19.8px] [font-family:'Menlo-Bold',Helvetica] font-bold text-v0-friedrichshain-connection-ret-steelvercelappmischka text-center tracking-[0] leading-7">
                    {card.label.split(" ").map((word, i) => (
                      <React.Fragment key={i}>
                        {word}
                        {i < card.label.split(" ").length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="flex flex-col items-center px-0 py-20 w-full bg-v0-friedrichshain-connection-ret-steelvercelappebony relative">
        <div className="absolute w-full h-[744px] top-0 left-0 [background:radial-gradient(50%_50%_at_-4450%_-4450%,rgba(255,255,255,0.1)_2%,rgba(255,255,255,0)_2%)] opacity-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl px-6 relative z-10">
          {testimonialCards.map((card, index) => (
            <Card
              key={index}
              className="flex flex-col items-start gap-6 p-[27px] bg-v0-friedrichshain-connection-ret-steelvercelappebony-clay border-[3px] border-solid border-gray-700"
            >
              <CardContent className="p-0 w-full">
                <p className="text-lg leading-7 [font-family:'Menlo-Regular',Helvetica] font-normal text-v0-friedrichshain-connection-ret-steelvercelappmischka tracking-[0]">
                  {card.quote}
                </p>

                <div className="flex items-center gap-3 mt-6">
                  {card.emoji ? (
                    <span className="[font-family:'Menlo-Regular',Helvetica] font-normal text-white text-[15px] leading-8 whitespace-nowrap">
                      {card.emoji}
                    </span>
                  ) : (
                    <div className="w-[28.81px] h-8" />
                  )}

                  <div className="flex flex-col">
                    <h4 className="[font-family:'Menlo-Bold',Helvetica] font-bold text-white text-[15.9px] tracking-[0] leading-6 whitespace-nowrap">
                      {card.name}
                    </h4>
                    <p className="[font-family:'Menlo-Regular',Helvetica] font-normal text-v0-friedrichshain-connection-ret-steelvercelappcornflower-blue text-[13.9px] tracking-[0] leading-5 whitespace-nowrap">
                      {card.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col items-center px-0 py-20 w-full bg-v0-friedrichshain-connection-ret-steelvercelappblack relative">
        <div className="absolute w-full h-[699px] top-0 left-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_3%,rgba(255,255,255,0)_3%),linear-gradient(90deg,rgba(255,255,255,0.05)_3%,rgba(255,255,255,0)_3%)] opacity-20" />
        <div className="absolute w-full h-[699px] top-0 left-0 [background:radial-gradient(50%_50%_at_-4450%_-4450%,rgba(255,255,255,0.1)_2%,rgba(255,255,255,0)_2%)] opacity-10" />

        <div className="flex flex-col max-w-4xl w-full items-start gap-8 pt-0 pb-64 px-0 relative z-10">
          <div className="flex flex-col items-center w-full">
            <h2 className="bg-[linear-gradient(177deg,rgba(255,255,255,1)_0%,rgba(229,231,235,1)_100%)] text-[35.2px] leading-10 [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Menlo-Bold',Helvetica] font-bold text-transparent text-center tracking-[0] w-full">
              🎯 READY FOR COGNITIVE DOMINATION?
            </h2>
          </div>

          <div className="flex flex-col items-center px-4 w-full">
            <p className="[font-family:'Menlo-Regular',Helvetica] font-normal text-v0-friedrichshain-connection-ret-steelvercelappgray-chateau text-[19.8px] text-center tracking-[0] leading-7">
              Your 30-day neural enhancement mission is completely
              <br />
              free. No credit card required. No corporate bureaucracy.
              <br />
              Just pure cognitive evolution with Captain Kalm&#39;s
              <br />
              guidance in the Kalmverse. 🚀🧠
            </p>
          </div>

          <div className="flex items-center justify-center gap-6 pt-4 pb-0 px-4 w-full">
            <Button className="min-h-12 px-[27px] py-[15px] bg-v0-friedrichshain-connection-ret-steelvercelappflamingo overflow-hidden border-[3px] border-solid border-red-500 relative">
              <div className="absolute w-[248px] h-[45px] top-[3px] left-[-245px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0)_100%)]" />
              <span className="text-[13.6px] tracking-[0.70px] leading-[21px] [font-family:'Menlo-Bold',Helvetica] font-bold text-v0-friedrichshain-connection-ret-steelvercelappblack text-center whitespace-nowrap">
                🔥 INITIATE NEURAL SYNC
              </span>
            </Button>

            <Button
              variant="outline"
              className="min-h-12 px-[27px] py-[15px] relative overflow-hidden border-[3px] border-solid border-white"
            >
              <div className="absolute w-[227px] h-[45px] top-[3px] left-[-226px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0)_100%)]" />
              <span className="text-sm tracking-[0.70px] leading-[21px] [font-family:'Menlo-Bold',Helvetica] font-bold text-white text-center whitespace-nowrap">
                🚀 MEET CAPTAIN KALM
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
