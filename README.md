# 🛒 Checkout React
# 🤠 Loja Virtual "Made in Roça" 

Mini-projeto avaliativo desenvolvido em **React + Vite + JavaScript (JSX)** para simular um fluxo de compra com carrinho, pagamento, processamento e resultado da transação.

## 📌 Sobre o projeto

O projeto simula uma pequena loja virtual, permitindo ao usuário:

* visualizar produtos no carrinho;
* consultar quantidade, preço unitário e subtotal;
* visualizar o valor total da compra;
* acessar a tela de pagamento;
* preencher os dados do cartão;
* validar os dados do formulário;
* simular o processamento do pagamento;
* receber uma resposta de compra aprovada ou recusada.

O projeto foi desenvolvido como parte do **Mini-Projeto Avaliativo — Módulo 2 — Semana 07**.

---

## 🎯 Objetivo

Praticar os principais conceitos de desenvolvimento Front-End com React, incluindo:

* componentes;
* JSX;
* props;
* arrays e objetos;
* métodos como `map()` e `reduce()`;
* `useState`;
* eventos;
* renderização condicional;
* React Hook Form;
* Zod;
* React Router;
* hooks personalizados;
* Promises;
* `async/await`;
* CSS responsivo;
* acessibilidade;
* organização de projeto;
* Git e GitHub.

---

## 🚀 Tecnologias utilizadas

* **React**
* **JavaScript**
* **JSX**
* **Vite**
* **React Router DOM**
* **React Hook Form**
* **Zod**
* **@hookform/resolvers**
* **CSS**
* **ESLint**
* **Git/GitHub**

---

## 📂 Estrutura do projeto

```text
checkout-react/
├── public/
├── src/
│   ├── assets/
│   │   └── styles/
│   │       └── index.css
│   │
│   ├── components/
│   │   ├── ItemCarrinho.jsx
│   │   └── ResumoCompra.jsx
│   │
│   ├── data/
│   │   └── produtos.js
│   │
│   ├── hooks/
│   │   └── usePagamento.js
│   │
│   ├── pages/
│   │   ├── Carrinho.jsx
│   │   ├── Pagamento.jsx
│   │   ├── Sucesso.jsx
│   │   └── Falha.jsx
│   │
│   ├── utils/
│   │   └── pagamento.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## 🛍️ Produtos

Os produtos utilizados no carrinho ficam armazenados em um array de objetos no arquivo:

```text
src/data/produtos.js
```

Cada produto possui:

* `id`
* `nome`
* `preco`
* `quantidade`

Exemplo:

```js
{
  id: 1,
  nome: "Chapéu",
  preco: 89.90,
  quantidade: 1
}
```

Atualmente o carrinho possui três produtos:

* Chapéu
* Bota
* Bolsa

O total da compra é calculado a partir dos dados dos produtos.

---

## 🧩 Componentes

### ItemCarrinho

Arquivo:

```text
src/components/ItemCarrinho.jsx
```

Responsável por apresentar cada produto do carrinho.

Recebe o produto através de **props** e calcula o subtotal:

```text
preço × quantidade
```

### ResumoCompra

Arquivo:

```text
src/components/ResumoCompra.jsx
```

Recebe a lista de produtos por meio de **props** e calcula o valor total utilizando `reduce()`.

---

## 🛣️ Rotas da aplicação

O projeto utiliza **React Router** para controlar a navegação entre as telas.

### `/`

Tela do carrinho.

Apresenta:

* produtos;
* preço unitário;
* quantidade;
* subtotal;
* resumo da compra;
* botão para pagamento.

### `/pagamento`

Tela do formulário de pagamento.

O formulário solicita:

* nome do titular;
* número do cartão;
* validade;
* CVV.

### `/sucesso`

Tela apresentada quando a compra é aprovada.

### `/falha`

Tela apresentada quando a simulação identifica uma tentativa de golpe.

---

## 💳 Validação do pagamento

O formulário utiliza:

* **React Hook Form** para gerenciamento do formulário;
* **Zod** para validação dos dados.

### Regras de validação

**Titular**

O nome do titular é obrigatório.

**Cartão**

O cartão deve possuir exatamente **16 dígitos**.

Espaços e hífens são desconsiderados na validação.

**Validade**

A validade deve utilizar o formato:

```text
MM/AA
```

O mês precisa estar entre:

```text
01 e 12
```

**CVV**

O CVV deve possuir exatamente **3 dígitos**.

---

## 🔐 Simulação de tentativa de golpe

Após a validação do formulário, o sistema simula o processamento do pagamento.

Existe uma regra específica para a atividade:

> Se os 16 dígitos do cartão forem todos iguais, a compra é recusada e a aplicação apresenta a mensagem `tentativa de golpe`.

Exemplos de cartões utilizados apenas para testar essa regra:

```text
1111111111111111
2222222222222222
3333333333333333
```

Esses números são **apenas dados fictícios para a simulação do projeto** e não representam cartões reais.

Qualquer cartão fictício válido com 16 dígitos diferentes entre si pode ser utilizado para testar a aprovação.

---

## ⏳ Processamento assíncrono

O pagamento possui uma simulação de processamento utilizando:

* `async/await`;
* `Promise`;
* `setTimeout`.

Durante o processamento:

```text
Processando compra…
```

é exibido no botão e o botão fica desabilitado para evitar novos envios enquanto a compra está sendo processada.

---

## 🪝 Hook personalizado

O projeto possui o hook:

```text
src/hooks/usePagamento.js
```

O `usePagamento` controla o estado de processamento e concentra a lógica da simulação do pagamento.

Isso permite separar essa responsabilidade da página de formulário.

---

## 🎨 Estilização

A aplicação utiliza CSS próprio localizado em:

```text
src/assets/styles/index.css
```

Foram utilizados recursos como:

* layout responsivo;
* espaçamento;
* bordas;
* botões;
* campos de formulário;
* mensagens de erro;
* adaptação para telas menores.

A interface foi pensada para funcionar também em dispositivos com telas menores.

---

## ♿ Acessibilidade

O formulário utiliza elementos semânticos e associa os textos dos campos aos respectivos inputs por meio de `label` e `htmlFor`.

Exemplo:

```jsx
<label htmlFor="titular">
  Nome do titular
