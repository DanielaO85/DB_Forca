
class Forca {

  //palavra = '';
  letrasChutadas = []; // Deve conter todas as letras chutadas
  vidas = 6;// Quantidade de vidas restantes
  palavraOculta = [];
  //palavraJogo = ['a', 'b', 'a', 'c', 'a', 'x', 'i']


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
  // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
          vidas: this.vidas,// Quantidade de vidas restantes
          palavra: this.palavraOculta,


          // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }

}

module.exports = Forca;