const Jogador = (nome, idade, time) => ({
    nome,
    idade,
    time,
    getData: () => ({nome, idade, time})
})

const jogador = Jogador("Messi", 35, "PSG")
console.log(jogador.getData())