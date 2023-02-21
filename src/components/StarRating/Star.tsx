import { FaStar } from "react-icons/fa";

interface IProps {
  selected: boolean,
}
function Star ({ selected = false }: IProps) {
  return (
    <FaStar color={selected ? "red" : "grey"} />
  )
}

export default Star;