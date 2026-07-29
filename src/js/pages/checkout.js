import Footer from "../components/Footer";
import Header from "../components/Header";
import { emptyCart, getCart } from "../state/cart";
import data from "../../data/data.json";
import Button from "../components/Button"

const cart = getCart();
if (cart.length === 0) {
  window.location.replace('/index.html');
}

function initCheckoutPage() {
  const app = document.getElementById("app");
  if (!app) return;

  const cart = getCart();
    if (cart.length === 0) {
      window.location.replace('/index.html');
      return;
    }
  

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

  const shippingPrice = isCartEmpty ? 0 : 50;
  const vatPrice = Math.round(totalPrice * 0.2);
  const grandTotal = totalPrice + shippingPrice;

  app.innerHTML = /* html */ `
    <main class="checkout-page">
      <div class="checkout-page__container">
        <div class="checkout-page__back-link-wrapper">
          <a href="/" class="checkout-page__back-link">Go Back</a>
        </div>

        <div class="checkout-page__grid">
          <!-- LEFT COLUMN: CHECKOUT FORM -->
          <form class="checkout-form" id="checkout-form">
            <h1 class="checkout-form__title">Checkout</h1>


            <fieldset class="checkout-form__section">
              <legend class="checkout-form__legend">Billing Details</legend>
              <div class="checkout-form__row">
                <div class="checkout-form__field">
                  <label for="name" class="checkout-form__label">Name</label>
                  <input type="text" id="name" name="name" class="checkout-form__input" placeholder="John Doe" required>
                </div>
                <div class="checkout-form__field">
                  <label for="email" class="checkout-form__label">Email Address</label>
                  <input type="email" id="email" name="email" class="checkout-form__input" placeholder="john@gmail.com" required>
                </div>
              </div>
              <div class="checkout-form__row">
                <div class="checkout-form__field">
                  <label for="phone" class="checkout-form__label">Phone Number</label>
                  <input type="tel" id="phone" name="phone" class="checkout-form__input" placeholder="+1 202-555-0136" required>
                </div>
              </div>
            </fieldset>


            <fieldset class="checkout-form__section">
              <legend class="checkout-form__legend">Shipping Info</legend>
              <div class="checkout-form__field checkout-form__field--full">
                <label for="address" class="checkout-form__label">Address</label>
                <input type="text" id="address" name="address" class="checkout-form__input" placeholder="1137 Williams Avenue" required>
              </div>
              <div class="checkout-form__row">
                <div class="checkout-form__field">
                  <label for="zip" class="checkout-form__label">ZIP Code</label>
                  <input type="text" id="zip" name="zip" class="checkout-form__input" placeholder="10001" required>
                </div>
                <div class="checkout-form__field">
                  <label for="city" class="checkout-form__label">City</label>
                  <input type="text" id="city" name="city" class="checkout-form__input" placeholder="New York" required>
                </div>
              </div>
              <div class="checkout-form__row">
                <div class="checkout-form__field">
                  <label for="country" class="checkout-form__label">Country</label>
                  <input type="text" id="country" name="country" class="checkout-form__input" placeholder="United States" required>
                </div>
              </div>
            </fieldset>


            <fieldset class="checkout-form__section">
              <legend class="checkout-form__legend">Payment Details</legend>
              <div class="checkout-form__payment-container">
                <span class="checkout-form__label">Payment Method</span>
                <div class="checkout-form__payment-options">
                  <label class="checkout-form__radio-label">
                    <input type="radio" name="payment-method" value="e-money" class="checkout-form__radio" checked>
                    <span class="checkout-form__radio-text">e-Money</span>
                  </label>
                  <label class="checkout-form__radio-label">
                    <input type="radio" name="payment-method" value="cash" class="checkout-form__radio">
                    <span class="checkout-form__radio-text">Cash on Delivery</span>
                  </label>
                </div>
              </div>


              <div class="checkout-form__row checkout-form__emoney-fields">
                <div class="checkout-form__field">
                  <label for="emoney-number" class="checkout-form__label">e-Money Number</label>
                  <input type="text" id="emoney-number" name="emoney-number" class="checkout-form__input emoney-input" placeholder="238521993" required>
                </div>
                <div class="checkout-form__field">
                  <label for="emoney-pin" class="checkout-form__label">e-Money PIN</label>
                  <input type="text" id="emoney-pin" name="emoney-pin" class="checkout-form__input emoney-input" placeholder="6891" required>
                </div>
              </div>


              <div class="checkout-form__cash-notice" style="display: none;">
                  <img src="/icon-cash-on-delivery.svg" alt="Cash on Delivery" class="checkout-form__cash-icon">
                  <p class="checkout-form__cash-text">The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
              </div>
            </fieldset>
          </form>

          <!-- RIGHT COLUMN: SUMMARY CARD -->
          <div class="checkout-summary">
            <h2 class="checkout-summary__title">Summary</h2>

            ${
              isCartEmpty
                ? /* html */ `
                <div class="checkout-summary__empty-cart">
                    <p className="checkout-summary__empty-cart-text">Your cart is currently empty.</p>
                </div>
              `
                : /* html */ `
            <ul class="checkout-summary__items">
            ${filteredCartArray
              .map((item) => {
                const { shortName, price, quantity, cartImage } = item;

                return /* html */ `
              <li class="checkout-summary__item">
                  <img src="${cartImage}" alt="XX99 MK II" class="checkout-summary__img">
                <div class="checkout-summary__info">
                  <span class="checkout-summary__name">${shortName}</span>
                  <span class="checkout-summary__price">$${price}</span>
                </div>
                <span class="checkout-summary__quantity">x${quantity}</span>
              </li>
              `;
              })
              .join("")}

            </ul>`
            }

            <div class="checkout-summary__totals">
              <div class="checkout-summary__line">
                <span class="checkout-summary__label-text">Total</span>
                <span class="checkout-summary__value-text">$${totalPrice}</span>
              </div>
              <div class="checkout-summary__line">
                <span class="checkout-summary__label-text">Shipping</span>
                <span class="checkout-summary__value-text">$${shippingPrice}</span>
              </div>
              <div class="checkout-summary__line">
                <span class="checkout-summary__label-text">VAT (INCLUDED)</span>
                <span class="checkout-summary__value-text">$${vatPrice}</span>
              </div>
              <div class="checkout-summary__line checkout-summary__line--grand">
                <span class="checkout-summary__label-text">Grand Total</span>
                <span class="checkout-summary__value-text checkout-summary__value-text--highlight">$${grandTotal}</span>
              </div>
            </div>

            <button type="submit" form="checkout-form" class="checkout-summary__btn">Continue & Pay</button>
          </div>
        </div>
      </div>
    </div>
    </main>
    ${Footer()}
    ${ThankYouModal()}
  `;

  const paymentRadios = document.querySelectorAll(
    'input[name="payment-method"]',
  );
  const emoney = document.querySelector(".checkout-form__emoney-fields");
  const emoneyInputs = document.querySelectorAll('.emoney-input');
  const cash = document.querySelector(".checkout-form__cash-notice");
  const form = document.getElementById("checkout-form");
  const thankYouModal = document.getElementById('thank-you-popup');

  if (paymentRadios.length > 0 && emoney && cash) {
      paymentRadios.forEach((radio) => {
        radio.addEventListener("change", (e) => {
          if (e.target.value === "e-money") {
            emoney.style.display = "flex";
            cash.style.display = "none";
            emoneyInputs.forEach(input => input.required = true);
          } else {
            emoney.style.display = "none";
            cash.style.display = "flex";
            emoneyInputs.forEach(input => input.required = false);
          }
        });
      });
    }
  
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        emptyCart();
        thankYouModal.classList.add('thank-you-modal__wrapper--open')
        document.body.classList.add('no-scroll')
      });
    }
}

initCheckoutPage();


function ThankYouModal() {
  return /* html */ `
    <div class="thank-you-modal__wrapper" id="thank-you-popup">
        <div class="thank-you-modal">
            <svg class="thank-you-modal__icon" width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#D87D4A" cx="32" cy="32" r="32"/><path stroke="#FFF" stroke-width="4" d="m20.754 33.333 6.751 6.751 15.804-15.803"/></g></svg>
            <h2 class="thank-you-modal__title">thank you <br>for your order</h2>
            <p class="thank-you-modal__text">Your order has been successfully placed. You can explore more of our premium audio products anytime.</p>
            ${Button({ color: 'orange', isOutline: false, url: '/index.html', label: 'Go To Home Page', styles: 'width: 100%;'})}
        </div>
    </div>
  `
}