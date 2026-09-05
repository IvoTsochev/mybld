import { Hero } from "../components/Hero";
import { HowWeWork } from "../components/HowWeWork";
import { Services } from "../components/Services";
import { AboutUs } from "../components/AboutUs";
import { FeaturedProjects } from "../components/FeaturedProjects";
import { ContactUs } from "../components/ContactUs";

export const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <FeaturedProjects />
      <HowWeWork />
      <AboutUs />
      <ContactUs />
    </div>
  );
};
