import { toggleSelection } from "../modules/toggleSelection.js";

export function createListItem(item, selectedItems) {
  const li = document.createElement("li");
  li.classList.add("item-box");
  li.dataset.id = item.id;

  li.innerHTML = `
    <div class="item-box__image-container">
      <img src="${item.img}" alt="${item.element}">
    </div>
    <p>${item.element}</p>
    <p><strong>Peso:</strong> ${item.weight} kg</p>
    <p><strong>Calorías:</strong> ${item.calories} kcal</p>
  `;

  li.addEventListener("click", () => {
    toggleSelection(li, item, selectedItems);
  });

  return li;
}
