import Header from "../components/Header";
import Button from "../components/Button";
import Categories from "../components/Categories";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import data from "../../data/data.json";
import {
  addToCart,
  decrementQty,
  getProductQty,
  incrementQty,
  removeFromCart,
} from "../state/cart";

function initProductDetailPage() {
  const app = document.getElementById("app");
  if (!app) return;

  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");
  const initialCartCount = getProductQty(productId);

  const product = data.find((item) => item.id === productId);
  const {
    id,
    category,
    name,
    description,
    price,
    features,
    includes,
    images: { preview: previewImages, gallery: galleryImages },
  } = product;

  const formattedProductName = name.replace(
    / (HEADPHONES|SPEAKER|EARPHONES)/,
    "<br />$1",
  );

  const relatedProducts = data
    .filter((item) => item.id !== productId && item.category !== "earphones")
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  app.innerHTML = /* html */ `
      ${Header()}
    <main class="product-detail">

      <div class="product-detail__back-link-wrapper">
      <a href="${product.category}.html" class="product-detail__back-link">Go Back</a>
      </div>

      <section class="product-detail__main">
        <div class="product-detail__media">
          <picture>
            <source srcset="${previewImages.desktop}" media="(min-width: 1024px)">
            <img
              src="${previewImages.mobile}"
              alt="${product.name}"
              class="product-detail__image"
            >
          </picture>
        </div>

        <div class="product-detail__content">
          <span class="product-detail__overline">New Product</span>
          <h1 class="product-detail__title">${formattedProductName}</h1>
          <p class="product-detail__description">
          ${description}
          </p>
          <span class="product-detail__price">$ ${price}</span>
          <div class="product-detail__purchase-controls" data-product-id="${id}">
            ${ControlButtons(initialCartCount)}
          </div>
        </div>
      </section>


      <section class="product-detail__info">
        <div class="product-detail__features">
          <h2 class="product-detail__section-title">Features</h2>
          ${features
            .split("\n\n")
            .map(
              (paragraph) => `<p class="product-detail__text">${paragraph}</p>`,
            )
            .join("")}
        </div>

        <div class="product-detail__includes">
          <h2 class="product-detail__section-title">In the Box</h2>
          <ul class="product-detail__includes-list">
            ${includes
              .map((item) => {
                return /* html */ `
              <li class="product-detail__includes-item">
                <span class="product-detail__includes-quantity">${item.quantity}x</span>
                <span class="product-detail__includes-name">${item.item}</span>
              </li>
              `;
              })
              .join("")}
          </ul>
        </div>
      </section>

      <section class="product-gallery">
        <div class="product-gallery__item product-gallery__item--1">
          <img
            src="${galleryImages[0]}"
            alt="Person wearing XX99 Mark II headphones"
            class="product-gallery__image"
          >
        </div>

        <div class="product-gallery__item product-gallery__item--2">
          <img
            src="${galleryImages[1]}"
            alt="XX99 Mark II headphones on table setup"
            class="product-gallery__image"
          >
        </div>

        <div class="product-gallery__item product-gallery__item--3">
          <img
            src="${galleryImages[2]}"
            alt="Close up of XX99 Mark II headphone earcup"
            class="product-gallery__image"
          >
        </div>
      </section>

      <section class="related-products">
        <h2 class="related-products__title">YOU MAY ALSO LIKE</h2>

        <div class="related-products__container">

          ${relatedProducts
            .map((relatedProduct) => {
              const {
                id,
                category,
                shortName,
                images: { youMayLike: youMayLikeImages },
              } = relatedProduct;
              return /* html */ `
            <div class="related-products__card">
              <div class="related-products__image-container">
                <picture>
                  <source media="(min-width: 1024px)" srcset="${youMayLikeImages.desktop}">
                  <source media="(min-width: 768px)" srcset="${youMayLikeImages.tablet}">
                  <img
                    src="${youMayLikeImages.mobile}"
                    alt="XX99 Mark I"
                    class="related-products__image"
                  >
                </picture>
              </div>

              <h3 class="related-products__title">${shortName}</h3>

              ${Button({
                color: "orange",
                isOutline: false,
                url: `/pages/product.html?category=${category}&id=${id}`,
              })}
            </div>
            `;
            })
            .join("")}

        </div>
      </section>


    ${Categories()}
    ${AboutUs()}
    </main>
    ${Footer()}
    `;

  const purchaseControls = app.querySelector(
    ".product-detail__purchase-controls",
  );

  if (!purchaseControls) return;

  window.addEventListener('cart:updated', () => {
    const updatedProductQty = getProductQty(productId);
    purchaseControls.innerHTML = ControlButtons(updatedProductQty);
  })

  purchaseControls.addEventListener("click", (e) => {
    const productId = purchaseControls.dataset.productId;

    const addBtn = e.target.closest(".product-detail__add-cart-btn");
    const incBtn = e.target.closest(".product-detail__counter-btn--increment");
    const decBtn = e.target.closest(".product-detail__counter-btn--decrement");
    const removeBtn = e.target.closest(".product-detail__remove-cart-btn");

    if (addBtn) {
      addToCart(productId);
    } else if (incBtn) {
      incrementQty(productId);
    } else if (decBtn) {
      decrementQty(productId);
    } else if (removeBtn) {
      removeFromCart(productId);
    } else {
      return;
    }
  });
}

function ControlButtons(quantity) {
  if (quantity === 0) {
    return /* html */ `
        <button type="button" class="product-detail__add-cart-btn">Add to Cart</button>
      `;
  }

  return /* html */ `
  <div class="product-detail__counter">
    <button type="button" class="product-detail__counter-btn product-detail__counter-btn--decrement" aria-label="Decrease quantity">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="counter-btn__decrement-icon size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
        </svg>
    </button>
    <span class="product-detail__counter-value">${quantity}</span>
    <button type="button" class="product-detail__counter-btn product-detail__counter-btn--increment" aria-label="Increase quantity">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="counter-btn-increment-icon size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
    </button>
  </div>
  <button type="button" class="product-detail__remove-cart-btn">Remove From Cart</button>
  `;
}

initProductDetailPage();
