//Esta funcion la usaren en preferencias de Cuidador y en algun otro lugar en la vista de Owner Profile
export const chekedSizeDog = (preferensPets) => {
  const dogSizes = [];
  const catSizes = [];

  preferensPets.forEach((element) => {
    if (element.pet.includes("Perro")) {
      dogSizes.push(...element.weigth);
    }
    if (element.pet.includes("Gato")) {
      catSizes.push(...element.weigth);
    }
  });

  const flattenedDogSizes = dogSizes.flat();
  const flattenedCatSizes = catSizes.flat();

  const sortedDogSizes = flattenedDogSizes.sort((a, b) => a - b);
  const sortedCatSizes = flattenedCatSizes.sort((a, b) => a - b);

  const caresForDogs = sortedDogSizes.length > 0;
  const caresForCats = sortedCatSizes.length > 0;

  return {
    caresForDogs,
    caresForCats,
    dogSizes: sortedDogSizes,
    catSizes: sortedCatSizes,
  };
};

//Estoy usando este funcion para aplicar filtro a los iconos de los perritos
export const filterClassImg = (
  { caresForCats, caresForDogs, dogSizes, catSizes },
  numSize
) => {
  const caresForPets = caresForCats || caresForDogs;

  const hasLargeSize =
    (dogSizes && dogSizes.some((size) => size > numSize)) ||
    (catSizes && catSizes.some((size) => size > numSize));

  if (caresForPets && hasLargeSize) {
    return "";
  } else {
    return "";
  }
};
