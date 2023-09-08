import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FaHouseUser, FaInfoCircle, FaAddressBook } from "react-icons/fa";
import { HiBriefcase, HiMenu, HiX } from "react-icons/hi";
import React, { useState } from 'react';

const items = [{
  title: "Home",
  link: "/",
  icon: ({classNom}: { [x: string]: string}) => <FaHouseUser className={classNom} />
}, {
  title: "About",
  link: "/about",
  icon: ({classNom}: { [x: string]: string}) => <FaInfoCircle className={classNom} />
}, {
  title: "Services",
  link: "/services",
  icon: ({classNom}: { [x: string]: string}) => <HiBriefcase className={classNom} />
}, {
  title: "Contact",
  link: "/contact",
  icon: ({classNom}: { [x: string]: string}) => <FaAddressBook className={classNom} />
}, {
  title: "Sign Up",
  link: "/sign-up",
}];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeIsMenuOpen = () => setIsMenuOpen(prev => !prev);

  return (
    <nav className={styles.items}>
        <h1 className={styles.logo}>
          Citeh
        </h1>

        <div className={styles.mobileMenuBar} onClick={changeIsMenuOpen}>
          {
            isMenuOpen ? <HiX className={styles.menuIcon} /> : <HiMenu className={styles.menuIcon} />
          }
        </div>

        <ul className={`${styles.menu} ${isMenuOpen ? styles.menuActive : ''}`}>
          {
            items.map((item, idx) => (
              <li key={idx} className={styles.item}>
                <Link to={item.link} className={`${styles.link} ${item.link === "/sign-up" ? styles.signupMobile : ''}`}>
                  <span className={styles.iconWrap}>
                    {item.icon && <item.icon classNom={styles.icon} />}
                  </span>
                  <span>{item.title}</span>
                </Link>
              </li>
            ))
          }
          <button className={styles.signup}> Sign Up</button>
        </ul>
    </nav>
  )
}

export default Navbar