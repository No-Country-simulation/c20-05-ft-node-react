import { reviewsHome } from "../../api/bestReviewsHome";

export const loadReviews = async (setDataReviews, setErrorReviews) => {
  const result = await reviewsHome();
  result.message ? setErrorReviews(result.message) : setDataReviews(result);
};
