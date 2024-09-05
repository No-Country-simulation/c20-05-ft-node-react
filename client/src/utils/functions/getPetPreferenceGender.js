export const getPetBreedGenderPreference = (preferencePet) => {
  const dataGenderYTipePet = {
    dog: "",
    cat: "",
  };

  preferencePet.forEach((element) => {
    const genderFormatted = element.gender;
    const petType = element.pet === "Gato" ? "gatos" : "perros";

    dataGenderYTipePet[
      element.pet === "Gato" ? "cat" : "dog"
    ] = `Le gusta cuidar ${petType} ${genderFormatted}`;
  });

  return dataGenderYTipePet;
};
