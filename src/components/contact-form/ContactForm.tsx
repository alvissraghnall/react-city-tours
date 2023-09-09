import { FormEvent, useState } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    console.log(name, subject, email, message);
  }

  return (
    <div className={styles.holder}>
        <h1> Send us a message! </h1>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input 
                type="text" 
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}

            />
            <input 
                type="text" 
                placeholder="Subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
            />
            <textarea name="message" id="message" cols={30} rows={5} placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />

            <button type="submit">
                Send Message
            </button>
        </form>
    </div>
  )
}

export default ContactForm