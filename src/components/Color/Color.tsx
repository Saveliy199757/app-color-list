import StarRating from "../StarRating";
import {ColorData} from "../../interfaces/ColorData";
import {FaTrash} from "react-icons/fa";

interface IProps {
    colors: ColorData,
    onRemove: (id: string) => void
}

export default function Color({ colors: { title, color, rating, id }, onRemove}: IProps) {
    return (
        <section>
            <h1>{title}</h1>
            <button onClick={() => onRemove(id)}>
                <FaTrash />
            </button>
            <div style={{ height: 50, backgroundColor: color }} />
            <StarRating selectedStars={rating} />
        </section>
    );
}