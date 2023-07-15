import {
    consumirApi
} from "./consumindoApi.js";

const modal = document.querySelector('.modal')
const produtosListar = document.querySelector('[data-produtos]')


export function constroiProduto(imgDesktop, imgTablet, imgMobile, titulo, descricao, preco) {
    const produtoItem = document.createElement("li")
    produtoItem.className = "produtos__item"
    produtoItem.innerHTML += `
    <picture>
    <source srcset="${imgDesktop}" media="(min-width:1200px)">
    <source srcset="${imgTablet}" media="(min-width:768px)">
    <img src="${imgMobile}" class="produtos__imagem"
        alt="${titulo}">

</picture>
<div class="produtos__caixa_texto">
    <h3 class="produtos__subtitulo">${titulo}</h3>
    <p class="produtos__texto">${descricao}</p>

    <h3 class="produtos__preco">${preco}</h3>
    <button href="#" class="produtos__botao">Ver mais</button>
</div>
`
    let imagemDiv = produtoItem.querySelector('.produtos__imagem')
    const botao = produtoItem.querySelector('.produtos__botao');
    botao.addEventListener('click', ()=>{
        chamaModal(imagemDiv, titulo, descricao, preco)
        modal.showModal()
    })
return produtoItem
}

function chamaModal(imagem, titulo, descricao, preco){
    let caminhoCompleto = imagem.currentSrc
    let posicaoImg = caminhoCompleto.indexOf("img");
    let caminhoCerto = caminhoCompleto.substring(posicaoImg, caminhoCompleto.length);
    document.querySelector('#imagemModal').src = `${caminhoCerto}`;
    document.querySelector('#modal__produto').innerHTML = titulo
    document.querySelector('#modal__texto__produto').innerHTML = descricao
    document.querySelector('#modal__preco__produto').innerHTML = preco
   
}

async function listarProdutos() {
    try{
    const listaDeProdutos = await consumirApi.consomeApi();
     listaDeProdutos.forEach(produto => produtosListar.appendChild(constroiProduto(produto.imgDesktop, produto.imgTablet,produto.imgMobile,produto.titulo,produto.descricao,produto.preco)))
    }
    catch(e){
        alert(e)
    }
    
}
listarProdutos()

