import React from 'react';
import { cn } from "@/components/lib/utils";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { TypingText } from "@/components/ui/typing-text";
import { ShinyText } from "@/components/ui/shiny-text";
import { BorderBeam } from "@/components/ui/border-beam";
import { SparkleParticles } from "@/components/ui/sparkle-particles";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <AuroraBackground className="absolute inset-0">
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 py-16">
          {/* Sparkle Particles for a subtle ambient effect */}
          <SparkleParticles className="absolute inset-0" quantity={100} sparkleColor="#ffffff" />

          {/* Designer's Name / Role with Typing Effect */}
          <TypingText
            text="John Doe – UI/UX Designer"
            className="text-lg md:text-xl lg:text-2xl text-gray-200 dark:text-gray-300 mb-4 font-semibold tracking-wide drop-shadow-md"
            typingSpeed={100}
          />

          {/* Captivating Headline with Shiny Text Effect */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 relative leading-tight">
            <ShinyText
              text="Crafting Intuitive & Visually Stunning Digital Experiences"
              className="text-white drop-shadow-lg"
            />
          </h1>

          {/* Call to Action Button with Border Beam Effect */}
          <div className="relative z-20 mt-8">
            <Button
              className="relative px-8 py-3 text-lg font-medium rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              View My Work
              {/* BorderBeam for an animated border effect */}
              <BorderBeam className="absolute inset-0" borderWidth={2} duration={8} />
            </Button>
          </div>
        </div>
      </AuroraBackground>
    </section>
  );
};

export default HeroSection;
