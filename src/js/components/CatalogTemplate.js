import data from '../../data/data.json'
import AboutUs from './AboutUs'
import Categories from './Categories'
import ProductCard from './ProductCard'
import Header from './Header'
import Footer from './Footer'

export function CatalogTemplate(category) {

  const categoryData = data.filter(item => item.category === category)
  
  return /* html */ `
  ${Header()}
  <main>
      <section class="page-title-wrapper">
          <h1 class="page-title-wrapper__heading">Headphones</h1>
      </section>
      <section class="product-card-container">
        ${categoryData.map((item) => {
          const { id, category, name, imagePath, isNew, description } = item;
          return /* html */ `
            ${ProductCard({ id: id, category: category, name: name, imagePath: imagePath, isNew: isNew, description: description })}
          `
        })}
      </section>
      ${Categories()}
      ${AboutUs()}
  </main>
  ${Footer()}
  `
}