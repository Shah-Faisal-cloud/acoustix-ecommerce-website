  const categoryList = [
    { name: 'Headphones', url: '/pages/headphones.html' },
    { name: 'Speakers', url: '/pages/speakers.html' },
    { name: 'Earphones', url: '/pages/earphones.html' }
  ];
  
export default function Categories() {

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
                  <svg class="category-card__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.1717 12.0005L9.34326 9.17203L10.7575 7.75781L15.0001 12.0005L10.7575 16.2431L9.34326 14.8289L12.1717 12.0005Z"></path></svg>
                </a>
              </div>
            </div>
          `;
        }).join('')}
    </section>
  `;
}