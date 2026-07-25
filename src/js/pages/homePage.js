import header, { toggleMenu } from "../components/Header";
import button from "../components/button";
import categories from "../components/categories";
import aboutUs from "../components/aboutUs";
import footer from "../components/footer";

function initHomePage() {
  const app = document.getElementById("app");

  app.innerHTML = /* html */ `
      ${header()}
      <main>
        ${heroSection()}
        ${categories()}
        ${bannersSection()}
        ${aboutUs()}
        ${footer()}
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

function bannersSection() {
  return /* html */ `
    <section class="banners-wrapper">
    <div class="zx9-banner">
      <div class="zx9-banner__media">
        <img src="/image-speaker-zx9.png" alt="ZX9 Speaker" class="zx9-banner__img" />
      </div>
    
      <div class="zx9-banner__content">
        <h2 class="zx9-banner__title">ZX9<br />Speaker</h2>
        <p class="zx9-banner__description">
          Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
        </p>
        ${button({ color: 'black', isOutline: false, url: '/pages/speakers.html?product=zx9' })}
      </div>
    </div>

    <div class="zx7-banner">
      <div class="zx7-banner__content">
        <h2 class="zx7-banner__title">ZX7 Speaker</h2>
        ${button({ color: 'black', isOutline: true, url: '/pages/speakers.html?product=zx7' })}
      </div>
    </div>

    <div class="yx1-banner">
      <div class="yx1-banner__media"></div>
    
      <div class="yx1-banner__content">
        <h2 class="yx1-banner__title">YX1 Earphones</h2>
        ${button({ color: 'black', isOutline: true, url: '/pages/earphones.html?product=yx1' })}
      </div>
    </div>
    </section>
  `
}

window.addEventListener("DOMContentLoaded", initHomePage);
