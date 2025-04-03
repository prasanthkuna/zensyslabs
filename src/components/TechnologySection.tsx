
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface TechnologyCardProps {
  title: string;
  features: string[];
}

const TechnologyCard = ({ title, features }: TechnologyCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="mr-3 mt-1">
                <div className="h-2 w-2 rounded-full bg-zen-purple"></div>
              </div>
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const TechnologySection = () => {
  const technologies = [
    {
      title: "Data Pipeline Architecture",
      features: [
        "Efficient Data Processing",
        "Data Warehousing and Analytics",
        "Data Governance",
      ],
    },
    {
      title: "Cloud-based Solutions",
      features: [
        "Analytics Consulting",
        "Data Integration",
        "Natural Language Processing",
      ],
    },
    {
      title: "Cloud-based Architecture",
      features: [
        "Data Security",
        "High-performance Computing",
        "Data Pipeline Automation",
      ],
    },
    {
      title: "Real-time Processing",
      features: [
        "Data Warehousing",
        "Cloud-based Architecture",
        "Efficient Data Processing",
      ],
    },
  ];

  return (
    <section id="technologies" className="section-padding bg-muted/50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="mb-4">Data-Driven Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We can help you establish data-backed roadmaps to drive growth in your business. 
            Our team of experts can assist you in analyzing your data and developing tailored strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <TechnologyCard
              key={index}
              title={tech.title}
              features={tech.features}
            />
          ))}
        </div>
        
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="mb-4">Actionable Insights</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our data analytics team can help uncover key insights about your business, 
              enabling you to make informed decisions. Don't let your data go to waste – 
              transform it into actionable recommendations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
