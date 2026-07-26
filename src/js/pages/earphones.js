import { CatalogTemplate } from "../components/CatalogTemplate";

function initEarphonesPage() {
  const app = document.getElementById("app");

  app.innerHTML = /* html */ `
      ${CatalogTemplate('earphones')}
    `
}

initEarphonesPage()