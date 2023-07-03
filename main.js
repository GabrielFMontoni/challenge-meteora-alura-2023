const botoes = document.querySelectorAll(".produtos__botao")
const imagens = document.querySelectorAll('.produtos__imagem');
const subtitulo = document.querySelectorAll('.produtos__subtitulo')
const preco = document.querySelectorAll('.produtos__preco')
const texto = document.querySelectorAll('.produtos__texto')
const modal = document.querySelector('.modal')
const modalNewsletter = document.querySelector('.modal__newsletter')
const botaoNewsletter = document.querySelector('.newsletter__botao')

const closeModalBtn = document.querySelectorAll('.close')

closeModalBtn[1].addEventListener('click', () => modal.close());
closeModalBtn[0].addEventListener('click', () => modalNewsletter.close());

for (let i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener('click', () => {
      chamaModal(imagens[i], subtitulo[i], preco[i], texto[i]);
      modal.showModal();
    });
    botaoNewsletter.addEventListener('click', ()=> modalNewsletter.showModal())

  }

function chamaModal(imagem,sub,precoProduto, text){
    let caminhoCompleto = imagem.currentSrc
    let posicaoImg = caminhoCompleto.indexOf("img");
    let caminhoCerto = caminhoCompleto.substring(posicaoImg, caminhoCompleto.length);

    document.querySelector('#imagemModal').src = `${caminhoCerto}`;
    document.querySelector('#modal__produto').innerHTML = sub.innerHTML
    document.querySelector('#modal__texto__produto').innerHTML = text.innerHTML
    document.querySelector('#modal__preco__produto').innerHTML = precoProduto.innerHTML

}