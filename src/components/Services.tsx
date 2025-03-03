/* eslint-disable @next/next/no-img-element */
import React from "react";
import { benefitOne, benefitTwo } from "./data"; // Import the benefits data
import { SectionTitle } from "./SectionTitle"; // Import SectionTitle for headings
import { Cta } from "./Cta"; // Import Cta for call to action

export interface ServiceType{
  title: string;
  desc: string;
}

export const Services = () => {
  // Combine and deduplicate services from both benefits
  const allServices = [
    ...benefitOne.bullets,
    ...benefitTwo.bullets,
  ].reduce((unique, service) => {
    if (!unique.some(item => item.title === service.title)) {
      unique.push(service);
    }
    return unique;
  }, [] as ServiceType[]);

  return (
    <section className="py-2">
      <SectionTitle title="Our Expertise" align="center" />
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allServices.map((service, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img 
                src={benefitOne.image} 
                alt={service.title} 
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <Cta />
      </div>
    </section>
  );
};
