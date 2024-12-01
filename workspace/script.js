const cart = document.getElementById('cart');
const toggleCartBtn = document.getElementById('toggle-cart');
const closeCartBtn = document.getElementById('close-cart');

// Toggle cart visibility
toggleCartBtn.addEventListener('click', () => {
  cart.classList.toggle('hidden');
});

// Close cart
closeCartBtn.addEventListener('click', () => {
  cart.classList.add('hidden');
});
const products = [
  {
    name: "Handmade Necklace",
    price: 50,
    image : "https://via.placeholder.com/200",
  },
  {
    name: "Knitted Swetter",
    price: 75,
    image : "https://via.placeholder.com/200",
  },
  {
    name: "Handmade Vase",
    price: 40,
    image : "https://via.placeholder.com/200",
  },
  {
    name: "Handmade Bracelet",
    price: 30,
    image : "https://via.placeholder.com/200",
  },
  {
    name: "Hankerchief",
    price: 20,
    image : "https://via.placeholder.com/200",
  },
  {
    name: "Handmade vest",
    price: 50,
    image : "https://via.placeholder.com/200",
  },
];

const productGrid = document.querySelector('.product-grid');
//const cartItemsContainer = document.querySelector('.cart-items');

function renderProducts() {
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <h3 class="product-name">${product.name}</h3>
      <p class="product-price">$${product.price}</p>
      <button class="add-to-cart-btn" data-product="${product.name}" data-price="${product.price}">Add to Cart</button>
    `;

    productGrid.appendChild(productCard);
  });
}

// const productGrid = document.querySelector('.product-grid');
// function renderProducts(){
//   proucts.forEach(_product => {
//     const productCard=document.createElement('div');
//     productCard.classList.add('product-card');
//     productCard.innerHTML = `
//     <img src="${proucts.image}" alt="${proucts.name}" class="product-image">
//         <h3 class="product-name">${proucts.name}</h3>
//         <p class="product-price">$${proucts.price}</p>
//         <button class="add-to-cart-btn" data-product=${proucts.name}data-price=$${proucts.price}>Add to Cart</button>`;

//         productGrid.appendChild(productCard);
//     });
//}
const cartItemsContainer = document.querySelector('.cart-items');
function attachEventListeners() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const product = button.getAttribute('data-product');
      const price = button.getAttribute('data-price');

      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-items');
      cartItem.innerHTML = `<p>${product} - $${price}</p>`;
      cartItemsContainer.appendChild(cartItem);

      document.querySelector('.empty-cart-msg').style.display = 'none';
    });
  });
}
renderProducts();
attachEventListeners(); 