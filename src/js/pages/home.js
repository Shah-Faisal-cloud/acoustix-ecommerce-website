import Header, { toggleMenu } from "../components/Header";
import Button from "../components/Button";
import Categories from "../components/Categories";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

function initHomePage() {
  const app = document.getElementById("app");

  app.innerHTML = /* html */ `
      ${Header()}
      <main>
        ${HeroSection()}
        ${Categories()}
        ${BannersSection()}
        ${AboutUs()}
      </main>
      ${Footer()}
    `;
}

function HeroSection() {
  return /* html */ `
  <section class="hero">
    <picture class="hero__picture">
      <source media="(min-width: 1024px)" srcset="/hero/desktop.jpg" />
      <img src="/hero/tablet.jpg" alt="XX99 Mark II Headphones showcase" class="hero__img" />
    </picture>

    <div class="hero__content">
      <span class="hero__overline">New Product</span>
      <h1 class="hero__title">XX99 Mark II<br />Headphones</h1>
      <p class="hero__description">
        Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
      </p>
      ${Button({ color: "orange", isOutline: false, url: "/pages/product.html?category=headphones&id=xx99-mark-two" })}
    </div>
  </section>
  `;
}

function BannersSection() {
  return /* html */ `
    <section class="banners-wrapper">
    <div class="zx9-banner">
      <div class="zx9-banner__media">
        <img src="/banners/zx9-speakers/desktop.png" alt="ZX9 Speaker" class="zx9-banner__img" />
      </div>

      <div class="zx9-banner__content">
        <h2 class="zx9-banner__title">ZX9<br />Speaker</h2>
        <p class="zx9-banner__description">
          Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
        </p>
        ${Button({ color: "black", isOutline: false, url: "/pages/product.html?category=speakers&id=zx9" })}
      </div>
    </div>

    <div class="zx7-banner">
      <div class="zx7-banner__content">
        <h2 class="zx7-banner__title">ZX7 Speaker</h2>
        ${Button({ color: "black", isOutline: true, url: "/pages/product.html?category=speakers&id=zx7" })}
      </div>
    </div>

    <div class="yx1-banner">
      <div class="yx1-banner__media"></div>

      <div class="yx1-banner__content">
        <h2 class="yx1-banner__title">YX1 Earphones</h2>
        ${Button({ color: "black", isOutline: true, url: "/pages/product.html?category=earphones&id=yx1" })}
      </div>
    </div>
    </section>
  `;
}

initHomePage();

