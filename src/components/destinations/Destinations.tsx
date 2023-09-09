import styles from "./Destinations.module.css";
import img1 from "../../assets/10.jpg";
import img2 from "../../assets/12.jpg";
import img3 from "../../assets/8.jpg";
import img4 from "../../assets/1.jpg";

interface DestProps {
    title: string;
    description: string;
    images: [string, string];
}

const Dest = ({ title, description, images }: DestProps) => (
    <div className={styles.destination}>
        <div className={styles.text}>
            <h2>{title}</h2>
            <p>
                {description}
            </p>
        </div>

        <div className={styles.image}>
            <img src={images[0]} alt="" />
            <img src={images[1]} alt="" />
        </div>
    </div>
);

const data = [
    {
        title: "Obudu Ranch, Akwa Ibom",
        description: "One of the most iconic destinations in the Niger Area, " +
            "Obudu Ranch offers modern day comfort and relaxation at very affordable rates. " +
            "It boasts of several ...",
        images: [img1, img2] as [string, string]
    },
    {
        title: "Saigele, Fiofioya" ,
        description: `If you're looking for a hike that's just a little more
            challenging, but still awesome for a beginner mountaineer, you'd find Saigele, Fiofioya
            very exciting. You'll begin your hike from the beach and pass through tropical forests,
            sedimentary rocks, as well as beautiful mini-streams. There's a kiosk halfway up the trail
            where you can take a break and drink some juice. Do I need to add that the breeze up there
            is superb! Once you've made it back down, move over to the beach for a refreshing swim!
        `,
        images: [img3, img4] as [string, string]
    }
]

const Destinations = () => {
  return (
    <div className={styles.wrapper}>
        <h1>Popular Destinations</h1>
        <p>
            Tours give you the opportunity to experience loads, within a limited time frame.
        </p>

        {
            data.map(
                (item, idx) => (
                    <Dest 
                        title={item.title} 
                        description={item.description}
                        images={item.images}
                        key={idx}
                    />
                )
            )
        }
    </div>
  );
}

export default Destinations;