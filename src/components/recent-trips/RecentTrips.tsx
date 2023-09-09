import styles from "./RecentTrips.module.css";

import trip1 from "../../assets/2.jpg";
import trip2 from "../../assets/5.jpg";
import trip3 from "../../assets/9.jpg";
import trip4 from "../../assets/11.jpg";

interface CardProps {
    image: string;
    header: string;
    text: string;
}

const datas = [
    {
        country: "Egypt",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, odio velit debitis dolore atque minima tempora? Numquam, ab sit dolor aliquam quis natus totam dolore quasi, cum placeat consequatur laboriosam! Nostrum impedit quia blanditiis nesciunt officiis sunt omnis et ipsum rerum debitis. Sunt error nam voluptatibus eos, aperiam corporis inventore iste minus maiores sapiente id unde dolorum commodi laudantium vero dignissimos maxime fuga ipsum placeat?",
        image: trip1
    },
    {
        country: "Kenya",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, odio velit debitis dolore atque minima tempora? Numquam, ab sit dolor aliquam quis natus totam dolore quasi, cum placeat consequatur laboriosam! Nostrum impedit quia blanditiis nesciunt officiis sunt omnis et ipsum rerum debitis. Sunt error nam voluptatibus eos, aperiam corporis inventore iste minus maiores sapiente id unde dolorum commodi laudantium vero dignissimos maxime fuga ipsum placeat?",
        image: trip2
    },
    {
        country: "St. Kitts & Nevis",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit reprehenderit suscipit rerum, consectetur, nam delectus quasi aut corrupti sed reiciendis, laborum mollitia inventore accusantium alias architecto et odio perspiciatis. A, sapiente, expedita similique modi qui earum veniam minus, ullam veritatis numquam porro quia quisquam maiores iste quibusdam! Iste dolores at voluptatibus dolorum iusto tempora ut, excepturi et ad nostrum numquam facilis porro sit, aliquam veniam illo provident, quasi eius a repudiandae nisi consequatur aut. Eveniet iure aperiam culpa dolorum non quod repellat iusto aliquam magnam hic quibusdam ad impedit, id, labore ducimus porro? Rerum cumque totam quia fugit debitis error!",
        image: trip3
    },
    {
        country: "Kyrgyzstan",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quibusdam recusandae voluptate expedita dolor quos! Dolorum nisi voluptates dolor harum nemo, voluptatibus deleniti maiores fugiat. Fugiat at quam pariatur alias aut? Consequuntur iure accusantium delectus facilis ducimus qui excepturi distinctio quidem quae quaerat aut pariatur blanditiis, commodi magni ab laborum consectetur iusto reiciendis itaque ut amet voluptate soluta! Nobis laboriosam itaque suscipit obcaecati animi voluptatum dolorem, distinctio corporis repellat quae vero alias amet ea eos quis at quibusdam. Doloremque iste rem eaque quam.",
        image: trip4
    },
]

const RecentTrips = () => {
    return (
        <div className={styles.trips}>
            <h1>Recent Trips</h1>
            <p>
                You can discover unique destinations using maps!
            </p>

            <div className={styles.hold}>
                {
                    datas.map(
                        (item, idx) => (
                            <Card
                                header={`trip to ${item.country}`}
                                image={item.image}
                                key={idx}
                                text={item.text}
                            />
                        )
                    )
                }
            </div>
        </div>
    )
}

const Card = ({ text, image, header }: CardProps) => (
    <div className={styles.card}>
        <div className={styles.image}>
            <img src={image} alt="" />
        </div>

        <h4>
            {header}
        </h4>
        <p>{text.slice(0, 300)} ...</p>
    </div>
)

export default RecentTrips