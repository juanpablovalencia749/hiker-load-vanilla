import { createListItem } from "../components/ListItem.js";

export function updateResults(elements, selectedItems) {
  const resultList = document.querySelector(".items");
  resultList.innerHTML = "";

  elements.forEach((item) => {
    const li = createListItem(item, selectedItems);
    resultList.appendChild(li);
  });
}
