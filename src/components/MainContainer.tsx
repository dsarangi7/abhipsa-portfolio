import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Education from "./Education";
import Landing from "./Landing";
import Navbar from "./Navbar";
import WhatIDo from "./WhatIDo";

const MainContainer = () => {
  return (
    <div className="container-main">
      <Navbar />
      <Landing />
      <About />
      <WhatIDo />
      <Career />
      <Education />
      <Contact />
    </div>
  );
};

export default MainContainer;
