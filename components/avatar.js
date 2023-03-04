import Image from "next/image";
export default function Avatar(props) {
    return (
        <span className={`avatar ${props.size ? props.size : ""}`}>
            <Image src={props.image} alt={props.des ? props.des : "Avatar"} width="40" height="40" />
        </span>
    );
}
