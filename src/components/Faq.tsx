"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "What services does Ekspertas Engineering offer?",
    answer: "We offer a comprehensive range of technology services including custom software development, web and mobile app development, data analysis and visualization, cloud computing solutions, and DevOps engineering. Our team specializes in delivering end-to-end solutions tailored to your business needs.",
  },
  {
    question: "Do you work with businesses outside of Zimbabwe?",
    answer: "Yes, while we're based in Zimbabwe, we serve clients globally. Our team has experience working with businesses across Africa and internationally. We leverage modern collaboration tools and methodologies to ensure seamless communication and project delivery regardless of location.",
  },
  {
    question: "What is your project development process?",
    answer: "Our development process follows industry best practices: 1) Initial consultation and requirements gathering, 2) Project planning and architecture design, 3) Agile development with regular client updates, 4) Thorough testing and quality assurance, 5) Deployment and ongoing support. We ensure transparent communication throughout the entire process.",
  },
  {
    question: "How do you handle data security and privacy?",
    answer: "Security is a top priority at Ekspertas Engineering. We implement industry-standard security protocols and best practices in all our solutions. This includes secure coding practices, encrypted data transmission, regular security audits, and compliance with relevant data protection regulations.",
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We work with a wide range of modern technologies including React, Node.js, Python, AWS/Azure cloud services, Docker, Kubernetes, and various data analysis tools. Our tech stack is constantly evolving to ensure we're using the most effective solutions for our clients' needs.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, we offer comprehensive support and maintenance packages for all our solutions. This includes regular updates, bug fixes, performance optimization, and technical support. We can tailor our support services to meet your specific requirements and budget.",
  },
  {
    question: "How do you handle project pricing?",
    answer: "Our pricing is project-based and depends on factors such as scope, complexity, timeline, and required resources. We provide detailed quotes after initial consultations and requirements gathering. We're committed to delivering value while maintaining competitive pricing in the market.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. Small projects might take 4-8 weeks, while larger enterprise solutions can take several months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements and priorities.",
  }
];
