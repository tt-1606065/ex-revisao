




function retornaNomeDoInput() {
    return "#input_1"
}

function validarEChamarAPI() {
    // Entrada
    const nome = document.querySelector("#nome").value
    const senha = document.querySelector("#senha").value
    // console.log("------ VALORES PEGOS DOS INPUTS -----")
    // console.log(nome)
    // console.log(senha)

    // Processamento
    // console.log("------ PROCESSAMENTO ------")
    let nomeTemValor = nome != "" // true ou false
    let senhaTemValor = senha != ""
    // console.log("nomeTemValor", nomeTemValor)
    // console.log("senhaTemValor", senhaTemValor)

    let deuSucesso = nomeTemValor == true && senhaTemValor == true
    // console.log("deuSucesso?", deuSucesso)

    // Saida
    if (deuSucesso) {
        document.querySelector("#resSucesso").style.display = "block"
        document.querySelector("#resErro").style.display = "none"
    } else {
        document.querySelector("#resErro").style.display = "block"
        document.querySelector("#resSucesso").style.display = "none"
    }
}