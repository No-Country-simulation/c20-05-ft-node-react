import axiosInstace from "../functions/axiosInstance";
import { API_PATH_BEST_REVIEWS } from "../../routes/routes";

export const reviewsHome = async () => {
  try {
    const reviewsData = await axiosInstace.get(API_PATH_BEST_REVIEWS);

    return reviewsData.status === 200
      ? reviewsData.data
      : {
          message:
            "Problema con el servidor, en un momento resolveremos los inconvenientes",
        };
  } catch {
    return { message: "Error al comunicarse con el servidor" };
  }
};
