var hamburguer = document.querySelector(".hamburguer");
// document.querySelector(CSS) serve para buscar um elemento do mundo HTML e trazê-lo para o mundo JavaScript para que possamos manipulá-lo. A função recebe um parâmetro  CSS, neste caso a classe .hamburguer.

hamburguer.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu");
});

//AddEventListener é utilizado para adicionar eventos em elementos HTML. Em tempo de execução, você pode utilizar esta função para dizer o que vai acontecer quando o usuário clicar em um botão