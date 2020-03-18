const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    },
};

/*function mostraNome(usuario){
    console.log(usuario.nome);
}*/

function mostraNome({nome, idade}){
    console.log(nome, idade);
}

mostraNome(usuario);