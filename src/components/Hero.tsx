import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/tech-hero.png"

const clients = [
  {
    name: "Reatshwana Investments",
    image: "/img/clients/reatshwana.png",
    website: "https://www.reatshwanainvestments.co.za",
  },
  {
    name: "Civil Projects Inc",
    image: "/img/clients/civilprojects.png",
    website: "https://www.civilprojectsinc.co.zw",
  },
  {
    name: "Marineland Bronx",
    image: "/img/clients/marineland.png",
    website: "https://www.marineland-bronx.co.za",
  },
];

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
      {/* TODO: Rotating clients when array is more than 3 */}
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Trusted by <span className="text-blue-600">many</span>{" "}
            organizations across Africa
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            {clients.map((client, index) => (
              <a
                key={index}
                href={client.website}
                target="_blank"
                rel="noopener noreferrer"
                className="pt-2 text-gray-400 dark:text-gray-400 transition-transform duration-300 hover:scale-110 group relative"
              >
                <Image
                  src={client.image}
                  width={120}
                  height={40}
                  alt={client.name}
                  className="filter grayscale hover:grayscale-0 transition-all duration-300"
                />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {client.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

