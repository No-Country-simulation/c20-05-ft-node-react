export const getPetsCaretaker = (petsCuidador) => {
  const petQuantity = {
    dog: 0,
    cat: 0,
  };
  petsCuidador.forEach((element) => {
    element.pet === "Perro"
      ? (petQuantity.dog += 1)
      : element.pet === "Gato"
      ? (petQuantity.cat += 1)
      : "";
  });
  return petQuantity;
};
