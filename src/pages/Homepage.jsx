import React from "react";
import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Brands from "../components/Brands";
import Footer from "../components/Footer";
import Featured from "../components/Featured";
import GetStarted from "../components/GetStarted";
import OurShowcase from "../components/OurShowcase";
import OurEcosystem from "../components/OurEcosystem";

const Homepage = () => {
  return (
    <>
      <main className="dark:bg-dark-blue-1">
        <Navbar />
        <section className="max-width">
          <Hero />
        </section>
        <Brands />
        <section className="max-width">
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
