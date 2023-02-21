import Star from "./Star";

export default function StarRating({ style = {} , totalStars = 5, selectedStars = 0, ...props }) {
  return (
    <div style={{ padding: 5, ...style }} {...props}>
      {new Array(totalStars).fill("").map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
}
