const botoes = document.querySelectorAll(".produtos__botao")
const imagens = document.querySelectorAll('.produtos__imagem');
const subtitulo = document.querySelectorAll('.produtos__subtitulo')
const preco = document.querySelectorAll('.produtos__preco')
const texto = document.querySelectorAll('.produtos__texto')
const modal = document.querySelector('.modal')
const modalNewsletter = document.querySelector('.modal__newsletter')
const botaoNewsletter = document.querySelector('.newsletter__botao')
const formularioNewsletter = document.querySelector('[data-formulario]')

const closeModalBtn = document.querySelectorAll('.close')

closeModalBtn[1].addEventListener('click', () => modal.close());
closeModalBtn[0].addEventListener('click', () => modalNewsletter.close());




  formularioNewsletter.addEventListener('submit', (event)=>{
    event.preventDefault()
    modalNewsletter.showModal()
    
  })
