
import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-zen-purple/10 blur-3xl"></div>
        <div className="absolute top-1/2 -left-48 w-96 h-96 rounded-full bg-zen-blue/10 blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6 animate-fade-in">
            Empowering Your Business with{" "}
            <span className="gradient-text">Cutting-Edge Technology</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Welcome to Zensyslabs, a premier IT consulting firm that specializes
            in providing innovative solutions to businesses and startups.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button className="bg-zen-purple hover:bg-zen-indigo text-white px-8 py-6 text-lg">
              Get Started
            </Button>
            <Button variant="outline" className="border-zen-purple text-zen-purple hover:bg-zen-purple/10 px-8 py-6 text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
        <div className="relative w-full max-w-5xl mx-4">
          <div className="absolute inset-0 bg-gradient-to-r from-zen-purple/20 to-zen-blue/20 rounded-xl blur-xl"></div>
          <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-1 rounded-xl shadow-xl">
            <div className="absolute top-0 left-0 w-full h-full bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm rounded-xl"></div>
            <div className="relative h-[240px] md:h-[360px] rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <div className="text-center p-6">
                <h3 className="text-xl md:text-2xl font-medium mb-2">Visualize Your IT Infrastructure</h3>
                <p className="text-muted-foreground mb-4">Interactive dashboard showing our technology solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
