document.getElementById("btn").addEventListener("click", function() {
  let nome = document.getElementById("nome").value;

  document.getElementById("resultado").textContent =
    "Olá, " + nome + "!";
});