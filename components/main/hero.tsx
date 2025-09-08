import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <section className="relative flex flex-col min-h-[70vh] sm:min-h-screen w-full justify-center items-center pt-[65px] overflow-hidden px-2 sm:px-4 md:px-0">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover -z-20"
      >
        <source src="/videos/skills-bg.webm" type="video/webm" />
      </video>

      <HeroContent />
    </section>
  );
};
