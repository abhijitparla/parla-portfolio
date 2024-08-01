import Image from "next/image";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Features from "./components/Features";
import Footer from "./components/Footer";
import OurWork from "./components/OurWork";

export default function Home() {
  return (
    <main className="">
      <Header/>
      <Hero/>
      <Features/>
      <OurWork/>
      <Footer/>
    </main>
  );
}
