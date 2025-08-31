import { ContactLanding } from "@/components/Landing/ContactLanding";
import { Hero } from "@/components/Landing/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-primary h-200"></div>
      <div
        id="hero-sentinel"
        ref={null}
        className="absolute bottom-0 h-px w-full"
      />
      <ContactLanding />
    </>
  );
}
