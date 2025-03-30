import { updateMessageBox } from "../components/MessageBox.js";

export function calculate(elements, selectedItems) {
  const minCalories = parseInt(document.getElementById("minCalories").value);
  const maxWeight = parseInt(document.getElementById("maxWeight").value);
  const messageBox = document.querySelector(".message");

  let totalCalories = 0;
  let totalWeight = 0;

  selectedItems.forEach((item) => {
    totalCalories += item.calories;
    totalWeight += item.weight;
  });

  updateMessageBox(
    messageBox,
    totalCalories,
    totalWeight,
    minCalories,
    maxWeight
  );
}
