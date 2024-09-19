import axiosInstace from "../functions/axiosInstance";
import { API_PATH_BEST_REVIEWS } from "../../routes/routes";
import { API_REQUEST_MSGS } from "../../assets/other-assets/api-request-msgs";
import { handlerApiRequest } from "../functions/handlerApiRequest";

export const reviewsHome = async () => {
  const { status, data, message } = await handlerApiRequest(axiosInstace.get(API_PATH_BEST_REVIEWS), API_REQUEST_MSGS.reviews)
  return { status, data, message }
}