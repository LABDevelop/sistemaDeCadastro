
var botaoExcluir = document.querySelectorAll(".paginalistagem-botao-excluir");

for (const button of botaoExcluir) {
 
button.addEventListener("click", function(event) {
    event.target.parentNode.parentNode.classList.add("fadeOut");
});
}

setTimeout(function() {
event.target.parentNode.parentNode.remove();
}, 500);


/*var botaoExcluir = document.querySelector(".paginalistagem-botao-excluir");

botaoExcluir.addEventListener("click", function(event) {
    event.target.parentNode.parentNode.classList.add("fadeOut");
})

setTimeout(function() {
    event.target.parentNode.parentNode.remove();
}, 500);*/