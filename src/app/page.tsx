import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-dark h-200"></div>
      <div
        id="hero-sentinel"
        ref={null}
        className="absolute bottom-0 h-px w-full"
      />
    </>
  );
}
