
class Forca {

   
    letrasChutadas = []; 
    vidas = 6;
    palavraOculta = [];
    


    constructor(palavra) {
        this.palavra = palavra;
        for (let i = 0; i < this.palavra.length; i++) {
            this.palavraOculta.push('_')
        }
    }


    chutar(chute) {
        let encontrei = false;

        if (chute.length !== 1) {
            return 'aguardando chute'
        }

        for (let i = 0; i < this.letrasChutadas.length; i++) {
            let comparar = this.letrasChutadas[i]
            if (comparar === chute) {
                return 'aguardando chute'
            }
        }


        this.letrasChutadas.push(chute);

        for (let i = 0; i < this.palavra.length; i++) {
            const letra = this.palavra[i]

            if (chute === letra) {
                encontrei = true;
                this.palavraOculta[i] = letra
            }

        }
        if (encontrei === false) {
            this.vidas = this.vidas - 1;
        }


    }



    buscarEstado() {
        if (this.vidas === 0) {
            return "perdeu"
        }

        if (this.palavraOculta.join('') === this.palavra) {
            return "ganhou"
        }

        return "aguardando chute"
    }
   

    buscarDadosDoJogo() {
        return {
            letrasChutadas: this.letrasChutadas, 
            vidas: this.vidas,
            palavra: this.palavraOculta,


        }
    }

}

module.exports = Forca;