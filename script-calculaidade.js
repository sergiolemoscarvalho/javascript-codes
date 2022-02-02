function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;

}
const pessoa1 = {
    nome: 'Maria',
    idade: 30,
};

const pessoa2 = {
    nome: 'José',
    idade: 48,
};

const animal1 = {
    nome: 'Bob',
    idade: 2,
};

const animal2 = {
    nome: 'Frida',
    idade: 5,
};

// console.log( calculaIdade.call(animal1, 10));
console.log( calculaIdade.apply(pessoa1,[50]));