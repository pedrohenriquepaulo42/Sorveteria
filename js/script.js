/* =====================================
   DOCE NEVE
   SISTEMA DE CARRINHO
===================================== */


// =====================================
// MENU MOBILE
// =====================================

const menuBtn =
  document.getElementById("menuBtn");


menuBtn.addEventListener(
  "click",
  () => {

    let menu =
      document.querySelector(".mobile-menu");


    if (menu) {

      menu.remove();

      return;

    }


    menu =
      document.createElement("div");


    menu.classList.add(
      "mobile-menu"
    );


    menu.innerHTML = `

      <a href="#inicio">
        Início
      </a>

      <a href="#sabores">
        Sabores
      </a>

      <a href="#sobre">
        Sobre nós
      </a>

      <a href="#contato">
        Contato
      </a>

    `;


    document.querySelector("nav")
      .appendChild(menu);


    // Fecha o menu ao clicar

    menu
      .querySelectorAll("a")
      .forEach(link => {

        link.addEventListener(
          "click",
          () => menu.remove()
        );

      });

  }
);


// =====================================
// ELEMENTOS DO CARRINHO
// =====================================

const cart =
  document.getElementById("cart");


const cartOverlay =
  document.getElementById(
    "cartOverlay"
  );


const cartItems =
  document.getElementById(
    "cartItems"
  );


const cartTotal =
  document.getElementById(
    "cartTotal"
  );


const cartCount =
  document.getElementById(
    "cartCount"
  );


const openCart =
  document.getElementById(
    "openCart"
  );


const closeCart =
  document.getElementById(
    "closeCart"
  );


const clearCart =
  document.getElementById(
    "clearCart"
  );


const checkout =
  document.getElementById(
    "checkout"
  );


const heroCart =
  document.getElementById(
    "heroCart"
  );


const ctaCart =
  document.getElementById(
    "ctaCart"
  );


// =====================================
// ARRAY DO CARRINHO
// =====================================

let shoppingCart = [];


// =====================================
// ABRIR CARRINHO
// =====================================

function openCartMenu() {

  cart.classList.add("active");

  cartOverlay.classList.add(
    "active"
  );

  document.body.classList.add(
    "cart-open"
  );

}


// =====================================
// FECHAR CARRINHO
// =====================================

function closeCartMenu() {

  cart.classList.remove(
    "active"
  );

  cartOverlay.classList.remove(
    "active"
  );

  document.body.classList.remove(
    "cart-open"
  );

}


// =====================================
// EVENTOS
// =====================================

openCart.addEventListener(
  "click",
  openCartMenu
);


heroCart.addEventListener(
  "click",
  openCartMenu
);


ctaCart.addEventListener(
  "click",
  openCartMenu
);


closeCart.addEventListener(
  "click",
  closeCartMenu
);


cartOverlay.addEventListener(
  "click",
  closeCartMenu
);


// =====================================
// ADICIONAR PRODUTOS
// =====================================

const addButtons =
  document.querySelectorAll(
    ".add-cart"
  );


addButtons.forEach(button => {

  button.addEventListener(
    "click",
    () => {


      const name =
        button.dataset.name;


      const price =
        Number(
          button.dataset.price
        );


      const icon =
        button.dataset.icon;


      // Verifica se já existe

      const existing =
        shoppingCart.find(
          item =>
            item.name === name
        );


      if (existing) {

        existing.quantity++;

      }

      else {

        shoppingCart.push({

          name: name,

          price: price,

          icon: icon,

          quantity: 1

        });

      }


      updateCart();


      // Abre o carrinho

      openCartMenu();


      // Efeito no botão

      const originalText =
        button.innerHTML;


      button.innerHTML =
        "✓ Adicionado";


      setTimeout(
        () => {

          button.innerHTML =
            originalText;

        },
        1000
      );

    }
  );

});


// =====================================
// ATUALIZAR CARRINHO
// =====================================

