
import servicesImg from "../assets/6.jpg";
import { Navbar, Intro, RecentTrips } from "../components";

const Services = () => {
  return (
    <>
        <Intro
          image={servicesImg}
          title="Services"
          additionalWrapStyles={{height: "70vh"}}
          headerStyles={{ paddingTop: "4.5rem", marginTop: "2rem" }}
        />
        <RecentTrips />
    </>
  )
}

export default Services