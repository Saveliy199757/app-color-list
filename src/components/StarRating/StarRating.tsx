import { useState } from "react";
import Star from "./Star";

export default function StarRating({ style = {} ,totalStars = 5, ...props }) {
  const [selectedStars, setSelectedStars] = useState(3);
  return (
    <div style={{ padding: 5, ...style }} {...props}>
      {new Array(totalStars).fill("").map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
}
