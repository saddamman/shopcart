import { useEffect, useState } from "react";

const useRating = (rating) => {
  const [ratingStage, setRatingStage] = useState("text-bg-success");
  useEffect(() => {
    if (rating > 4) {
      setRatingStage("text-bg-success");
    } else if (rating >= 3.5) {
      setRatingStage("text-bg-warning");
    } else if (rating > 2.5) {
      setRatingStage("text-bg-primary");
    } else {
      setRatingStage("text-bg-danger"); // You can set a different value for "low" ratings if needed
    }
  }, [rating]);

  return {
    ratingStage,
  };
};

export default useRating;
