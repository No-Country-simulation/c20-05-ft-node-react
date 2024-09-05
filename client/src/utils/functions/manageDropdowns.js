export const manageDropdowns = (index, setOpenDropdowns) => {
  setOpenDropdowns((prevState) => {
    const newOpenDropdowns = [...prevState];

    if (newOpenDropdowns.includes(index)) {
      return newOpenDropdowns.filter((i) => i !== index);
    } else {
      // Abrir dropdown y cerrar los anteriores si hay más de 2
      if (newOpenDropdowns.length >= 2) {
        return newOpenDropdowns.slice(1).concat(index);
      } else {
        return [...newOpenDropdowns, index];
      }
    }
  });
};
