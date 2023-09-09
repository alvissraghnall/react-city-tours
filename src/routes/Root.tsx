import { Navbar, Intro, Destinations, Footer, RecentTrips } from '../components';

import nightImg from "../assets/night.jpg";

const Root = () => {
  return (
    <>
        <Intro
          image={nightImg}
          title="Your journey; Your story"
          textContent="Select your preferred destination."
          linkText='Travel Plan'
          url='/'
        />
        <Destinations />
        <RecentTrips />
    </>
  )
}

export default Root;