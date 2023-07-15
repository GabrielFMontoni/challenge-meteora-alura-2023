async function consomeApi(){
    try{
    const conexao = await fetch("http://localhost:3000/produtos")
    const conexaoConvertida = await conexao.json()
    
    return conexaoConvertida;
    }
    catch{
        alert('Não foi possível conectar a API')
    }
}

async function buscarProduto(termoPesquisa){
    try{
    const conexao = await fetch(`http://localhost:3000/produtos?q=${termoPesquisa}`)
    const conexaoConvertida = await conexao.json()
    return conexaoConvertida
    }
    catch{
        alert('Não foi possível conectar a API')
    }
}

export const consumirApi = {
    consomeApi, buscarProduto
}