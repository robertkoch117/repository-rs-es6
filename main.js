//REST

const usuario = {
    nome: 'Robert',
    idade: 21,
    empresa: 'Nenhuma'
};

const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto);