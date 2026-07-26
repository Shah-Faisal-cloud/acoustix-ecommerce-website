import { CatalogTemplate } from "../components/CatalogTemplate";

function initSpeakersPage() {
  const app = document.getElementById("app");

  app.innerHTML = /* html */ `
      ${CatalogTemplate('speakers')}
    `
}

initSpeakersPage()