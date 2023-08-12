class FormasDePagamento {
  constructor() {
    this.formas = ["dinheiro", "debito", "credito"];
  }

  isValidForma(forma) {
    return this.formas.includes(forma);
  }

  calcularValorComMetodoPagamento(valor, metodoPagamento) {
    if (metodoPagamento === "dinheiro") {
      const desconto = valor * 0.05;
      return valor - desconto;
    } else if (metodoPagamento === "credito") {
      const acrescimo = valor * 0.03;
      return valor + acrescimo;
    } else if (metodoPagamento === "debito") {
      return valor;
    }
  }
}

export { FormasDePagamento };
