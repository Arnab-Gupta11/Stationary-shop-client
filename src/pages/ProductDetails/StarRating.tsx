import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const StarRating = ({ rating, starSize }: { rating: number; starSize: number }) => {
  const star = rating;
  const ratingStar = Array.from({ length: 5 }, (_, idx) => {
    const number = idx + 0.5;
    return (
      <span key={idx}>
        {star >= idx + 1 ? (
          <FaStar className="text-yellow-400" size={starSize} />
        ) : star >= number ? (
          <FaStarHalfAlt className="text-yellow-400" size={starSize} />
        ) : (
          <AiOutlineStar className="text-slate-500" size={starSize + 2} />
        )}
      </span>
    );
  });

  return (
    <div>
      <div className="flex items-center gap-1">{ratingStar}</div>
    </div>
  );
};

export default StarRating;
