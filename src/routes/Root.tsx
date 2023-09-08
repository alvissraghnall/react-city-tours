import { Navbar, Intro } from '../components';

import nightImg from "../assets/night.jpg";


const Root = () => {
  return (
    <>
        <Navbar />
        <Intro
          image={nightImg}
          title="Your journey; Your story"
          textContent="Select your preferred destination."
          linkText='Travel Plan'
          url='/'
        />
    </>
  )
}

export default Root;