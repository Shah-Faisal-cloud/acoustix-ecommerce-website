let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
  window.dispatchEvent(new Event('cart:updated'))
}

export function getCart() {
  return cart;
}

export function getCartCount() {
  const totalCount = cart.reduce((total, currentItem) => {
    return total + currentItem.quantity;
  }, 0);
  return totalCount;
}

export function getProductQty(productId) {
  const product = cart.find((item) => item.id === productId);
  if (product) {
    return product.quantity;
  } else {
    return 0;
  }
}

export function addToCart(productId) {
  cart.push({ id: productId, quantity: 1 });
  saveToLocalStorage();
}

export function incrementQty(productId) {
  const product = cart.find((item) => item.id === productId);
  product.quantity += 1;
  saveToLocalStorage();
}

export function decrementQty(productId) {
  const product = cart.find((item) => item.id === productId);
  if (product.quantity > 1) {
    product.quantity -= 1;
  } else {
    removeFromCart(productId);
    return;
  }
  saveToLocalStorage();
}

export function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  saveToLocalStorage();
}

export function emptyCart() {
  cart = [];
  saveToLocalStorage();
}
