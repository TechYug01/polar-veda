import { Star, StarHalf } from "lucide-react";

const renderStars = (rating: number) => {
  const stars = [];
  const full = Math.floor(rating);
  const half = rating % 1 !== 0;
  const total = 5;

  for (let i = 0; i < full; i++) {
    stars.push(
      <Star
        key={`full-${i}`}
        className="h-4 w-4 fill-yellow-400 text-yellow-500"
      />,
    );
  }

  if (half) {
    stars.push(
      <StarHalf
        key="half"
        className="h-4 w-4 fill-yellow-400 text-yellow-500"
      />,
    );
  }

  for (let i = stars.length; i < total; i++) {
    stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />);
  }

  return <div className="mb-3 flex justify-center">{stars}</div>;
};

export default renderStars;
