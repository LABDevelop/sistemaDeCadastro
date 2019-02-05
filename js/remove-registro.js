var botaoExcluir = document.querySelector(".paginalistagem-botao-excluir");

botaoExcluir.addEventListener("click", function(event) {
    event.target.parentNode.parentNode.classList.add("fadeOut");
})

setTimeout(function() {
    event.target.parentNode.parentNode.remove();
}, 500);

