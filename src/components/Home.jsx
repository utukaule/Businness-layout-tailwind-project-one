import React from "react";
import Navbar from "./Navbar";
import CoverImage from "./CoverImage";
import Analytics from "./Analytics";
import Newsletter from "./Newsletter";
import Cards from "./Cards";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <CoverImage />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </>
  );
};

export default Home;
