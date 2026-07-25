  const categoryList = [
    { name: 'Headphones', url: '/pages/headphones.html' },
    { name: 'Speakers', url: '/pages/speakers.html' },
    { name: 'Earphones', url: '/pages/earphones.html' }
  ];
  
export default function categories() {

  return /* html */ `
    <section class="categories__container" aria-label="Product categories">
        ${categoryList.map(category => {
          const slug = category.name.toLowerCase();
          return `
            <div class="category-card">
              <img 
                src="/image-category-thumbnail-${slug}.png" 
                alt="${category.name}" 
                class="category-card__img" 
              />
              <div class="category-card__content">
                <h2 class="category-card__title">${category.name}</h2>
                <a href="${category.url}" class="category-card__link">
                  Shop
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="category-card__icon size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </a>
              </div>
            </div>
          `;
        }).join('')}
    </section>
  `;
}