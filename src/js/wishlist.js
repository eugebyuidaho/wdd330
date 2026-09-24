import { getLocalStorage, setLocalStorage } from './utils.mjs';


function renderWishlistContents() {
  const wishlistItems = getLocalStorage('so-wishlist') || [];
  const htmlItems = wishlistItems.map((item) => wishlistItemsTemplate(item));
  document.querySelector('.product-list').innerHTML = htmlItems.join('');
}

function wishlistItemsTemplate(item) {
  const newItem = `<li class="wishlist-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
  <button class ="move-to-cart" data-id="${item.Id}">Move to Cart</button>
</li>`;

  return newItem;
}

function moveToCart(id) {
  const wishlist = getLocalStorage('so-wishlist') || [];
  const product = wishlist.find((item) => item.Id === id);

  const cart = getLocalStorage('so-cart') || [];
  cart.push(product);
  setLocalStorage('so-wishlist', updated);

  renderWishlistContents();
}

document.querySelector('.product-list').addEventListener('click', (event) => {
  const button = event.target.closest('move-to-cart');
  if (button) {
    moveToCart(button.dataset.id);
  }
});

renderWishlistContents();
