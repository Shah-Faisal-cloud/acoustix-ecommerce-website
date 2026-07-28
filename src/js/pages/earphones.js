
import { CatalogTemplate } from "../components/CatalogTemplate";

function initEarphonesPage() {
  const app = document.getElementById("app");
  if (!app) return;
  
  app.innerHTML = /* html */ `
      ${CatalogTemplate("earphones")}
    `;
}

initEarphonesPage();


