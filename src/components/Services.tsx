
import React from "react";
import { Brain, Database, Server, Share2 } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-border transition-all duration-300 hover:shadow-lg hover:border-zen-purple/20 group">
      <div className="w-12 h-12 mb-4 flex items-center justify-center bg-zen-light dark:bg-gray-700 rounded-lg text-zen-purple group-hover:bg-zen-purple group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Brain size={28} />,
      title: "A.I. Solutions",
      description:
        "Leverage the power of artificial intelligence to transform your business operations and customer experience, unlocking new opportunities for growth and innovation.",
    },
    {
      icon: <Share2 size={28} />,
      title: "Blockchain Consulting",
      description:
        "Leverage the power of blockchain technology to enhance your business operations, streamline transactions, and establish trust with your customers.",
    },
    {
      icon: <Database size={28} />,
      title: "Machine Learning Services",
      description:
        "Leverage the power of machine learning to unlock the full potential of your data, and gain insights that drive business growth.",
    },
    {
      icon: <Server size={28} />,
      title: "Cloud Solutions",
      description:
        "Leverage the power of cloud technology to streamline your business operations, enhance collaboration, and reduce costs.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-muted/50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="mb-4">Services We Provide</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our team of experienced professionals is dedicated to delivering tailored 
            solutions that meet your unique business requirements.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
