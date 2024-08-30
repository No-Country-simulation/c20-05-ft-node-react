export const openToggleAccordion = (id, setOpenAccordions) => {
  setOpenAccordions((prev) => {
    if (prev.includes(id)) {
      return prev.filter((accordionId) => accordionId !== id); // Cierra si ya está abierto
    } else {
      if (prev.length >= 2) {
        // Solo permite dos abiertos al mismo tiempo
        return [...prev.slice(1), id]; // Reemplaza el más antiguo
      }
      return [...prev, id];
    }
  });
};
