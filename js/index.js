/*
Quando clicar no pokemon da listagem temos que esconder o cartão em aberto e mostrar o cartão correspondente ao que foi selecionado na listagem
Pra isso vamos precisar trabalhar com 2 elementos
1- listagem
2- cartão pokémon

Precisamos criar 2 variaveis no JS para trabalhar com os elementos na tela

Vamos precisar trabalhar com um evento de clique feito pelo usuario na listagem de pokemon

- Remover a classe aberto do cartão em aberto
- Ao clicar em um pokemon da listagem pegamos o id de tal pokemon
-remover a classe ativa que marca o pokemon selecionado
-adicionar a classe em ativo no item da lista selecionado    
*/

// precisamos criar duas variaveis no JS para trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll(".pokemon")
const pokemonCard = document.querySelectorAll(".cartao-pokemon")

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener("click", () => {
        const cartaoPokemonAberto = document.querySelector (".aberto")
        cartaoPokemonAberto.classList.remove ("aberto")
        
        const idPokemonSelecionado = pokemon.attributes.id.value
        
        const idPokemonParaAbri = "cartao-" + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById("cartao-" + idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')

        const pokemonAtivoNaListagem = document.querySelector (".ativo")
        pokemonAtivoNaListagem.classList.remove("ativo")

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add("ativo") 
    })
})