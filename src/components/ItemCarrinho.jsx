function ItemCarrinho({ produto }) {
  const subtotal = produto.preco * produto.quantidade;

  return (
    <article className="item-carrinho">
      <h3>{produto.nome}</h3>

      <p>Preço: R$ {produto.preco.toFixed(2)}</p>

      <p>Quantidade: {produto.quantidade}</p>

      <p>Subtotal: R$ {subtotal.toFixed(2)}</p>
    </article>
  );
}

export default ItemCarrinho;