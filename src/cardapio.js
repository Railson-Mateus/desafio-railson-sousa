class Cardapio {
  constructor() {
    this.itens = {
      cafe: { descricao: "Café", valor: 3.0, extras: ["chantily"] },
      chantily: { descricao: "Chantily (extra do Café)", valor: 1.5 },
      suco: { descricao: "Suco Natural", valor: 6.2 },
      sanduiche: { descricao: "Sanduíche", valor: 6.5, extras: ["queijo"] },
      queijo: { descricao: "Queijo (extra do Sanduíche)", valor: 2.0 },
      salgado: { descricao: "Salgado", valor: 7.25 },
      combo1: { descricao: "1 Suco e 1 Sanduíche", valor: 9.5 },
      combo2: { descricao: "1 Café e 1 Sanduíche", valor: 7.5 },
    };
  }

  getItem(codigo) {
    return this.itens[codigo];
  }

  verificarExtras(itemExtra, itensSelecionados) {
    if (itensSelecionados.length <= 0) {
      return false;
    }

    return itensSelecionados.some((item) =>
      this.itens[item].extras.includes(itemExtra)
    );
  }
}

export { Cardapio };
