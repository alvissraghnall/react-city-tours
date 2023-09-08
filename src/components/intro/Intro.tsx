import { Link } from 'react-router-dom';
import styles from './Intro.module.css';
import { CSSProperties } from 'react';

interface IntroProps {
  image: string;
  title: string;
  textContent?: string;
  url?: string;
  linkText?: string;
  additionalWrapStyles?: CSSProperties;
  headerStyles?: CSSProperties;
}

const Intro = ({
  image, title, textContent, linkText, url, additionalWrapStyles, headerStyles
}: IntroProps) => {
  return (
    <div className={styles.intro} style={additionalWrapStyles}>
      <img src={image} alt="intro image" />

      <div className={styles.introText}>
        <h1 style={headerStyles}>{title}</h1>
        <p>
          {textContent}
        </p>

        {url && <Link to={url} className={styles.link}>{linkText}</Link>}
      </div>
      
    </div>
  )
}

export default Intro;