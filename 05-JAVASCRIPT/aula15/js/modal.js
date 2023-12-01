// passo 1: botao de abrir modal. Abrir somente o overlay na tela inteira.

function modal() {
    let overlay = document.querySelector('.overlay');
    overlay.classList.add('active');
}

let botao = document.querySelector('#abrir_modal');
botao.addEventListener('click', modal);

// passo 2 fazer conteiner do modal centraliazado horizontal. conteiner
// do contem cabeçalho, conteudo e rodapé
function fechar_modal() {
    let overlay = document.querySelector('.overlay');
    overlay.classList.remove('active');
}

let close = document.querySelector('.container .header .close');
close.addEventListener('click', fechar_modal);