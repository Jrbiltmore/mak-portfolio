import React from "react";

import {
  Header,
  Nav,
  About,
  Resume,
  Services,
  Portfolio,
  Testimonials,
  Contact,
  Footer,
} from "./components";

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <About />
      {/* <Experience /> */}
      <Resume />
      <Services />
      {/* <Portfolio /> */}
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
