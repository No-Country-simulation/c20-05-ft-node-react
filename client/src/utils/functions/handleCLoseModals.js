export const handleCloseModalClick = (event, onClose) => {
  if (event.target === event.currentTarget) {
    onClose();
  }
};
