import { useState } from "react"
import MyButtonTitle from "./MyButtonTitle"

export default function MyButton(props) {
    const [isHovered, setIsHovered] = useState(false)

    const onClick = () => console.log("Bienvenue");
    const onMouseEnter = () => setIsHovered(true);
    const onMouseOut = () => setIsHovered(false);

    return (
        <button onClick={onClick} onMouseEnter={onMouseEnter} onMouseOut={onMouseOut}>
            <MyButtonTitle title={props.title} color={isHovered ? "#ff0000" : "#000000"} />
        </button>
    )
}