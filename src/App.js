import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Article from "./components/Article";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Category />
      <Article />
      <Subscribe />
      <Footer />
    </>
  );
};

export default App;
