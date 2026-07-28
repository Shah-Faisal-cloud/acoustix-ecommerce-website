export default function AboutUs() {
  return /* html */ `
  <section class="about-us">
    <div class="about-us__media">
      <picture>
        <source media="(min-width: 1024px)" srcset="/about-us/desktop.jpg" />
        <source media="(min-width: 768px)" srcset="/about-us/tablet.jpg" />
        <img src="/about-us/mobile.jpg" alt="Man wearing Acoustix headphones" class="about-us__img" />
      </picture>
    </div>

    <div class="about-us__content">
      <h2 class="about-us__title">
        Bringing you the <span class="about-us__highlight">best</span> audio gear
      </h2>
      <p class="about-us__description">
        Located at the heart of New York City, Acoustix is the premier store for high end headphones,
        earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration
        rooms available for you to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Acoustix the best place to buy your portable audio equipment.
      </p>
    </div>
  </section>
  `;
}
