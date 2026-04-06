function calcularMedia(n1, n2) {
  return (n1 + n2) / 2;
}

let media = calcularMedia(7, 9);

document.getElementById("resultado").textContent =
  "Média: " + media;
