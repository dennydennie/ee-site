import React from "react";
import { benefitOne, benefitTwo } from "./data"; // Import the benefits data
import { SectionTitle } from "./SectionTitle"; // Import SectionTitle for headings
import { Cta } from "./Cta"; // Import Cta for call to action

export const Services = () => {
  return (
    <section className="py-16">
      <SectionTitle title="Our Services" preTitle="What We Offer" align="center" />
      
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="p-6 border rounded-lg shadow-md">
            <img src={benefitOne.image} alt={benefitOne.title} className="mb-4" />
            <h3 className="text-xl font-semibold">{benefitOne.title}</h3>
            <p className="mb-4">{benefitOne.desc}</p>
            <ul>
              {benefitOne.bullets.map((bullet, index) => (
                <li key={index} className="flex items-center mb-2">
                  <div>
                    <strong>{bullet.title}</strong>: {bullet.desc}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 border rounded-lg shadow-md">
            <img src={benefitTwo.image} alt={benefitTwo.title} className="mb-4" />
            <h3 className="text-xl font-semibold">{benefitTwo.title}</h3>
            <p className="mb-4">{benefitTwo.desc}</p>
            <ul>
              {benefitTwo.bullets.map((bullet, index) => (
                <li key={index} className="flex items-center mb-2">
                  <div>
                    <strong>{bullet.title}</strong>: {bullet.desc}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Cta /> {/* Include the call to action component */}
    </section>
  );
};
