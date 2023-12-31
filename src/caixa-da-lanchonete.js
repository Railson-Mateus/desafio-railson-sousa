import { Cardapio } from "./cardapio";
import { FormasDePagamento } from "./formasDePagamento";

class CaixaDaLanchonete {
  constructor() {
    this.cardapio = new Cardapio();
    this.formasDePagamento = new FormasDePagamento();
  }

  calcularValorDaCompra(metodoDePagamento, itens) {
    if (!this.formasDePagamento.isValidForma(metodoDePagamento)) {
      return "Forma de pagamento inválida!";
    }

    let itensIsValid = this.validarItens(itens);

    if (itensIsValid) return itensIsValid;

    let subTotal = this.calcularSubtotalDaCompra(itens);

    if (typeof subTotal === "string") return subTotal;

    let totalDaCompra = this.formasDePagamento.calcularValorComMetodoPagamento(
      subTotal,
      metodoDePagamento
    );

    totalDaCompra = `R$ ${totalDaCompra.toFixed(2).replace(".", ",")}`;

    return totalDaCompra;
  }

  validarItens(itens) {
    if (itens.length === 0) {
      return "Não há itens no carrinho de compra!";
    }

    for (const itemInfo of itens) {
      const [codigo, quantidade] = itemInfo.split(",");

      if (quantidade <= 0) {
        return "Quantidade inválida!";
      }

      const item = this.cardapio.getItem(codigo);

      if (!item) {
        return "Item inválido!";
      }
    }
    return null;
  }

  calcularSubtotalDaCompra(itens) {
    let total = 0;
    let itensExtras = [];
    let itensArray = [];

    for (const itemInfo of itens) {
      const [codigo, quantidade] = itemInfo.split(",");

      const item = this.cardapio.getItem(codigo);

      if (codigo === "queijo" || codigo === "chantily") {
        itensExtras.push(codigo);
      } else {
        itensArray.push(codigo);
      }

      total += item.valor * quantidade;
    }

    for (const item of itensExtras) {
      if (!this.cardapio.verificarExtras(item, itensArray)) {
        return "Item extra não pode ser pedido sem o principal";
      }
    }

    return total;
  }
}

export { CaixaDaLanchonete };
