import { Link } from "react-router-dom";
import produtos from "../data/produtos";
import ItemCarrinho from "../components/ItemCarrinho";
import ResumoCompra from "../components/ResumoCompra";

function Carrinho() {
  return (
    <main>
      <h1>Meu Carrinho</h1>

      <section>
        {produtos.map((produto) => (
          <ItemCarrinho
            key={produto.id}
            produto={produto}
          />
        ))}
      </section>

      <ResumoCompra produtos={produtos} />

      <Link to="/pagamento">
        <button type="button">Ir para pagamento</button>
      </Link>
    </main>
  );
}

export default Carrinho;