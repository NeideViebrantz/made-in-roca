import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import usePagamento from "../hooks/usePagamento";

const schema = z.object({
  titular: z.string().min(1, "Informe o nome do titular"),
  cartao: z
    .string()
    .transform((valor) => valor.replace(/\s|-/g, ""))
    .refine((valor) => /^\d{16}$/.test(valor), "O cartão deve ter 16 dígitos"),
  validade: z
    .string()
    .refine(
      (valor) => /^(0[1-9]|1[0-2])\/\d{2}$/.test(valor),
      "Use o formato MM/AA"
    ),
  cvv: z
    .string()
    .refine((valor) => /^\d{3}$/.test(valor), "O CVV deve ter 3 dígitos"),
});

function Pagamento() {
  const navigate = useNavigate();
  const { processando, processarPagamento } = usePagamento();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  async function onSubmit(dados) {
    const aprovado = await processarPagamento(dados);

    if (aprovado) {
      navigate("/sucesso");
    } else {
      navigate("/falha");
    }
  }

  return (
    <main>
      <h1>Pagamento</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="titular">Nome do titular</label>
          <input id="titular" type="text" {...register("titular")} />
          {errors.titular && <p>{errors.titular.message}</p>}
        </div>

        <div>
          <label htmlFor="cartao">Número do cartão</label>
          <input
            id="cartao"
            type="text"
            placeholder="0000000000000000"
            {...register("cartao")}
          />
          {errors.cartao && <p>{errors.cartao.message}</p>}
        </div>

        <div>
          <label htmlFor="validade">Validade</label>
          <input
            id="validade"
            type="text"
            placeholder="MM/AA"
            {...register("validade")}
          />
          {errors.validade && <p>{errors.validade.message}</p>}
        </div>

        <div>
          <label htmlFor="cvv">CVV</label>
          <input
            id="cvv"
            type="text"
            placeholder="000"
            {...register("cvv")}
          />
          {errors.cvv && <p>{errors.cvv.message}</p>}
        </div>

        <button type="submit" disabled={processando}>
          {processando ? "Processando compra…" : "Pagar"}
        </button>
      </form>
    </main>
  );
}

export default Pagamento;