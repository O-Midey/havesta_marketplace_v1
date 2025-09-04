import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Promotion from "../components/Promotion";
import Cta from "../components/Cta";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Vendors from "../components/Vendors";

const Marketplace = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Promotion />
      <Vendors />
      <Cta />
      <Banner />
      <Features />
      <Footer />
    </div>
  );
};

export default Marketplace;
