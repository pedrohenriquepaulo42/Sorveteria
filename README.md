# 🍦 Doce Neve — Sorveteria

O **Doce Neve** é um site de uma sorveteria criado com **HTML, CSS e JavaScript**. O projeto possui um design moderno, responsivo e pensado para funcionar tanto no computador quanto no celular.

## ✨ Funcionalidades

* 🍨 Catálogo de sabores
* 🛒 Carrinho de compras
* ➕ Adicionar produtos ao carrinho
* ➖ Aumentar ou diminuir a quantidade
* 🗑️ Remover produtos
* 🧹 Limpar o carrinho
* 💰 Cálculo automático do total
* 📱 Layout responsivo para celular
* 💬 Finalização do pedido pelo WhatsApp
* 📋 Menu de navegação para dispositivos móveis

## 🛠️ Tecnologias utilizadas

* **HTML5** — estrutura do site
* **CSS3** — estilização, layout e responsividade
* **JavaScript** — funcionamento do carrinho e interações

## 📁 Estrutura do projeto

```text
doce-neve/
├── index.html
├── style.css
└── script.js
```

### 📄 index.html

Contém toda a estrutura da página, como o cabeçalho, produtos, seção "Sobre nós", contato, rodapé e carrinho.

### 🎨 style.css

Responsável pelo visual do site, incluindo cores, fontes, botões, cards, animações, carrinho lateral e adaptação para celulares.

### ⚙️ script.js

Responsável pelas funcionalidades do site, principalmente o carrinho de compras, controle de quantidade, cálculo do total e envio do pedido pelo WhatsApp.

## 💬 WhatsApp

Para utilizar o WhatsApp da sua própria sorveteria, abra o arquivo `script.js` e procure por:

```javascript
const phone = "5511999999999";
```

Troque pelo número desejado usando o formato:

```text
55 + DDD + número
```

Por exemplo:

```javascript
const phone = "5511950182995";
```

Não coloque `+`, espaços, parênteses ou hífen.

## 🚀 Como executar

Não é necessário instalar nenhuma biblioteca ou programa específico.

Basta baixar ou clonar o projeto e abrir o arquivo:

```text
index.html
```

no navegador.

## 📌 Observação

Este projeto é um **site front-end**.
