import {
  decrementQty,
  emptyCart,
  getCart,
  getCartCount,
  incrementQty,
} from "../state/cart";
import Button from "./Button";
import data from "../../data/data.json";

export default function CartModal() {
  return /* html */ `
    <div class="cart-modal " id="cartModal" aria-hidden="false">
      <div class="cart-modal__backdrop" id="cartBackdrop"></div>

      <div class="cart-modal__content-wrapper">
        ${CartModalContent()}
      </div>
    </div>
  `;
}

function CartModalContent() {
  const rawCartArray = getCart();
  const filteredCartArray = rawCartArray.map((cartItem) => {
    const product = data.find((item) => item.id === cartItem.id);

    return {
      id: product.id,
      shortName: product.shortName,
      price: product.price,
      quantity: cartItem.quantity,
      cartImage: product.images.cart,
    };
  });

  const isCartEmpty = filteredCartArray.length === 0;
  const totalPrice = filteredCartArray.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const totalItemsCount = getCartCount();

  return /* html */ `
  <div class="cart-modal__content" id="cartModalContent">
    <header class="cart-modal__header">
      <h2 class="cart-modal__title">CART (<span class="cart-modal__count">${totalItemsCount}</span>)</h2>
      <button type="button" class="cart-modal__remove-all-btn" ${isCartEmpty ? "disabled" : ""}>Remove all</button>
    </header>

    ${
      isCartEmpty
        ? /* html */ `
        <div class="cart-modal__empty-cart">
            <p className="cart-modal__empty-cart-text">Your cart is currently empty.</p>
        </div>
      `
        : /* html */ `
        <ul class="cart-modal__list">
        ${filteredCartArray
          .map((item) => {
            const { id, shortName, price, quantity, cartImage } = item;
            return `${CartItem({ id, shortName, price, quantity, cartImage })}`;
          })
          .join("")}
        </ul>
      `
    }


    <div class="cart-modal__summary">
      <span class="cart-modal__total-label">TOTAL</span>
      <span class="cart-modal__total-price">$ ${totalPrice}</span>
    </div>

    <div style="margin-top: -8px; ${isCartEmpty ? "cursor: not-allowed;" : "cursor: pointer;"}">
    ${Button({ color: "orange", isOutline: false, label: "Checkout", url: "/pages/checkout.html", styles: "width: 100%;", isDisabled: isCartEmpty })}
    </div>
  </div>
  `;
}

function CartItem({ id, shortName, price, quantity, cartImage }) {
  return /* html */ `
  <li class="cart-modal__item" data-product-id="${id}">
    <img
      src="${cartImage}"
      alt="${shortName}"
      class="cart-modal__item-image"
    >

    <div class="cart-modal__item-details">
      <span class="cart-modal__item-name">${shortName}</span>
      <span class="cart-modal__item-price">$ ${price}</span>
    </div>

    <div class="cart-modal__counter">
      <button
        type="button"
        class="cart-modal__counter-btn cart-modal__counter-btn--decrement"
        aria-label="Decrease quantity"
      >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="counter-btn__decrement-icon size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
          </svg>
      </button>

      <span class="cart-modal__counter-value">${quantity}</span>

      <button
        type="button"
        class="cart-modal__counter-btn cart-modal__counter-btn--increment"
        aria-label="Increase quantity"
      >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="counter-btn-increment-icon size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
      </button>
    </div>
  </li>
  `;
}

export function initCartModal() {
  const cartModalGrandWrapper = document.querySelector(".cart-modal");
  const cartModalWrapper = document.querySelector(
    ".cart-modal__content-wrapper",
  );
  const cartModalContentWrapper = document.querySelector(
    ".cart-modal__content-wrapper",
  );

  if (!cartModalGrandWrapper || !cartModalWrapper) return;

  function updateModalUI() {
    cartModalWrapper.innerHTML = CartModalContent();
  }

  window.addEventListener("cart:updated", updateModalUI);

  document.addEventListener("click", (e) => {
    if (e.target.closest(".header__cart-btn")) {
      cartModalGrandWrapper.classList.toggle("is-open");
      return;
    }

    if (e.target.closest(".cart-modal__remove-all-btn")) {
      emptyCart();
      return;
    }

    const incrementBtn = e.target.closest(
      ".cart-modal__counter-btn--increment",
    );
    if (incrementBtn) {
      const productId =
        incrementBtn.closest(".cart-modal__item").dataset.productId;
      incrementQty(productId);
      return;
    }

    const decrementBtn = e.target.closest(
      ".cart-modal__counter-btn--decrement",
    );
    if (decrementBtn) {
      const productId =
        decrementBtn.closest(".cart-modal__item").dataset.productId;
      decrementQty(productId);
      return;
    }

    if (
      !cartModalContentWrapper.contains(e.target) &&
      cartModalGrandWrapper.classList.contains("is-open")
    ) {
      cartModalGrandWrapper.classList.remove("is-open");
    }
  });
}
