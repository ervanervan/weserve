import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import GetStarted from "../components/GetStarted";
import Brands from "../components/Brands";
import OurEcosystem from "../components/OurEcosystem";
import OurShowcase from "../components/OurShowcase";
import FAQ from "../components/FAQ";
import Featured from "../components/Featured";

const Homepage = () => {
  return (
    <>
      <main>
        <Navbar />
        <section className="max-width">
          <Hero />
          <Brands />
          <Featured />
          <OurEcosystem />
        </section>
        <OurShowcase />
        <section className="max-width">
          <FAQ />
          <GetStarted />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Homepage;
