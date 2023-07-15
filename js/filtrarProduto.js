import { consumirApi } from "./consumindoApi.js"
import { constroiProduto } from "./mostrarProdutos.js"
const formulario = document.querySelector('[data-pesquisa-formulario]')
const categorias = document.querySelectorAll('[data-categoria]')
const produtosListar = document.querySelector('[data-produtos]')
let categoriaFiltrada = ''
formulario.addEventListener('submit',(e) => filtrarPesquisa(e))

categorias.forEach(categoria => categoria.addEventListener('click', (e) => {
    const tipoCategoria = categoria.querySelector('.categorias__subtitulos').textContent
    filtrarCategorias(e, tipoCategoria)
}))


async function filtrarPesquisa(e){
    try{
    e.preventDefault()
const pesquisaValor = document.querySelector('[data-pesquisa]').value
const busca = await consumirApi.buscarProduto(pesquisaValor)

produtosListar.innerHTML = ''

busca.forEach(produto => produtosListar.appendChild(constroiProduto(produto.imgDesktop, produto.imgTablet,produto.imgMobile,produto.titulo,produto.descricao,produto.preco)))
    }
    catch(e){
        alert(e)
    }
}

async function filtrarCategorias(e, tipoCategoria){
    try{
    e.preventDefault()
   
    if(tipoCategoria==categoriaFiltrada){
        const busca = await consumirApi.buscarProduto('')
        produtosListar.innerHTML = ''
        busca.forEach(produto => produtosListar.appendChild(constroiProduto(produto.imgDesktop, produto.imgTablet,produto.imgMobile,produto.titulo,produto.descricao,produto.preco)))
    }else{
    categoriaFiltrada = tipoCategoria
    const busca = await consumirApi.buscarProduto(tipoCategoria)
    console.log(busca)
    
    produtosListar.innerHTML = ''
    busca.forEach(produto => produtosListar.appendChild(constroiProduto(produto.imgDesktop, produto.imgTablet,produto.imgMobile,produto.titulo,produto.descricao,produto.preco)))
    }
}
catch(e){
    alert(e)
}
}