const campoBusca = document.getElementById("busca");
const cartoes = document.querySelectorAll(".cartao");
const mensagemVazia = document.getElementById("mensagem-vazia");
campoBusca.addEventListener("input", function () {
    const pesquisa = campoBusca.value
        .trim()
        .toLowerCase();
    let encontrados = 0;
    cartoes.forEach(function (cartao) {
        const conteudo = cartao.textContent.toLowerCase();
        const corresponde = conteudo.includes(pesquisa);
        cartao.hidden = !corresponde;
        if (corresponde) {
            encontrados++;
        }
    });
    mensagemVazia.hidden = encontrados > 0;
});