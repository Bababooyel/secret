//lista
let nomes = []

//funcao para adicionar amigos
function adicionarAmigo(){
    let input = document.getElementById('amigo')
    let nome = input.value.trim()

    if (nome == '') { // Se o campo estiver vazio
        alert("Por favor, insira um nome válido.");
        return;
    }
}