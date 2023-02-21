import Color from "../Color";
import {ColorData} from "../../interfaces/ColorData";

interface IProps {
    colors: ColorData[],
    onRemoveColor: (id: string) => void
}
export default function ColorList({ colors = [], onRemoveColor }: IProps) {
    if(!colors.length) return <div>No Colors Listed.</div>;
    return (
        <div>
            {
                colors.map(color => <Color key={color.id} colors={color} onRemove={onRemoveColor} />)
            }
        </div>
    );
}