import { ContactLanding } from "@/components/Landing/ContactLanding";
import { Hero } from "@/components/Landing/Hero";
import { Sentinel } from "@/components/Sentinel";
import { Studio } from "@/components/Landing/Studio/Studio";
import { DividerImage } from "@/components/DividerImage/DividerImage";
import { Team } from "@/components/Landing/Team/Team";

export default function Home() {
  return (
    <>
      <Hero />
      <Sentinel />
      <Studio />
      <DividerImage  id="placeholder2"/>
      <Team />
      <DividerImage  id="placeholder2"/>
      <ContactLanding />
    </>
  );
}
