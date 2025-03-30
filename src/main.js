import { setupSelect } from "./utils/setupSelect.js";
import { updateResults } from "./modules/updateResults.js";
import { calculate } from "./modules/calculate.js";

let selectedItems = new Set();

document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("/data.json");
  const elements = await response.json();

  const maxCalories = elements.reduce((sum, item) => sum + item.calories, 0);
  const maxWeight = elements.reduce((sum, item) => sum + item.weight, 0);

  setupSelect("minCalories", maxCalories, 15);
  setupSelect("maxWeight", maxWeight, 10);

  updateResults(elements, selectedItems);

  const calculateButton = document.querySelector(".button");
  calculateButton.disabled = true;

  calculateButton.addEventListener("click", () =>
    calculate(elements, selectedItems)
  );
});
