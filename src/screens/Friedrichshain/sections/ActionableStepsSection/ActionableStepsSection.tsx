import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ActionableStepsSection = (): JSX.Element => {
  // Hero section data
  const badges = [
    { text: "🆓 30-DAY FREE TRIAL", left: "181px" },
    { text: "🤖 AI-POWERED", left: "392px" },
    { text: "💳 NO CREDIT CARD", left: "545px" },
  ];

  // Mission protocol cards data
  const missionProtocolCards = [
    {
      number: "01",
      emoji: "🧠",
      title: "COGNITIVE\nDIAGNOSTICS",
      description:
        'Engage in the "Neural\nGauntlet"—a voice-\npowered assessment with\nCaptain Kalm to map your\nunique thinking patterns\nand cognitive\narchitecture through\nadvanced AI analysis.',
    },
    {
      number: "02-29",
      emoji: "",
      title: "BRAIN SLUG\nBATTLES",
      description:
        'Embark on daily\n"Crucible" simulations.\nDefeat cognitive biases\n(Brain Slugs) and earn\nXP to upgrade your NFT\nspaceship through\ngamified neural\nenhancement protocols.',
    },
    {
      number: "30",
      emoji: "🏆",
      title: "MISSION DEBRIEF",
      description:
        "Receive your final\ncognitive analysis and a\npersonalized roadmap to\ncontinue your\nentrepreneurial\nevolution beyond the\ninitial mission\nparameters.",
    },
  ];

  // From abstract to actionable cards data
  const abstractToActionableCards = [
    {
      phase: "PHASE 01",
      title: "VOICE ANALYSIS",
      emoji: "🎤",
      iconSrc: "/svg.svg",
      description:
        "Engage in live voice\nconversations with our\nAI to map your cognitive\npatterns, decision-\nmaking processes, and\nentrepreneurial\npotential through neural\nlinguistic analysis.",
    },
    {
      phase: "PHASE 02",
      title: "NFT SHIP FORGED",
      emoji: "🚀",
      iconSrc: "/svg-13.svg",
      description:
        'Receive a unique\n"Cognitive Signature\nShip"—a dynamic NFT\nrepresenting your\nleadership style that\nevolves as you complete\nmissions and upgrade\nneural pathways.',
    },
    {
      phase: "PHASE 03",
      title: "DEFEAT BRAIN\nSLUGS",
      emoji: "👾",
      iconSrc: "/svg-1.svg",
      description:
        "Embark on gamified\nmissions to master\ncognitive skills,\neliminate limiting\nthought patterns, and\nsystematically upgrade\nyour mental operating\nsystem.",
    },
  ];

  // Cognitive elite stats data
  const cognitiveEliteStats = [
    {
      value: "10,000+",
      emoji: "👾",
      label: "BRAIN SLUGS\nDEFEATED",
    },
    {
      value: "98.7%",
      emoji: "🏆",
      label: "MISSION SUCCESS\nRATE",
    },
    {
      value: "24/7",
      emoji: "🤖",
      label: "CAPTAIN KALM\nAVAILABLE",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      quote:
        '"Captain Kalm\'s\nsarcastic humor made\ncognitive training\nactually enjoyable. My\ndecision-making speed\nimproved 300%."',
      name: "SARAH CHEN",
      role: "Tech Founder",
      emoji: "",
    },
    {
      quote:
        '"The NFT ship\nevolution kept me\nmotivated. Watching my\ncognitive profile\nupgrade in real-time\nwas addictive."',
      name: "MARCUS RODRIGUEZ",
      role: "Serial Entrepreneur",
      emoji: "🚀",
    },
    {
      quote:
        '"Brain Slug battles\nare genius. I defeated\nmy confirmation bias\nand closed our Series\nA two weeks later."',
      name: "ALEX THOMPSON",
      role: "Startup CEO",
      emoji: "💼",
    },
  ];

  return (
    <section className="flex flex-col w-full min-h-[640px] items-start bg-black overflow-y-auto">
      {/* Background patterns */}
      <div className="relative w-full min-h-[640px] flex flex-col items-start bg-black overflow-y-auto">
        <div className="absolute w-full h-[640px] top-0 left-0 [background:radial-gradient(50%_50%_at_-4450%_-4450%,rgba(255,255,255,0.1)_2%,rgba(255,255,255,0)_2%)] opacity-30" />
        <div className="absolute w-full h-[640px] top-0 left-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_3%,rgba(255,255,255,0)_3%),linear-gradient(90deg,rgba(255,255,255,0.05)_3%,rgba(255,255,255,0)_3%)] opacity-20" />

        {/* Hero Section */}
        <div className="min-h-[640px] w-full flex items-center justify-center relative">
          <div className="absolute w-full h-[665px] top-[199px] left-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.3)_0%,rgba(0,0,0,1)_50%,rgba(0,0,0,1)_100%)]" />

          {/* Decorative SVGs */}
          <img
            className="absolute w-8 h-8 top-[53px] left-[125px]"
            alt="Svg"
            src="/svg-6.svg"
          />
          <div className="inline-flex flex-col items-start absolute top-[199px] left-[797px]">
            <img className="relative w-7 h-7" alt="Svg" src="/svg-3.svg" />
          </div>
          <div className="inline-flex flex-col items-start absolute top-[479px] left-[158px] rotate-[113.73deg]">
            <img
              className="relative w-[36.51px] h-[36.51px] mt-[-4.40px] mb-[-4.40px] ml-[-4.40px] mr-[-4.40px] rotate-[-113.73deg]"
              alt="Svg"
              src="/svg-2.svg"
            />
          </div>
          <div className="inline-flex flex-col items-start absolute top-[605px] left-[512px]">
            <img className="relative w-8 h-8" alt="Svg" src="/svg-9.svg" />
          </div>

          <div className="flex flex-col max-w-screen-xl items-start px-6 py-0 relative">
            <div className="flex flex-col items-start gap-8 relative w-full">
              {/* Headline */}
              <div className="flex flex-col items-start w-full">
                <div className="flex flex-col items-center w-full">
                  <h1 className="text-[71.2px] tracking-[-3.60px] leading-[72px] w-full mt-[-1.00px] [font-family:'Menlo-Bold',Helvetica] font-bold text-white text-center">
                    THE BUSINESS
                  </h1>
                </div>
                <div className="flex flex-col items-center w-full">
                  <h1 className="text-[71.2px] tracking-[-3.60px] leading-[72px] w-full mt-[-1.00px] [font-family:'Menlo-Bold',Helvetica] font-bold text-white text-center">
                    MULTIVERSE IS
                  </h1>
                </div>
                <div className="flex flex-col items-center relative w-full">
                  <div className="flex flex-col w-[896px] h-[72px] items-center absolute -top-px -left-px opacity-80">
                    <div className="text-v0-friedrichshain-connection-ret-steelvercelappflamingo text-7xl tracking-[-3.60px] leading-[72px] relative w-fit mt-[-1.00px] [font-family:'Menlo-BoldItalic',Helvetica] font-bold italic text-center underline whitespace-nowrap">
                      CHAOS.
                    </div>
                  </div>
                  <div className="flex flex-col w-[896px] h-[72px] items-center absolute top-px left-px opacity-80">
                    <div className="text-v0-friedrichshain-connection-ret-steelvercelappcornflower-blue text-7xl tracking-[-3.60px] leading-[72px] relative w-fit mt-[-1.00px] [font-family:'Menlo-BoldItalic',Helvetica] font-bold italic text-center underline whitespace-nowrap">
                      CHAOS.
                    </div>
                  </div>
                  <div className="text-v0-friedrichshain-connection-ret-steelvercelappflamingo text-[70.7px] tracking-[-3.60px] leading-[72px] relative w-fit mt-[-1.00px] [font-family:'Menlo-BoldItalic',Helvetica] font-bold italic text-center underline whitespace-nowrap">
                    CHAOS.
                  </div>
                </div>
              </div>

              {/* Subtitle */}
              <div className="flex flex-col items-center w-full">
                <div className="bg-[linear-gradient(177deg,rgba(255,255,255,1)_0%,rgba(229,231,235,1)_100%)] text-[35.9px] leading-10 w-full mt-[-1.00px] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Menlo-Bold',Helvetica] font-bold text-transparent text-center tracking-[0]">
                  YOUR MIND DOESN&#39;T HAVE TO BE.
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col max-w-4xl w-[896px] items-center px-4 py-0">
                <p className="relative w-fit mt-[-1.00px] [font-family:'Menlo-Regular',Helvetica] font-normal text-v0-friedrichshain-connection-ret-steelvercelappgray-chateau text-[19.8px] text-center tracking-[0] leading-7">
                  Launch your free 30-day cognitive enhancement mission. Battle
                  &#34;Brain
                  <br />
                  Slugs&#34; and forge your unique entrepreneurial mindset
                  through Captain
                  <br />
                  Kalm&#39;s sarcastic-yet-brilliant training protocols in the
                  Kalmverse.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center justify-center gap-6 pt-8 pb-0 px-4 w-full">
                <Button className="min-h-[52px] px-8 py-[18px] bg-v0-friedrichshain-connection-ret-steelvercelappflamingo border-4 border-solid border-red-500 relative overflow-hidden">
                  <div className="absolute w-[354px] h-[52px] top-1 left-[-350px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0)_100%)]" />
                  <span className="text-[14.8px] tracking-[1.52px] leading-[22.8px] [font-family:'Menlo-Bold',Helvetica] font-bold text-v0-friedrichshain-connection-ret-steelvercelappblack text-center whitespace-nowrap">
                    🚀 LAUNCH FREE 30-DAY MISSION
                  </span>
                </Button>

                <Button
                  variant="outline"
                  className="min-h-[52px] px-8 py-[18px] relative overflow-hidden border-4 border-solid border-white"
                >
                  <div className="absolute w-[352px] h-[52px] top-1 left-[-351px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0)_100%)]" />
                  <div className="flex items-center gap-2">
                    <img className="w-4 h-4" alt="Frame" src="/frame.svg" />
                    <span className="text-[15.2px] tracking-[1.52px] leading-[22.8px] whitespace-nowrap [font-family:'Menlo-Bold',Helvetica] font-bold text-white text-center">
                      🚀 WATCH CAPTAIN KALM DEMO
                    </span>
                  </div>
                </Button>
              </div>

              {/* Feature Badges */}
              <div className="relative w-full h-[106px]">
                {badges.map((badge, index) => (
                  <Badge
                    key={index}
                    className="h-[38px] px-[18px] py-2.5 absolute top-8 left-[181px] inline-flex flex-col items-center bg-v0-friedrichshain-connection-ret-steelvercelappwhite-5 border-2 border-solid border-gray-700 backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)]"
                    style={{ left: badge.left }}
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
        <section className="flex flex-col items-center w-full py-20 bg-v0-friedrichshain-connection-ret-steelvercelappebony">
          <div className="w-full h-[352px] absolute top-0 left-0 [background:radial-gradient(50%_50%_at_-4450%_-4450%,rgba(255,255,255,0.1)_2%,rgba(255,255,255,0)_2%),linear-gradient(0deg,rgba(239,68,68,1)_0%,rgba(239,68,68,1)_100%)]" />

          <div className="flex flex-col max-w-4xl w-[896px] items-start gap-8 relative z-10">
            <div className="flex flex-col items-center w-full">
              <h2 className="w-full mt-[-1.00px] [font-family:'Menlo-Bold',Helvetica] font-bold text-v0-friedrichshain-connection-ret-steelvercelappblack text-[46.5px] text-center tracking-[0] leading-[48px]">
                THIS ISN&#39;T AN🚫THER WEBINAR
              </h2>
            </div>

            <div className="flex flex-col items-center px-4 py-0 w-full">
              <p className="w-full mt-[-1.00px] [font-family:'Menlo-Regular',Helvetica] font-normal text-v0-friedrichshain-connection-ret-steelvercelappathens-gray text-[19.8px] text-center tracking-[0] leading-7">
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
        </section>

        {/* Mission Protocol Section */}
        <section className="flex flex-col w-full py-20 bg-black items-center">
          <div className="absolute w-full h-[756px] top-0 left-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_3%,rgba(255,255,255,0)_3%),linear-gradient(90deg,rgba(255,255,255,0.05)_3%,rgba(255,255,255,0)_3%)] opacity-10" />

          <div className="flex flex-col max-w-screen-xl w-full items-start gap-16 px-6 py-0 relative">
            <div className="flex flex-col items-center w-full">
              <h2 className="bg-[linear-gradient(176deg,rgba(255,255,255,1)_0%,rgba(229,231,235,1)_100%)] text-[57.7px] leading-[60px] w-full mt-[-1.00px] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Menlo-Bold',Helvetica] font-bold text-transparent text-center tracking-[0]">
                🎯 MISSION PROTOCOL
              </h2>
            </div>

            <div className="flex max-w-6xl w-[976px] items-start justify-center gap-8">
              {missionProtocolCards.map((card, index) => (
                <Card
                  key={index}
                  className="relative w-[304px] bg-black overflow-hidden border-4 border-solid border-white"
                >
                  <div className="absolute w-[296px] h-[464px] top-1 left-[-292px] bg-[linear-gradient(90deg,rgba(239,68,68,0)_0%,rgba(239,68,68,0.1)_50%,rgba(239,68,68,0)_100%)]" />

                  <CardContent className="p-0">
                    <div className="w-60 gap-[36.01px] absolute top-8 left-8 rotate-[0.86deg] flex items-center">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Menlo-Bold',Helvetica] font-bold text-v0-friedrichshain-connection-ret-steelvercelappflamingo text-[59.9px] tracking-[0] leading-[60px] whitespace-nowrap">
                        {card.number}
                      </div>
                      {card.emoji && (
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Menlo-Bold',Helvetica] font-bold text-v0-friedrichshain-connection-ret-steelvercelappflamingo text-[36.9px] tracking-[0] leading-[60px] whitespace-nowrap">
                          {card.emoji}
                        </div>
                      )}
                    </div>

                    <div className="w-60 absolute top-[108px] left-8 flex flex-col items-start">
                      <h3 className="w-fit text-[23.8px] leading-8 relative mt-[-1.00px] [font-family:'Menlo-Bold',Helvetica] font-bold text-white tracking-[0] whitespace-pre-line">
                        {card.title}
                      </h3>
                    </div>

                    <div className="flex flex-col w-60 items-start absolute top-[188px] left-8">
                      <p className="text-[15.9px] leading-6 relative w-fit mt-[-1.00px] [font-family:'Menlo-Regular',Helvetica] font-normal text-v0-friedrichshain-connection-ret-steelvercelappgray-chateau tracking-[0] whitespace-pre-line">
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
        <section className="flex flex-col items-center w-full py-20 bg-v0-friedrichshain-connection-ret-steelvercelappebony">
          <div className="absolute w-full h-[800px] top-0 left-0 [background:radial-gradient(50%_50%_at_-4450%_-4450%,rgba(255,255,255,0.1)_2%,rgba(255,255,255,0)_2%)] opacity-10" />

          <div className="flex flex-col max-w-screen-xl w-full items-start gap-16 px-6 py-0 relative">
            <div className="flex flex-col items-center w-full">
              <h2 className="bg-[linear-gradient(173deg,rgba(255,255,255,1)_0%,rgba(229,231,235,1)_100%)] text-[57.7px] leading-[60px] w-full mt-[-1.00px] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Menlo-Bold',Helvetica] font-bold text-transparent text-center tracking-[0]">
                🔄 FROM ABSTRACT TO
                <br />
                ACTIONABLE
              </h2>
            </div>

            <div className="flex max-w-6xl w-[976px] items-start justify-center gap-8">
              {abstractToActionableCards.map((card, index) => (
                <Card
                  key={index}
                  className="relative w-[304px] overflow-hidden border-4 border-solid border-gray-700 bg-[linear-gradient(123deg,rgba(31,41,55,1)_0%,rgba(17,24,39,1)_100%)]"
                >
                  <div className="absolute w-[296px] h-[448px] top-1 left-[-292px] bg-[linear-gradient(90deg,rgba(99,102,241,0)_0%,rgba(99,102,241,0.1)_50%,rgba(99,102,241,0)_100%)]" />

                  <CardContent className="p-0">
                    <div className="flex w-[252px] items-center gap-[12.59px] absolute top-[31px] left-[26px]">
                      <img
                        className="relative w-[50.38px] h-[50.38px]"
                        alt="Svg"
                        src={card.iconSrc}
                      />
                      <div className="inline-flex flex-col items-start">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Menlo-Regular',Helvetica] font-normal text-v0-friedrichshain-connection-ret-steelvercelappcornflower-blue text-[15.9px] tracking-[0] leading-[33.6px] whitespace-nowrap">
                          {card.emoji}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col w-60 items-start absolute top-[104px] left-8">
                      <div className="text-[35.9px] leading-10 relative w-fit mt-[-1.00px] [font-family:'Menlo-Bold',Helvetica] font-bold text-white tracking-[0] whitespace-nowrap">
                        {card.phase}
                      </div>
                    </div>

                    <div className="w-60 absolute top-[152px] left-8 flex flex-col items-start">
                      <h3 className="text-[23.8px] leading-8 relative w-fit mt-[-1.00px] [font-family:'Menlo-Bold',Helvetica] font-bold text-white tracking-[0] whitespace-pre-line">
                        {card.title}
                      </h3>
                    </div>

                    <div className="flex flex-col w-60 items-start absolute top-[200px] left-8">
                      <p className="text-base leading-6 relative w-fit mt-[-1.00px] [font-family:'Menlo-Regular',Helvetica] font-normal text-v0-friedrichshain-connection-ret-steelvercelappgray-chateau tracking-[0] whitespace-pre-line">
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
        <section className="flex flex-col w-full py-20 bg-black items-center">
          <div className="absolute w-full h-[450px] top-0 left-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_3%,rgba(255,255,255,0)_3%),linear-gradient(90deg,rgba(255,255,255,0.05)_3%,rgba(255,255,255,0)_3%)] opacity-15" />

          <div className="flex flex-col max-w-screen-xl w-full items-center gap-16 px-6 py-0 relative">
            <div className="flex flex-col items-center w-full">
              <h2 className="bg-[linear-gradient(176deg,rgba(255,255,255,1)_0%,rgba(229,231,235,1)_100%)] text-[58.2px] leading-[60px] w-full mt-[-1.00px] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Menlo-Bold',Helvetica] font-bold text-transparent text-center tracking-[0]">
                🎮 JOIN THE COGNITIVE ELITE
              </h2>
            </div>

            <div className="flex max-w-4xl w-[896px] items-start justify-center gap-8">
              {cognitiveEliteStats.map((stat, index) => (
                <Card
                  key={index}
                  className="flex flex-col w-[277.33px] items-start gap-4 p-[27px] border-[3px] border-solid border-gray-700 [background:radial-gradient(50%_50%_at_50%_50%,rgba(17,24,39,1)_0%,rgba(0,0,0,1)_100%)]"
                >
                  <CardContent className="p-0 w-full">
                    <div className="flex items-center justify-center gap-4 w-full">
                      <div className="w-fit [font-family:'Menlo-Bold',Helvetica] font-bold text-v0-friedrichshain-connection-ret-steelvercelappflamingo text-[35.9px] text-center leading-10 whitespace-nowrap relative mt-[-1.00px] tracking-[0]">
                        {stat.value}
                      </div>
                      <div className="inline-flex flex-col items-center">
                        <div className="w-fit [font-family:'Menlo-Bold',Helvetica] font-bold text-v0-friedrichshain-connection-ret-steelvercelappflamingo text-[21.9px] text-center leading-10 whitespace-nowrap relative mt-[-1.00px] tracking-[0]">
                          {stat.emoji}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center w-full mt-4">
                      <div className="text-[19.8px] w-full mt-[-1.00px] [font-family:'Menlo-Bold',Helvetica] font-bold text-v0-friedrichshain-connection-ret-steelvercelappmischka text-center tracking-[0] leading-7 whitespace-pre-line">
                        {stat.label}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="flex flex-col items-center w-full py-20 bg-v0-friedrichshain-connection-ret-steelvercelappebony">
          <div className="absolute w-full h-[460px] top-0 left-0 [background:radial-gradient(50%_50%_at_-4450%_-4450%,rgba(255,255,255,0.1)_2%,rgba(255,255,255,0)_2%)] opacity-10" />

          <div className="flex max-w-6xl w-[976px] items-start justify-center gap-8 relative">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="flex flex-col w-[304px] items-start gap-6 p-8 bg-v0-friedrichshain-connection-ret-steelvercelappebony-clay border-4 border-solid border-gray-700"
              >
                <CardContent className="p-0 w-full">
                  <div className="flex flex-col items-start w-full">
                    <p className="w-full mt-[-1.00px] [font-family:'Menlo-Regular',Helvetica] font-normal text-v0-friedrichshain-connection-ret-steelvercelappmischka text-[17.9px] tracking-[0] leading-7 whitespace-pre-line">
                      {testimonial.quote}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 w-full mt-6">
                    {testimonial.emoji && (
                      <div className="inline-flex flex-col items-start">
                        <div className="w-fit [font-family:'Menlo-Regular',Helvetica] font-normal text-white text-[15px] leading-8 whitespace-nowrap relative mt-[-1.00px] tracking-[0]">
                          {testimonial.emoji}
                        </div>
                      </div>
                    )}
                    <div className="inline-flex flex-col items-start">
                      <div className="flex flex-col items-start w-full">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Menlo-Bold',Helvetica] font-bold text-white text-[15.9px] tracking-[0] leading-6 whitespace-nowrap">
                          {testimonial.name}
                        </div>
                      </div>
                      <div className="flex flex-col items-start w-full">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Menlo-Regular',Helvetica] font-normal text-v0-friedrichshain-connection-ret-steelvercelappcornflower-blue text-[13.9px] tracking-[0] leading-5 whitespace-nowrap">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="flex flex-col w-full py-20 bg-black items-center">
          <div className="absolute w-full h-[735px] top-0 left-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_3%,rgba(255,255,255,0)_3%),linear-gradient(90deg,rgba(255,255,255,0.05)_3%,rgba(255,255,255,0)_3%)] opacity-20" />
          <div className="absolute w-full h-[735px] top-0 left-0 [background:radial-gradient(50%_50%_at_-4450%_-4450%,rgba(255,255,255,0.1)_2%,rgba(255,255,255,0)_2%)] opacity-10" />

          <div className="flex flex-col max-w-4xl w-[896px] items-start gap-8 pt-0 pb-[232px] px-0 relative">
            <div className="flex flex-col items-center w-full">
              <h2 className="w-full mt-[-1.00px] bg-[linear-gradient(172deg,rgba(255,255,255,1)_0%,rgba(229,231,235,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Menlo-Bold',Helvetica] font-bold text-transparent text-[57.9px] text-center tracking-[0] leading-[60px]">
                🎯 READY FOR COGNITIVE
                <br />
                DOMINATION?
              </h2>
            </div>

            <div className="flex flex-col items-center px-4 py-0 w-full">
              <p className="w-full mt-[-1.00px] [font-family:'Menlo-Regular',Helvetica] font-normal text-v0-friedrichshain-connection-ret-steelvercelappgray-chateau text-[19.8px] text-center tracking-[0] leading-7">
                Your 30-day neural enhancement mission is completely free. No
                credit
                <br />
                card required. No corporate bureaucracy. Just pure cognitive
                evolution
                <br />
                with Captain Kalm&#39;s guidance in the Kalmverse. 🚀🧠
              </p>
            </div>

            <div className="flex items-center justify-center gap-6 pt-4 pb-0 px-4 w-full">
              <Button className="min-h-[52px] items-center justify-center px-8 py-[18px] bg-v0-friedrichshain-connection-ret-steelvercelappflamingo border-4 border-solid border-red-500 relative overflow-hidden">
                <div className="absolute w-[289px] h-[52px] top-1 left-[-286px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0)_100%)]" />
                <span className="text-[14.7px] tracking-[1.52px] leading-[22.8px] relative w-fit mt-[-1.00px] [font-family:'Menlo-Bold',Helvetica] font-bold text-v0-friedrichshain-connection-ret-steelvercelappblack text-center whitespace-nowrap">
                  🔥 INITIATE NEURAL SYNC
                </span>
              </Button>

              <Button
                variant="outline"
                className="min-h-[52px] items-center justify-center px-8 py-[18px] relative overflow-hidden border-4 border-solid border-white"
              >
                <div className="absolute w-[264px] h-[52px] top-1 left-[-263px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0)_100%)]" />
                <span className="mt-[-4.00px] text-[15.2px] tracking-[1.52px] leading-[22.8px] relative w-fit [font-family:'Menlo-Bold',Helvetica] font-bold text-white text-center whitespace-nowrap">
                  🚀 MEET CAPTAIN KALM
                </span>
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* Corner decoration */}
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
