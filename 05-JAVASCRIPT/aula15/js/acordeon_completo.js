function alternar_conteudo() {
    // fechar todos os conteudos antes de abrir o correto
    let conteudos = document.querySelectorAll('.accordion .section .conteudo');
    for(let conteudo of conteudos){
        conteudo.classList.remove("active");
    }
    let conteudo_irmao = this.nextElementSibling;
    conteudo_irmao.classList.toggle("active");
}
// this contem o elementeo que gerou o evento de clique
console.log(this);
// console.log(this.nextElementSibiling);

let titulos =  document.querySelectorAll('.accordion .section .titulo');
console.log(titulos);

for(let titulo of titulos){
    titulo.addEventListener('click', alternar_conteudo);
}