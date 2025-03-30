export function updateButtonState(selectedItems) {
  const calculateButton = document.querySelector(".button");
  calculateButton.disabled = selectedItems.size === 0;
}
