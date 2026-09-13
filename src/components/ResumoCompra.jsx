function ResumoCompra({ produtos }) {
  const total = produtos.reduce(
    (soma, produto) => soma + produto.preco * produto.quantidade,
    0
  );

  return (
    <section className="resumo-compra">
      <h2>Resumo da Compra</h2>

      <p>
        Total: <strong>R$ {total.toFixed(2)}</strong>
      </p>
    </section>
  );
}

export default ResumoCompra;