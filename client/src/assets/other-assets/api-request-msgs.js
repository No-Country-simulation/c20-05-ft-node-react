export const ERROR_STATUS_CODE_DEFAULT = 400;

export const API_REQUEST_MSGS = {
  reviews: {
    successStatus: {
      200: {
        message: "Los datos de las reseñas han sido obtenidos correctamente",
      },
      201: {
        message: "La reseña ha sido creada correctamente",
      },
      204: {
        message: "La reseña ha sido eliminada correctamente",
      },
    },
    errorStatus: {
      400: {
        message: "La reseña no ha sido creada, por favor intenta nuevamente",
      },
      404: {
        message:
          "La reseña no ha sido encontrada, por favor intenta nuevamente",
      },
      500: {
        message:
          "Problema con el servidor, en un momento resolveremos los inconvenientes",
      },
    },
  },
  test: {
    successStatus: {
      200: {
        message: "Los datos de las reseñas han sido obtenidos correctamente",
      },
      201: {
        message: "La reseña ha sido creada correctamente",
      },
      204: {
        message: "La reseña ha sido eliminada correctamente",
      },
      400: {
        message:
          "Problema con el servidor, en un momento resolveremos los inconvenientes",
      },
    },
    errorStatus: {
      400: {
        message: "La reseña no ha sido creada, por favor intenta nuevamente",
      },
      404: {
        message:
          "La reseña no ha sido encontrada, por favor intenta nuevamente",
      },
      500: {
        message:
          "Problema con el servidor, en un momento resolveremos los inconvenientes",
      },
    },
  },
  register: {
    successStatus: {
      200: {
        message: "Los datos de las reseñas han sido obtenidos correctamente",
      },
      201: {
        message: "La reseña ha sido creada correctamente",
      },
      204: {
        message: "La reseña ha sido eliminada correctamente",
      },
      400: {
        message:
          "Problema con el servidor, en un momento resolveremos los inconvenientes",
      },
    },
    errorStatus: {
      400: {
        message: "La reseña no ha sido creada, por favor intenta nuevamente",
      },
      404: {
        message:
          "La reseña no ha sido encontrada, por favor intenta nuevamente",
      },
      500: {
        message:
          "Problema con el servidor, en un momento resolveremos los inconvenientes",
      },
    },
  },
  login: {
    successStatus: {
      200: {
        message: "El inicio de sesión ha sido exitoso",
      },
      201: {
        message: "La reseña ha sido creada correctamente",
      },
      204: {
        message: "La reseña ha sido eliminada correctamente",
      },
      400: {
        message:
          "Problema con el servidor, en un momento resolveremos los inconvenientes",
      },
    },
    errorStatus: {
      400: {
        message: "La reseña no ha sido creada, por favor intenta nuevamente",
      },
      404: {
        message:
          "La reseña no ha sido encontrada, por favor intenta nuevamente",
      },
      500: {
        message:
          "Problema con el servidor, en un momento resolveremos los inconvenientes",
      },
    },
  },
};
