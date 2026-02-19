import { useState } from "react";
import Hero from "./components/Hero";
import Collection from "./components/Collection";
import Showcase from "./components/Showcase";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Hero />
      <Collection />
      <Showcase />
      <Footer />
    </>
  );
}

export default App;