</label>
```

Os campos também apresentam mensagens de erro quando os dados informados não atendem às regras de validação.

---

## ▶️ Como executar o projeto

### 1. Clonar o repositório

```bash
git clone URL_DO_SEU_REPOSITORIO
```

### 2. Entrar na pasta do projeto

```bash
cd checkout-react
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Iniciar o servidor de desenvolvimento

```bash
npm run dev
```

Depois, abra no navegador o endereço informado pelo Vite, normalmente:

```text
http://localhost:5173/
```

---

## 🧪 Comandos disponíveis

### Executar o projeto

```bash
npm run dev
```

### Criar a versão de produção

```bash
npm run build
```

### Verificar o código com ESLint

```bash
npm run lint
```

### Visualizar a versão de produção

```bash
npm run preview
```

---

## 🔄 Fluxo da aplicação

```text
Carrinho
   ↓
Pagamento
   ↓
Validação dos dados
   ↓
Processamento da compra
   ↓
 ┌───────────────┐
 │               │
Compra aprovada  Tentativa de golpe
 │               │
 ↓               ↓
Sucesso          Falha
```

---

## 🌿 Organização do Git

O desenvolvimento do projeto deve seguir uma organização utilizando branches.

Estrutura esperada:

```text
main
└── develop
    ├── feature/carrinho
    ├── feature/pagamento
    ├── feature/rotas
    └── feature/estilizacao
```

As funcionalidades são desenvolvidas em branches próprias e posteriormente integradas à branch `develop`.

Ao final, a versão concluída deve ser integrada à branch `main`.

---

## 📝 Histórico de commits

Os commits devem possuir mensagens descritivas, registrando a evolução do projeto.

Exemplos:

```text
feat: cria projeto React com Vite
feat: adiciona produtos ao carrinho
feat: cria componentes do carrinho
feat: adiciona rotas da aplicação
feat: cria formulário de pagamento
feat: adiciona validação com Zod
feat: cria simulação de pagamento
style: adiciona responsividade
docs: atualiza README
```

---

## 📋 Organização da tarefa

**Quadro Trello:**

```text
COLE_AQUI_O_LINK_DO_TRELLO
```

---

## 🎥 Vídeo de apresentação

**Vídeo da apresentação:**

```text
COLE_AQUI_O_LINK_DO_VIDEO
```

No vídeo será apresentada a execução do projeto, sua organização, funcionalidades implementadas e evolução durante o desenvolvimento.

---

## 🤖 Uso de Inteligência Artificial

A Inteligência Artificial foi utilizada como ferramenta de apoio durante o desenvolvimento.

O código gerado ou sugerido foi analisado, testado e adaptado de acordo com os requisitos do projeto.

A utilização da IA não substitui a compreensão do código. Cada funcionalidade deve ser validada e explicada durante a apresentação do projeto.

---

## 👩‍💻 Projeto acadêmico

Projeto desenvolvido para fins educacionais como parte da avaliação do curso de Front-End React.

**Tecnologia principal:** React
**Ferramenta de desenvolvimento:** Vite
**Linguagem:** JavaScript / JSX
