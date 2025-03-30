export function setupSelect(id, maxValue, defaultValue) {
  const select = document.getElementById(id);
  select.innerHTML = "";
  for (let i = 1; i <= maxValue; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    select.appendChild(option);
  }
  select.value = defaultValue;
}
