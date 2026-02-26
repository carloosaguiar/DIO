class Personagem{

    #pontos = 0;

    constructor(nome, velocidade, manobrabilidade, poder){
        this.nome = nome;
        this.velocidade = velocidade;
        this.manobrabilidade = manobrabilidade;
        this.poder = poder;
    }

    ganhouPonto(){
        this.#pontos = this.#pontos + 1
    }
    
    perdeuPonto(){
        if(this.#pontos == 0){
            this.#pontos = 0;
            return
        }

        this.#pontos = this.#pontos - 1
    }

    verPontos(){
        return this.#pontos;
    }

}

class Corrida{
    
    constructor(player1, player2){
        this.player1 = player1
        this.player2 = player2
    }

    #executeRound(atributo) {
        const p1 = this.player1[atributo] + this.#rollDice();
        const p2 = this.player2[atributo] + this.#rollDice();

        console.log(`${atributo} de ${this.player1.nome}: ${p1}`);
        console.log(`${atributo} de ${this.player2.nome}: ${p2}`);

        if (p1 > p2) {
            this.player1.ganhouPonto();
            this.player2.perdeuPonto();
            return 'player1';
        }

        if (p2 > p1) {
            this.player2.ganhouPonto();
            this.player1.perdeuPonto();
            return 'player2';
        }

        return null;
    }

    #track = {
        Reta: () => this.#executeRound("velocidade"),
        Curva: () => this.#executeRound("manobrabilidade"),
        Confronto: () => this.#executeRound("poder")
    }

    #rollDice(){
        return Math.round(Math.random()* 5) + 1;
    }
    
    #selectTrack(){
        //O script roda um dado de 3 dados e retorna qual pista deve ser usada
        
        let index = Math.round(Math.random()* 2);

        let bloco = ['Reta','Curva','Confronto'];

        return bloco[index];
    }

    startRace(){

        console.log(`🏁 Iniciando a corrida entre ${this.player1.nome} contra ${this.player2.nome}`)

        console.log("======================================================")

        for(let i = 1; i <= 5; i++){
            //Indice da Rodada
            console.log(`🔄 Rodada Nº ${i}`);

            //Selecionando bloco
            let bloco = this.#selectTrack()
            console.log(`Bloco: ${bloco}`);

            //Aqui executa o trecho do codigo da pista selecionada
            switch (this.#track[bloco]?.()) {
                case 'player1':
                    console.log(`O ${this.player1.nome} ganhou 1 ponto!`)
                    console.log(`O ${this.player2.nome} perdeu 1 ponto!`)
                    break;
                case 'player2':
                    console.log(`O ${this.player2.nome} ganhou 1 ponto!`)
                    console.log(`O ${this.player1.nome} perdeu 1 ponto!`)
                    break;
                default:
                    console.log('Empataram, niguem ganhou ponto!')
                    break;
            }
            console.log('=====================================================')
        }


        console.log("🧮 Resultados:")
        console.table([
            { Jogador: this.player1.nome, Pontos: this.player1.verPontos() },
            { Jogador: this.player2.nome, Pontos: this.player2.verPontos() }
        ]);
    }
}

const mario = new Personagem('Mario', 4,3,3);
const peach = new Personagem('Peach', 3,4,2);
const yoshi = new Personagem('Yoshi', 2,4,3);
const bowser = new Personagem('Bowser', 5,2,5);
const luigi = new Personagem('Luigi', 3,4,4);
const donkey_kong = new Personagem('Donkey Kong', 2,2,5);

const corrida = new Corrida(peach, luigi);

corrida.startRace();