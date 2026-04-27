import Hero from "@/components/sections/home/Hero"
import Metrics from "@/components/Metrics"
import Challenges from "@/components/sections/home/Challenge";
import Service from "@/components/sections/home/Service";
import About from "@/components/sections/home/About";

export default function Home() {
  return (
    <>
      <Hero/>
      <Metrics/>
      <Challenges/>
      <Service/>
      <About/>
    </>
  );
}
