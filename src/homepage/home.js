import React from "react";
import Testimonials from "./testimonials";
import Header from "../layouts/header";
import SolutionDisplay from "./solutionsDisplay";
import Hero from "./hero";
import Footer from "../layouts/footer";

function Home() {
  return (
    <React.Fragment>
      <Header />

      <Hero />
      <SolutionDisplay />
      <Testimonials />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
