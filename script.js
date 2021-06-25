var hamburguer = document.querySelector(".hamburguer");
// document.querySelector(CSS) serve para buscar um elemento do mundo HTML e trazê-lo para o mundo JavaScript para que possamos manipulá-lo. A função recebe um parâmetro  CSS, neste caso a classe .hamburguer.

hamburguer.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu");
});

//AddEventListener é utilizado para adicionar eventos em elementos HTML. Em tempo de execução, você pode utilizar esta função para dizer o que vai acontecer quando o usuário clicar em um botão


const qtde = document.querySelector("#qtde").addEventListener("change", atualizarPreco) //Sempre que acontecer um click em #qtde, vai atualizar a caixa de texto

document.querySelector("#js").addEventListener("change", atualizarPreco)

function atualizarPreco() {

    const qtde = document.querySelector("#qtde").value
    const temJS = document.querySelector("#js").checked
    let preco = qtde * 100;
    if(temJS) preco  {
        preco = preco + (preco * 10/100)
    }
    document.querySelector("#preco").innerHTML ="R$ " + preco.toFixed(2)
}
//document.querySelector("#qtde"): Retorna o elemento HTML, ou no nosso caso nossa caixa de texto.

//value:Diferente do comando de cima, esse comando, pega o valor digitado na caixa de texto