
import CartModal, { initCartModal } from "./components/CartModal.js";
import { toggleMenu, initHeaderCartBadge } from "./components/Header.js";

function setupGlobalUI() {
  const app = document.getElementById("app");
  if (!app) return;

  app.insertAdjacentHTML("beforeend", CartModal());

  initCartModal();
  toggleMenu();
  initHeaderCartBadge();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupGlobalUI);
} else {
  setupGlobalUI();
}
