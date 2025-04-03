
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface CaseStudyProps {
  image: string;
  title: string;
  description: string;
  stats: string;
  index: number;
}

const CaseStudy = ({ image, title, description, stats, index }: CaseStudyProps) => {
  const isEven = index % 2 === 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className={`order-2 ${isEven ? "md:order-2" : "md:order-1"}`}>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        <div className="mb-6">
          <p className="font-medium gradient-text text-lg mb-1">{stats}</p>
        </div>
        <Button variant="link" className="text-zen-purple hover:text-zen-indigo p-0 flex items-center gap-2 group">
          READ MORE
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
      <div className={`order-1 ${isEven ? "md:order-1" : "md:order-2"}`}>
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-zen-purple/20 to-zen-teal/20 opacity-70"></div>
          <img 
            src={image}
            alt={title} 
            className="w-full aspect-[4/3] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const CaseStudies = () => {
  const caseStudies = [
    {
      image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Revolutionizing the E-commerce Industry with AI",
      description: "Discover how we helped our client, an e-commerce giant, leverage the power of AI to transform their business, leading to a 40% increase in sales and a 70% reduction in customer churn rate.",
      stats: "40% increase in sales",
    },
    {
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Blockchain-based Identity Verification for a Decentralized World",
      description: "Learn how we helped a startup in the fintech space leverage blockchain technology to create a secure, decentralized identity verification system, leading to increased trust among customers and partners.",
      stats: "Increased trust among customers and partners",
    },
  ];

  return (
    <section id="case-studies" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="mb-4">Our Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how we've helped our clients transform their businesses with innovative technology solutions.
          </p>
        </div>
        <div className="space-y-20">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudy
              key={index}
              image={caseStudy.image}
              title={caseStudy.title}
              description={caseStudy.description}
              stats={caseStudy.stats}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
