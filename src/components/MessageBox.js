export function updateMessageBox(
  messageBox,
  totalCalories,
  totalWeight,
  minCalories,
  maxWeight
) {
  let message = "";
  let color = "green";

  const condition = (() => {
    if (totalCalories < minCalories && totalWeight > maxWeight)
      return "lowCaloriesHighWeight";
    if (totalCalories < minCalories) return "lowCalories";
    if (totalWeight > maxWeight) return "highWeight";
    return "allGood";
  })();

  switch (condition) {
    case "lowCaloriesHighWeight":
      message = `
        ⚠️ <strong>No cumple los requisitos:</strong> <br>
        - Calorías: <strong>${totalCalories} kcal</strong> (mínimo requerido: <strong>${minCalories} kcal</strong>) <br>
        - Peso: <strong>${totalWeight} kg</strong> (máximo permitido: <strong>${maxWeight} kg</strong>)
      `;
      color = "red";
      break;

    case "lowCalories":
      message = `
        ⚠️ <strong>No cumple los requisitos:</strong> <br>
        - Calorías: <strong>${totalCalories} kcal</strong> (mínimo requerido: <strong>${minCalories} kcal</strong>)
      `;
      color = "red";
      break;

    case "highWeight":
      message = `
        ⚠️ <strong>No cumple los requisitos:</strong> <br>
        - Peso: <strong>${totalWeight} kg</strong> (máximo permitido: <strong>${maxWeight} kg</strong>)
      `;
      color = "red";
      break;

    case "allGood":
      message = `
        ✅ <strong>Todo en orden:</strong> <br>
        - Peso: <strong>${totalWeight} kg</strong> (máximo permitido: <strong>${maxWeight} kg</strong>) <br>
        - Calorías: <strong>${totalCalories} kcal</strong> (mínimo requerido: <strong>${minCalories} kcal</strong>)
      `;
      break;

    default:
      message = "Error: Condición desconocida.";
      color = "red";
      break;
  }

  messageBox.innerHTML = message;
  messageBox.style.color = color;
}

export function clearMessageBox() {
  const messageBox = document.querySelector(".message");
  if (messageBox) {
    messageBox.innerHTML = "";
    messageBox.style.color = "";
  }
}
