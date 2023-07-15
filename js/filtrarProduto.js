import {
    constroiProduto
} from "./mostrarProdutos.js"

const formulario = document.querySelector('[data-pesquisa-formulario]')
const categorias = document.querySelectorAll('[data-categoria]')
const produtosListar = document.querySelector('[data-produtos]')
let categoriaFiltrada = ''
formulario.addEventListener('submit', (evento) => {
    const pesquisaValor = document.querySelector('[data-pesquisa]').value.toLowerCase()
    filtrarProdutos(evento, pesquisaValor)
})

categorias.forEach(categoria => categoria.addEventListener('click', (e) => {
    const tipoCategoria = categoria.querySelector('.categorias__subtitulos').textContent.toLowerCase()
    filtrarProdutos(e, tipoCategoria)
}))

function filtrarProdutos(e, tipoCategoria) {
    try {
        if (categoriaFiltrada == tipoCategoria) {
            tipoCategoria = ''
        }
            e.preventDefault()
            produtosListar.innerHTML = ''
            const produtosFiltrados = produtos.filter(produto => produto.categoria.includes(tipoCategoria))
            produtosFiltrados.forEach(produto => produtosListar.appendChild(constroiProduto(produto.imgDesktop, produto.imgTablet, produto.imgMobile, produto.titulo, produto.descricao, produto.preco)))
            categoriaFiltrada = tipoCategoria
        
    } catch {
        alert("Não foi possível filtrar os produtos")
    }
}