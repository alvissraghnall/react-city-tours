import { Intro, Navbar } from "../components";

import forestImg from "../assets/forest.jpg";


const About = () => {
  return (
    <>
        <Navbar />
        <Intro
          image={forestImg}
          title="About"
          additionalWrapStyles={{height: "70vh"}}
          headerStyles={{ paddingTop: "3.4rem" }}
        />
    </>
  );
}

export default About;