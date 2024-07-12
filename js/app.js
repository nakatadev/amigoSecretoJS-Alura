

let listaAmigos = [];
let amigosIncluidos = document.getElementById('lista-amigos');
let resultadoSorteio = document.getElementById('lista-sorteio');

function adicionar(){
    let amigo = document.getElementById('nome-amigo').value;
    listaAmigos.push(amigo);
    
    amigosIncluidos.innerHTML = `${listaAmigos}`;
    document.getElementById('nome-amigo').value = '';
}

function reiniciar(){
    listaAmigos = [];
    amigosIncluidos.innerHTML = ``;
    resultadoSorteio.innerHTML = "";
}

function aleatorio(){
    return Math.floor(Math.random() * listaAmigos.length);
}

function sortear(){
    if (listaAmigos.length == 0){
        resultadoSorteio.innerHTML = `A lista está vazia`;
        return;
    }
    let indiceAleatorio1 = aleatorio();
    let indiceAleatorio2 = aleatorio();
    while (indiceAleatorio2 === indiceAleatorio1 && listaAmigos.length > 1){
        indiceAleatorio2 = aleatorio();
    }
    let amigoSorteado1 = listaAmigos[indiceAleatorio1];
    let amigoSorteado2 = listaAmigos[indiceAleatorio2];

    resultadoSorteio.innerHTML = `${amigoSorteado1} --> ${amigoSorteado2}`;
}