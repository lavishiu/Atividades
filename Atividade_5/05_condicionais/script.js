let lista = document.getElementById("lista");

for (let i = 1; i <= 5; i++) {
  let item = document.createElement("li");
  item.textContent = "Numero " + i;
  lista.appendChild(item);
}
