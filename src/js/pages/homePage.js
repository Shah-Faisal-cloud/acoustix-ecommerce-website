import button from "../components/button";
import categories from "../components/categories";
import header, { toggleMenu } from "../components/Header";

function initHomePage() {
  const app = document.getElementById("app");

  app.innerHTML = /* html */ `
      ${header()}
      <main>
        ${heroSection()}
        ${categories()}
      </main>
    `;

  toggleMenu();
}

function heroSection() {
  return /* html */ `
  <section class="hero">
    <picture class="hero__picture">
      <source media="(min-width: 1024px)" srcset="/image-hero-desktop.jpg" />
      <img src="/image-hero-tablet.jpg" alt="XX99 Mark II Headphones showcase" class="hero__img" />
    </picture>
  
    <div class="hero__content">
      <span class="hero__overline">New Product</span>
      <h1 class="hero__title">XX99 Mark II<br />Headphones</h1>
      <p class="hero__description">
        Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
      </p>
      ${button({ color: 'orange', isOutline: false, url: '/pages/headphones.html?product=xx99-mark-two'})}
    </div>
  </section>
  `;
}

window.addEventListener("DOMContentLoaded", initHomePage);
