
var botaoExcluir = document.querySelectorAll(".paginalistagem-botao-excluir");

function confirma(event) {
    if(confirm("Deseja realmente apagar o registro?")) {
        event.target.parentNode.parentNode.classList.add("fadeOut");
    } else {
        return false;
    }
    }

botaoExcluir.forEach( ( botao ) => {
 
    botao.addEventListener("click", (event) => {
        confirma(event)
    } );
        
} )

setTimeout(function() {
    event.target.parentNode.parentNode.remove();
}, 500);





/*OUTRAS MANEIRAS:

for (let button of botaoExcluir) {
 
button.addEventListener("click", function(event) {
    event.target.parentNode.parentNode.classList.add("fadeOut");
});
}

setTimeout(function() {
    event.target.parentNode.parentNode.remove();
}, 500);*/

// Outra forma de fazer:

/*var botaoExcluir = document.querySelector(".paginalistagem-botao-excluir");

botaoExcluir.addEventListener("click", function(event) {
    event.target.parentNode.parentNode.classList.add("fadeOut");
})

setTimeout(function() {
    event.target.parentNode.parentNode.remove();
}, 500);*/




