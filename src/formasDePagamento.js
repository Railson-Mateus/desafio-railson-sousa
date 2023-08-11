class FormasDePagamento {
  formas;
  constructor() {
    this.formas = ["dinheiro", "debito", "credito"];
  }

  isValidForma(forma) {
    return this.formas.includes(forma);
  }

  calcularAcrescimo(valor) {
    const acrescimo = valor * 0.03;
    return (valor += acrescimo);
  }

  calcularDesconto(valor) {
    const desconto = valor * 0.05;
    return (valor -= desconto);
  }
}

export { FormasDePagamento };
