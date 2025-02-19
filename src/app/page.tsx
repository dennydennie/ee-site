import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Why Choose Ekspertas Engineering"
        title="Your Technology Partner in Zimbabwe"
      >
        Ekspertas Engineering is a leading software development company in Zimbabwe,
        delivering cutting-edge solutions in software development, internet computing,
        data analysis, and DevOps engineering.
      </SectionTitle>


      <SectionTitle
        preTitle="Our Expertise"
        title="End-to-End Technology Solutions"
      >
        Discover how Ekspertas Engineering can transform your business through our
        comprehensive range of services. From custom software development to advanced
        data analytics, we&apos;re here to drive your digital success.
      </SectionTitle>

      <SectionTitle
        preTitle="Our Services"
        title="What We Offer"
      >
        At Ekspertas Engineering, we provide a wide range of services including custom software development, data analytics, and DevOps solutions tailored to meet your business needs.
      </SectionTitle>
      <Services />

      {/* <Video videoId="fZ0D0cnR88E" /> */}

      <SectionTitle
        preTitle="Client Success Stories"
        title="What Our Clients Say About Us"
      >
        Here&apos;s what businesses across Zimbabwe and beyond say about their experience
        working with Ekspertas Engineering.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Common Questions">
        Get answers to frequently asked questions about our services, process, and
        how we can help your business succeed in the digital age.
      </SectionTitle>

      <Faq />

      <Cta />
    </Container>
  );
}
