class Jogador {
    constructor(nome, idade, time){
        this.nome = nome
        this.idade = idade
        this.time = time
    }

    getName(){
        return this.nome
    }

    getIdade(){
        return this.idade
    }

    getTime(){
        return this.time
    }
}

const j = new Jogador("Andrey", 18, "Vasco da Gama")
console.log(j.getName())
console.log(j.getIdade())
console.log(j.getTime())