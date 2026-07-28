
import { CatalogTemplate } from "../components/CatalogTemplate";

function initHeadphonesPage() {
  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = /* html */ `
      ${CatalogTemplate("headphones")}
    `;
}

initHeadphonesPage();


