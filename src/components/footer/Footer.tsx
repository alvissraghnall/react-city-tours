import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { SiBehance, SiFacebook, SiGithub, SiInstagram, SiTwitter } from "react-icons/si";

const datas = [
    { highlighted: "project", links: ["changelogs", "license", "status", "all versions"]},
    { highlighted: "help", links: ["support", "contact us", "services"]},
    { highlighted: "community", links: ["github", "issues", "actions", "discussion"]},
    { highlighted: "others", links: ["terms of service", "cookies policy", "privacy policy"]},
]

const links = [
    { nom: "https://github.com/alvissraghnall", icon: <SiGithub className={styles.icon} /> },
    { nom: "https://twitter.com/alvissraghnall", icon: <SiTwitter className={styles.icon} /> },
    { nom: "", icon: <SiInstagram className={styles.icon} /> },
    { nom: "", icon: <SiFacebook className={styles.icon} /> },
]

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.elu}>
            <div className={styles.akaEkpe}>
                <h1>Citeh</h1>
                <p>Choose your preferred destination</p>
            </div>
            <div className={styles.akaNri}>
                {
                    links.map(
                        (item, idx) => (
                            <a href={item.nom}>
                                {item.icon}
                            </a>
                        )
                    )
                }
            </div>
        </div>

        <div className={styles.ala}>
            {
                datas.map((item, idx) => (
                    
                    <div>
                        <h4> { item.highlighted } </h4>
                        { 
                            item.links.map((link, linkId) => (
                                <Link to={"/" + link} className={styles.link}>{ link }</Link>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    </footer>
  )
}

export default Footer