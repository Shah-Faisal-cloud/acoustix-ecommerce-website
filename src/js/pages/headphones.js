import { CatalogTemplate } from "../components/CatalogTemplate";

function initHeadphonesPage() {
  const app = document.getElementById("app");

  app.innerHTML = /* html */ `
      ${CatalogTemplate('headphones')}
    `
}

initHeadphonesPage()

