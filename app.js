function pesquisar() {
  // obtem a seção html inde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");  

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // se campoPesquisa for uma string vazia, não retorna nada
  if (!campoPesquisa) {
    section.innerHTML = "<p>Digite o que deseja pesquisar no campo de busca</p>"
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  console.log(campoPesquisa)
  
  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Procura na lista de dados por cada item
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Cria um novo elemento
      resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
    `;
    }   
  }

  if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>"
  }
  section.innerHTML = resultados;
}
