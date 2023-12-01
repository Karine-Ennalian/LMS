function foi_clicado(){
    console.log("deu bom!");
}

function mudar_div(){
    let div = document.querySelector(".teste");
    div.classList.toggle('active');
}

function acordeon(){
    let acordeonAlt = document.querySelector(".acordeonDiv");
    acordeonAlt.classList.toggle('acordeonAlterado');
}

let botao2 = document.querySelector("#botao2");
botao2.addEventListener("click", acordeon);

// let botao3 = document.querySelector("#botao3");
// botao3.addEventListener("click", foi_clicado);

let botao3 = document.querySelector("#botao3");
botao3.addEventListener("click", mudar_div);

// ACORDEON SIMPLES

function alternar_conteudo() {
    let conteudo = document.querySelector(".accordion .section .conteudo");
    conteudo.classList.toggle('active');
}

let titulo = document.querySelector("accordion .section .titulo");
titulo.addEventListener("click", alternar_conteudo);