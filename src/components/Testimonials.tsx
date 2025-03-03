import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

// Import client images
import ceoImage from "../../public/img/clients/client1.jpg";
import ctoImage from "../../public/img/clients/client2.jpg";
import managerImage from "../../public/img/clients/client3.jpg";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-50 px-8 rounded-2xl py-10 dark:bg-trueGray-800">
            <p className="text-xl leading-normal">
              Ekspertas Engineering transformed our business operations with their{" "}
              <Mark>custom software solution</Mark>. Their understanding of the
              Zimbabwean market and technical expertise delivered exactly what we
              needed.
            </p>

            <Avatar
              image={ceoImage}
              name="Tendai Moyo"
              title="CEO, ZimTech Solutions"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-50 px-8 rounded-2xl py-10 dark:bg-trueGray-800">
            <p className="text-xl leading-normal">
              Their <Mark>data analytics platform</Mark> helped us make informed
              decisions and identify new business opportunities. The team&apos;s
              technical knowledge and local support are outstanding.
            </p>

            <Avatar
              image={ctoImage}
              name="Farai Ndlovu"
              title="CTO, African Banking Corporation"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-50 px-8 rounded-2xl py-10 dark:bg-trueGray-800">
            <p className="text-xl leading-normal">
              The <Mark>DevOps implementation</Mark> by Ekspertas Engineering
              significantly improved our deployment process and system reliability.
              Their ongoing support is exceptional.
            </p>

            <Avatar
              image={managerImage}
              name="Jeffrey Thomas"
              title="IT Manager, Zimbabwe Telecoms"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt={props.name}
          placeholder="blur"
          className="object-cover w-full h-full"
        />
      </div>
      <div>
        <div className="text-lg font-medium text-gray-800 dark:text-gray-200">
          {props.name}
        </div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-blue-800 bg-blue-100 rounded-md ring-blue-100 ring-4 dark:ring-blue-900 dark:bg-blue-900 dark:text-blue-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
