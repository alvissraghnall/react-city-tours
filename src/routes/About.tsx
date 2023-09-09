import { AboutContent, Intro, Navbar } from "../components";
import forestImg from "../assets/forest.jpg";

const About = () => {
  return (
    <>
        <Intro
          image={forestImg}
          title="About"
          additionalWrapStyles={{height: "70vh"}}
          headerStyles={{ paddingTop: "3.4rem" }}
        />

        <AboutContent />
    </>
  );
}

export default About;