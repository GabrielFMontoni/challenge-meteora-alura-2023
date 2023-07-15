async function consomeApi(){
  try{
  const conexao = await fetch("../db.json")
  produtos = await conexao.json()
  return produtos;
  }
  catch{
      alert('Não foi possível conectar a API')
  }
}

export const consumirApi = {
  consomeApi
}
