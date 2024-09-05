export const formatDate = (dateString, language ) => {
  // Opciones para mostrar día, mes completo, y año
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(dateString);

  // Verificar si la fecha es válida
  if (isNaN(date.getTime())) {
    return "Fecha inválida";
  }

  // Configurado para formato basado en el idioma proporcionado
  return date.toLocaleDateString(language, options);
};
