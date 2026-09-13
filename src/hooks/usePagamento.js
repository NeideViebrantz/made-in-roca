import { useState } from "react";

function usePagamento() {
  const [processando, setProcessando] = useState(false);

  async function processarPagamento(dados) {
    setProcessando(true);

    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });

    const cartao = dados.cartao.replace(/\s|-/g, "");

    const todosIguais = /^(\d)\1{15}$/.test(cartao);

    setProcessando(false);

    return !todosIguais;
  }

  return {
    processando,
    processarPagamento,
  };
}

export default usePagamento;