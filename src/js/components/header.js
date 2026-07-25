export default function header() {
  return /* html */ `
    <header class="header">
      <div class="header__container">

        <!-- Hamburger Button -->
        <button type="button" class="menu__toggle" aria-label="Toggle navigation" aria-expanded="false">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="header__toggle-icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        <!-- Logo -->
        <a href="/" class="header__logo">acoustix</a>

        <!-- Navigation Menu -->
        <nav class="header__nav" aria-label="Main Navigation">
          <!-- Top Bar inside Mobile Menu -->
          <div class="header__nav-top">
            <a href="/" class="header__logo">acoustix</a>

            <button type="button" class="header__nav-close" aria-label="Close menu">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="header__close-icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Menu Links -->
          <ul class="header__menu">
            <li class="header__menu-item">
              <a href="/" class="header__menu-link header__menu-link--active">home</a>
            </li>
            <li class="header__menu-item">
              <a href="/pages/headphones.html" class="header__menu-link">headphones</a>
            </li>
            <li class="header__menu-item">
              <a href="/pages/speakers.html" class="header__menu-link">speakers</a>
            </li>
            <li class="header__menu-item">
              <a href="/pages/earphones.html" class="header__menu-link">earphones</a>
            </li>
          </ul>
        </nav>

        <!-- Cart Action -->
        <button type="button" class="header__cart-btn" aria-label="Open Cart">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="header__cart-icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
          <span class="header__cart-count">0</span>
        </button>

      </div>
    </header>
  `;
}

export function toggleMenu() {
  const openMenuBtn = document.querySelector(".menu__toggle");
  const closeMenuBtn = document.querySelector(".header__nav-close");
  const menu = document.querySelector(".header__nav");
  const navLinks = document.querySelectorAll(".header__menu-link");

  openMenuBtn.addEventListener("click", () => {
    menu.classList.add("header__nav--open");
  });

  closeMenuBtn.addEventListener("click", () => {
    menu.classList.remove("header__nav--open");
  });

}