function updateCart() {

  cartItems.innerHTML = "";


  // Carrinho vazio

  if (
    shoppingCart.length === 0
  ) {

    cartItems.innerHTML = `

      <div class="empty-cart">

        <div class="empty-icon">
          🍦
        </div>

        <h3>
          Seu carrinho está vazio
        </h3>

        <p>
          Escolha um sabor delicioso
          para começar.
        </p>

      </div>

    `;


    cartTotal.textContent =
      "R$ 0,00";


    cartCount.textContent =
      "0";


    return;

  }


  let total = 0;

  let totalQuantity = 0;


  // Criar cada produto

  shoppingCart.forEach(
    (product, index) => {


      const subtotal =
        product.price *
        product.quantity;


      total += subtotal;


      totalQuantity +=
        product.quantity;


      const item =
        document.createElement(
          "div"
        );


      item.className =
        "cart-item";


      item.innerHTML = `

        <div class="cart-item-icon">
          ${product.icon}
        </div>


        <div class="cart-item-info">

          <h4>
            ${product.name}
          </h4>


          <div class="cart-item-price">
            R$ ${formatPrice(
              product.price
            )}
          </div>


          <div class="quantity">

            <button
              onclick="decreaseQuantity(${index})"
            >
              −
            </button>


            <strong>
              ${product.quantity}
            </strong>


            <button
              onclick="increaseQuantity(${index})"
            >
              +
            </button>

          </div>

        </div>


        <button
          class="remove-item"
          onclick="removeItem(${index})"
          title="Remover produto"
        >
          🗑️
        </button>

      `;


      cartItems.appendChild(item);

    }
  );


  cartTotal.textContent =
    "R$ " +
    formatPrice(total);


  cartCount.textContent =
    totalQuantity;

}


// =====================================
// AUMENTAR QUANTIDADE
// =====================================

function increaseQuantity(index) {

  shoppingCart[index].quantity++;

  updateCart();

}


// =====================================
// DIMINUIR QUANTIDADE
// =====================================

function decreaseQuantity(index) {

  shoppingCart[index].quantity--;


  if (
    shoppingCart[index].quantity <= 0
  ) {

    shoppingCart.splice(
      index,
      1
    );

  }


  updateCart();

}


// =====================================
// REMOVER ITEM
// =====================================

function removeItem(index) {

  shoppingCart.splice(
    index,
    1
  );


  updateCart();

}


// =====================================
// LIMPAR CARRINHO
// =====================================

clearCart.addEventListener(
  "click",
  () => {


    if (
      shoppingCart.length === 0
    ) {

      return;

    }


    const confirmed =
      confirm(
        "Deseja realmente limpar o carrinho?"
      );


    if (confirmed) {

      shoppingCart = [];

      updateCart();

    }

  }
);


// =====================================
// FINALIZAR PEDIDO
// =====================================

checkout.addEventListener(
  "click",
  () => {


    if (
      shoppingCart.length === 0
    ) {

      alert(
        "Seu carrinho está vazio! 🍦"
      );

      return;

    }


    let message =
      "🍦 *PEDIDO - DOCE NEVE*%0A%0A";


    let total = 0;


    shoppingCart.forEach(
      product => {


        const subtotal =
          product.price *
          product.quantity;


        total += subtotal;


        message +=
          `${product.icon} *${product.name}*%0A`;


        message +=
          `Quantidade: ${product.quantity}%0A`;


        message +=
          `Valor: R$ ${formatPrice(
            subtotal
          )}%0A%0A`;

      }
    );


    message +=
      "--------------------%0A";


    message +=
      `💰 *TOTAL: R$ ${formatPrice(
        total
      )}*%0A%0A`;


    message +=
      "Obrigado por pedir na Doce Neve! 🍦";


    /*
      =================================
      TROQUE PELO WHATSAPP DA LOJA
      =================================

      Exemplo:

      5515999999999

      55 = Brasil
      15 = DDD
      999999999 = número
    */


    const phone =
      "5511950182995";


    const whatsapp =
      `https://wa.me/${phone}?text=${message}`;


    window.open(
      whatsapp,
      "_blank"
    );

  }
);


// =====================================
// FORMATAR PREÇO
// =====================================

function formatPrice(value) {

  return value
    .toFixed(2)
    .replace(".", ",");

}


// =====================================
// ESC
// FECHA O CARRINHO
// =====================================

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape"
    ) {

      closeCartMenu();

    }

  }
);


// =====================================
// INICIAR
// =====================================

updateCart();

console.log(
  "🍦 Doce Neve carregada com sucesso!"
);