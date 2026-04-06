let idade = 17;
let mensagem;

if (idade >= 18) {
  mensagem = "Pode entrar";
} else {
  mensagem = "Nao pode entrar";
}

document.getElementById("resultado").textContent = mensagem;
