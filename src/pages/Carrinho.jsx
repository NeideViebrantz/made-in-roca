
import { Link } from "react-router-dom";
import produtos from "../data/produtos";
import ItemCarrinho from "../components/ItemCarrinho";
import ResumoCompra from "../components/ResumoCompra";
import logo from "../assets/img/logo-made-in-roca.png";

function Carrinho() {
  return (
    <>
      <header className="cabecalho">
        <div className="logo">
          <img
            src={logo}
            alt="Logo da loja Made in Roça"
          />
        </div>

        <nav>
          <Link to="/">Início</Link>
          <Link to="/">Produtos</Link>
          <Link to="/">Carrinho</Link>
          <Link to="/pagamento">Pagamento</Link>
        </nav>
      </header>

      <main>
        <h2 className="titulo-carrinho">🛒 MEU CARRINHO</h2>

        <section className="lista-produtos">
          {produtos.map((produto) => (
            <ItemCarrinho
              key={produto.id}
              produto={produto}
            />
          ))}
        </section>

        <ResumoCompra produtos={produtos} />

        <Link className="botao-pagamento" to="/pagamento">
          🛒 IR PARA PAGAMENTO →
        </Link>
      </main>

      <footer className="rodape">
        <div>
          🚚
          <strong> ENTREGA SEGURA</strong>
          <span>Para todo o Brasil</span>
        </div>

        <div>
          🛡️
          <strong> COMPRA PROTEGIDA</strong>
          <span>Seus dados em segurança</span>
        </div>

        <div>
          🐴
          <strong> QUALIDADE GARANTIDA</strong>
          <span>Produtos selecionados com carinho</span>
        </div>
      </footer>
    </>
  );
}

export default Carrinho;

