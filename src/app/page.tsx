import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="h-200 bg-dark"></div>
      <div
        id="hero-sentinel"
        ref={null}
        className="absolute bottom-0 h-px w-full"
      />
    </>
  );
}
