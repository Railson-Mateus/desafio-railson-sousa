import { Cardapio } from "./cardapio";
import { FormasDePagamento } from "./formasDePagamento";

class CaixaDaLanchonete {
  formasDePagamento;
  cardapio;

  constructor() {
    this.cardapio = new Cardapio();
    this.formasDePagamento = new FormasDePagamento();
  }

  calcularValorDaCompra(metodoDePagamento, itens) {
    let total = 0;
    let itensExtras = [];
    let itensArray = [];

    if (!this.formasDePagamento.isValidForma(metodoDePagamento)) {
      return "Forma de pagamento inválida!";
    }

    if (itens.length === 0) {
      return "Não há itens no carrinho de compra!";
    }

    for (const itemInfo of itens) {
      const [codigo, quantidade] = itemInfo.split(",");

      if (quantidade <= 0) return "Quantidade inválida!";

      const item = this.cardapio.getItem(codigo);

      if (!item) {
        return "Item inválido!";
        break;
      }

      if (codigo === "queijo" || codigo === "chantily") {
        itensExtras.push(codigo);
        total += item.valor * quantidade;
        continue;
      }

      itensArray.push(codigo);
      total += item.valor * quantidade;
    }

    for (const item of itensExtras) {
      if (!this.cardapio.verificarExtras(item, itensArray)) {
        return "Item extra não pode ser pedido sem o principal";
      }
    }

    if (metodoDePagamento == "dinheiro")
      total = this.formasDePagamento.calcularDesconto(total);
    if (metodoDePagamento == "credito")
      total = this.formasDePagamento.calcularAcrescimo(total);

    return `R$ ${total.toFixed(2).replace(".", ",")}`;
  }
}

export { CaixaDaLanchonete };
