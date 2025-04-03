
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { 
  Database, 
  LineChart, 
  Shield, 
  BarChart3,
  Server, 
  Workflow, 
  CloudCog, 
  PieChart 
} from "lucide-react";

interface TechnologyCardProps {
  title: string;
  features: string[];
  icon: React.ReactNode;
}

const TechnologyCard = ({ title, features, icon }: TechnologyCardProps) => {
  return (
    <Card className="hover:border-zen-purple/30 transition-all duration-300">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <div className="text-zen-purple">
            {icon}
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
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
      icon: <Database size={24} />
    },
    {
      title: "Cloud-based Solutions",
      features: [
        "Analytics Consulting",
        "Data Integration",
        "Natural Language Processing",
      ],
      icon: <CloudCog size={24} />
    },
    {
      title: "Cloud-based Architecture",
      features: [
        "Data Security",
        "High-performance Computing",
        "Data Pipeline Automation",
      ],
      icon: <Shield size={24} />
    },
    {
      title: "Real-time Processing",
      features: [
        "Data Warehousing",
        "Cloud-based Architecture",
        "Efficient Data Processing",
      ],
      icon: <Workflow size={24} />
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
              icon={tech.icon}
            />
          ))}
        </div>
        
        <div className="mt-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Data visualization and analytics" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="mb-4">Actionable Insights</h3>
              <p className="text-lg text-muted-foreground">
                Our data analytics team can help uncover key insights about your business, 
                enabling you to make informed decisions. Don't let your data go to waste – 
                transform it into actionable recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
