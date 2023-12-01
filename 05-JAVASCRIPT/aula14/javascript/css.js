let div_teste = document.querySelector('.teste');
div_teste.style.backgroundColor = 'blue';

let div2 = document.querySelector('#div1');
div2.classList.add('teste1');
if(div2.classList.contains('teste1')){
    console.log("Contém teste1");
}else{
    console.log("Não contém teste1");
}
div2.classList.remove('teste1');

// toggle adiciona classes se a classe não existe e remove classe caso ela exista
div2.classList.toggle('teste1');