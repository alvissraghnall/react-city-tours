import { Navbar, Intro, ContactForm } from "../components"

import iceImg from "../assets/3.jpg";

const Contact = () => {
  return (
    <>
        <Intro
          image={iceImg}
          title="Contact Us"
          additionalWrapStyles={{height: "70vh"}}
          headerStyles={{ paddingTop: "4.3rem" }}
        />

        <ContactForm />
    </>
  )
}

export default Contact;