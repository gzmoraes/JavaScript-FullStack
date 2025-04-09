function toKebabCase(str){
    return str.split(" ").join("-").toLowerCase()
}

function removerLi(id){
    const liParaRemover = document.getElementById(id)
    liParaRemover.remove()
}

document.getElementById("adicionarJogo").addEventListener("click", function(){
    const jogo = prompt("Insira o nome de um jogo")

    const liElement = document.createElement("li")
    liElement.innerText = jogo
    liElement.id = toKebabCase(jogo)

    const btnRemover = document.createElement ("button")
    btnRemover.innerText = "Remover Jogo"
    btnRemover.addEventListener("click", function(){
        removerLi(liElement.id)
    })

    liElement.appendChild(btnRemover)


    const ulElement = document.getElementById("listaDeJogos")

    ulElement.appendChild(liElement)
})
