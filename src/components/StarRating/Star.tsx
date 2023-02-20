import { FaStar } from "react-icons/fa";

interface IProps {
  selected: boolean,
  onSelect: () => void,
}
function Star ({ selected = false, onSelect }: IProps) {
  return (
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
  )
}

export default Star;