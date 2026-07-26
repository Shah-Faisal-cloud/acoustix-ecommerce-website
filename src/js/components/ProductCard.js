import Button from "./Button";

export default function ProductCard({ id, category, name, imagePath, isNew, description }) {
  const formattedName = name.replace(/ (HEADPHONES|SPEAKER|EARPHONES)/, "<br />$1");

  return /* html */ `
    <div class="product-card" id="${id}">
      <div class="product-card__image-container">
        <picture>
          <source media="(min-width: 1024px)" srcset="${imagePath}-desktop.jpg">
        <source media="(min-width: 768px)" srcset="${imagePath}-tablet.jpg">
          <img src="${imagePath}-mobile.jpg" alt="${name}" class="product-card__image" >
        </picture>
      </div>

      <div class="product-card__content">
        ${isNew ? `<span class="product-card__overline">NEW PRODUCT</span>` : ''}
        <h2 class="product-card__title">${ formattedName }</h2>
        <p class="product-card__description">
        ${description}
        </p>
        ${Button({color: 'orange', isOutline: false, url: `/pages/product.html?category=${category}&id=${id}`})}
      </div>
    </div>
  `;
}