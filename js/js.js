// Defina um array para armazenar os produtos adicionados ao carrinho
let itensCarrinho = [];

// Adicionar um produto ao carrinho
function adicionarProduto(nome, preco) {
  itensCarrinho.push({ nome: nome, preco: preco });
  exibirCarrinho();
}

// Exibir os itens do carrinho e calcular o total
function exibirCarrinho() {
  const listaItens = document.getElementById("lista-itens");
  listaItens.innerHTML = "";
  let total = 0;
  for (let i = 0; i < itensCarrinho.length; i++) {
    const item = itensCarrinho[i];
    const li = document.createElement("li");
    li.innerHTML = `${item.nome}: R$ ${item.preco.toFixed(2)}`;
    listaItens.appendChild(li);
    total += item.preco;
  }
  const totalElemento = document.getElementById("total");
  totalElemento.innerText = total.toFixed(2);
}

// Limpar o carrinho
function limparCarrinho() {
  itensCarrinho = [];
  exibirCarrinho();
}



fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL').then(response => {
    return response.json()
}).then(economia => {
    console.log(economia)
    document.getElementById("dolar").value = economia.USDBRL.bid;
    document.getElementById("moeda").innerHTML = economia.USDBRL.code;

})




const preencherFormulario = (endereco) => {
  document.getElementById("rua").value = endereco.logradouro;
  document.getElementById("bairro").value = endereco.bairro;
  document.getElementById("cidade").value = endereco.localidade;
  document.getElementById("estado").value = endereco.uf;
}


//Verificação de caracteres
const cepValido = (cep) => {
  if (cep.length == 8) {
      return true;
  } else {
      return false;
  }
}

//Com async e await podemos trabalhar com código assíncrono em um estilo mais parecido com o bom e velho código síncrono.

//Pega o cep escrito e pesquisa na api
const pesquisarCep = async () => {
  const cep = document.getElementById("cep").value;
  const url = `http://viacep.com.br/ws/${cep}/json/`;
  
  //envia nos quadros
  if (cepValido(cep)) {
      const dados = await fetch(url);
      const endereco = await dados.json();
      preencherFormulario(endereco);
  }
}
document.getElementById("cep").addEventListener("focusout", pesquisarCep);

// calcular frete
function calcularFrete() {
  var regiao = document.getElementById("regiao").value;
  var taxa;
  
  switch (regiao) {
    case "Norte":
      taxa = 40,00;
      break;
    case "Nordeste":
      taxa = 30,00;
      break;
    case "Centro-Oeste":
      taxa = 20,00;
      break;
    case "Sudeste":
      taxa = 10,00;
      break;
    case "Sul":
      taxa = 15,00;
      break;
    default:
      document.getElementById("resultado").innerHTML = "Região inválida.";
      return;
  }
  
  var frete = taxa ;
  document.getElementById("resultado").innerHTML = "O frete para essa região é R$" + frete.toFixed(2);
}









