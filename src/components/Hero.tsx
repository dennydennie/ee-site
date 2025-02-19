import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/tech-hero.png";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Innovative Technology Solutions for African Businesses
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Ekspertas Engineering delivers cutting-edge software development, 
              data analysis, and DevOps solutions to help your business thrive 
              in the digital age.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="#contact-form"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
                Get Started
              </a>
              <a
                href="#services"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Technology Solutions Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Trusted by <span className="text-blue-600">leading</span>{" "}
            organizations across Zimbabwe
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <ClientLogo1 />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <ClientLogo1 />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <ClientLogo1 />
            </div>
            <div className="pt-1 text-gray-400 dark:text-gray-400">
              <ClientLogo1 />
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <ClientLogo1 />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

const ClientLogo1 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="120"
    height="40"
    viewBox="0 0 120 40"
    fill="currentColor"
    className="opacity-75 hover:opacity-100 transition-opacity">
    <rect width="120" height="40" rx="8" />
  </svg>
);

