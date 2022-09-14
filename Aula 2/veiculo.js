class Veiculo{
    placa;
    ano;

    constructor(placa, ano){
        this.placa = placa;
        this.ano = ano;
    }

    setPlaca(placa){
        this.placa = placa;
    }

    setAno(ano){
        this.ano = ano;
    }

    getPlaca(){
        return this.placa;
    }

    getAno(){
        return this.ano;
    }

    exibirDados(){
        console.log("Placa:", this.placa);
        console.log("Ano:", this.ano);
    }
}

class Caminhao extends Veiculo{ 
    eixos;

    constructor(placa, ano, eixos){
        super(placa, ano);
        this.eixos = eixos;
    }

    setEixos(eixos){
        this.eixos = eixos;
    }

    getEixos(){
        return this.eixos;
    }

    exibirDados(){
        console.log("Caminhao:");
        super.exibirDados();
        console.log("Eixos:", this.eixos);
    }
}

class Onibus extends Veiculo{
    assentos;

    constructor(placa, ano, assentos){
        super(placa, ano);
        this.assentos = assentos;
    }

    setAssentos(assentos){
        this.assentos = assentos;
    }

    getAssentos(){
        return this.assentos;
    }

    exibirDados(){
        console.log("Onibus:");
        super.exibirDados();
        console.log("Assentos:", this.assentos)
    }
}

let c = new Caminhao("ABC-1234", 2000, 8);
c.exibirDados();

console.log()

let o = new Onibus("DEF-5678", 2004, 44);
o.exibirDados();