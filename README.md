Projeto Front-End em JavaScript - Star Wars Planets

Este projeto front-end em JavaScript utiliza a API de Star Wars para exibir informações sobre os planetas da saga. A aplicação permite visualizar e filtrar os planetas com base em diferentes critérios, como nome e valores numéricos relacionados a cada planeta.
Funcionalidades
1. Requisição e exibição dos dados dos planetas

    Realiza uma requisição para o endpoint /planets da API de Star Wars.
    Preenche uma tabela com os dados retornados, com exceção dos dados da coluna residents.
    Exibe informações como nome, clima, terreno, gravidade, entre outros, dos planetas da saga Star Wars.

2. Filtro de texto para a tabela

    Implementa um filtro de texto para a tabela de planetas.
    À medida que o nome é digitado no campo de texto, a tabela é atualizada em tempo real para exibir apenas os planetas que correspondem ao filtro.

3. Filtro de valores numéricos

    Cria três seletores para filtrar os dados da tabela com base em colunas numéricas.
    A combinação dos seletores e ao clicar no botão deve filtrar os dados da tabela de acordo com a coluna correspondente e os valores escolhidos.

4. Múltiplos filtros numéricos

    Permite adicionar múltiplos filtros numéricos.
    Todos os filtros adicionados funcionam de forma conjunta para refinar os resultados da tabela.
    É possível filtrar, por exemplo, planetas com período orbital maior que 400 e diâmetro menor que 10000.

6. Evita filtros repetidos

    Ao preencher totalmente um filtro de valores numéricos, um novo filtro é carregado.
    Evita a duplicação de filtros, garantindo que cada filtro seja único e contribua para a filtragem dos dados.

7. Remoção de filtro de valor numérico

    Permite apagar um filtro de valor numérico ao clicar no ícone "X" correspondente ao filtro desejado.
    Também é possível remover todas as filtragens numéricas simultaneamente ao clicar em um botão de "Remover todas filtragens".

9. Ordenação ascendente ou descendente das colunas

    Implementa uma funcionalidade de ordenação ascendente ou descendente nas colunas da tabela.
    Utiliza um dropdown para selecionar a coluna que será base para a ordenação.
    Um par de radio buttons determina se a ordenação será ascendente ou descendente.

## Tecnologias utilizadas

O projeto Star Wars Planets foi desenvolvido utilizando as seguintes tecnologias:

- JavaScript
- React
- React Hooks
- Context API
- HTML
- CSS

## Autores

Este projeto foi desenvolvido por [Breno Almeida](https://github.com/brenoealmeida).
