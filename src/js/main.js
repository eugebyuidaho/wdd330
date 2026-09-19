import ProductData from './ProductData.mjs';
import ProductList from './ProductList.mjs';

const dataSource = new ProductData('tents');
const listElement = document.querySelector('.product-list');
const productList = new ProductList('tents', dataSource, listElement);
productList.init();

const newsletterForm = document.querySelector('#newsletter-form');
const newsletterMessage = document.querySelector('#newsletter-message');

newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('#newsletter-name').value;

    newsletterMessage.textContent = `Thank you, ${name}! You are now subscribed to our Newsletter.`;
    newsletterMessage.hidden = false;

    newsletterForm.reset();
});