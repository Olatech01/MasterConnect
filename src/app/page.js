import GetHired from "@/components/Home/GetHired";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Home/Navbar";
import Numerous from "@/components/Home/Numerous";
import Perfect from "@/components/Home/Perfect";
import Services from "@/components/Home/Services";
import Testimonies from "@/components/Home/Testimonies";
import WideRange from "@/components/Home/WideRange";

export default function Home() {
  return (
    <div className="flex flex-col gap-[3rem]">
      <Navbar />
      <Hero />
      <Numerous />
      <GetHired />
      <WideRange />
      <Services />
      <Perfect />
      {/* <Testimonies /> */}
    </div>
  );
}
