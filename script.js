const imagens = document.querySelectorAll("#galeria li img");

function galeriaTrocar(event) {
  const principal = document.querySelector("#imagem-principal");
  const clicada = event.currentTarget;
  principal.src = clicada.src;
  principal.setAttribute("alt", clicada.getAttribute("alt"));
  console.log(clicada.src);
}

function galeriaClique(imagem) {
  imagem.addEventListener("click", galeriaTrocar);
}

imagens.forEach(galeriaClique);
