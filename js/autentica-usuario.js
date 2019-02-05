var login1 = "admin";
var senha1 = "admin";

var campoLogin = document.querySelector("#paginaLogin-usuario");

var campoSenha = document.querySelector("#paginaLogin-senha");

function autenticaUsuario() {
    if (login1 == campoLogin.value && senha1 == campoSenha.value) {
        //window.location.href = "./listagem.html";
        novaAba("./listagem.html");        
    } else {
        alert("Login ou senha inválidos!");
    }
    campoLogin.value = "";
    campoSenha.value = "";
}

function novaAba(url) {
   var win = window.open(url, '_self');
    win.focus();
}

var botao = document.querySelector("#paginaLogin-botao");

botao.onclick = autenticaUsuario;




