export const dateFormatToSpanish = (dateToFormat) => dateToFormat.toLocaleString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit', }).replace(/\//g, '-')
export const getCurrentDay = () => new Date().toLocaleDateString('sv-SV')