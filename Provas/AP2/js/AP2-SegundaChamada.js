let cards = document.querySelectorAll(".message-slider");
let seta_esquerda = document.querySelector(".message-slider .seta-esquerda");
let seta_direita = document.querySelector(".message-slider .seta-direita");

let card_atual = 0;

function criarMessages(messages) {
    for(let message of messages){
        let div_message = document.createElement("div");
        div_message.classList.add("message");

        let div_seta_esquerda = document.createElement("div");
        div_seta_esquerda.classList.add("seta-esquerda");

        let div_titulo = document.createElement("div");
        div_titulo.classList.add("title");
        let text_titulo = document.createTextNode(message.title);
        div_titulo.appendChild(text_titulo);
        div_message.appendChild(div_titulo);

        let div_corpo = document.createElement("div");
        div_corpo.classList.add("corpo");
        
        let text_corpo = document.createTextNode(message.body);
        div_corpo.appendChild(text_corpo);
        div_message.appendChild(div_corpo);

        let div_seta_direita = document.createElement("div");
        div_seta_direita.classList.add("seta-direita");

        message.append(div_message);
    }
}

function passar_card() {
    cards[card_atual].className = "card meio-esquerda";
    card_atual += 1;
    card_atual = card_atual % slides.length;

    cards[card_atual].className = "card direita-meio";
    console.log(card_atual);
}

seta_direita.addEventListener("click", passar_card);

function voltar_card() {
    cards[card_atual].className = "card meio-direita";

    card_atual -= 1;
    if (card_atual < 0) {
        card_atual = cards.length - 1;
    }
    cards[card_atual].className = "card esquerda-meio";
}

seta_esquerda.addEventListener("click", voltar_card);

let request = async () =>{
    axios({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/posts?userId=1",
    }).then(
        function(response){
            criarMessages(response.data);
        }
    ).catch(
        function(error){
            console.log(error);
        }
    )
}

request();