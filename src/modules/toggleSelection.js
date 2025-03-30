import { updateButtonState } from "../utils/updateButton.js";
import { clearMessageBox } from "../components/MessageBox.js";

export function toggleSelection(element, item, selectedItems) {
  if (selectedItems.has(item)) {
    selectedItems.delete(item);
    element.classList.remove("selected");
  } else {
    selectedItems.add(item);
    element.classList.add("selected");
  }

  clearMessageBox();
  updateButtonState(selectedItems);
}
