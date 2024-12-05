// Product data
const products = [
  { id: 1, name: "Handmade Necklace", price: 50, image: "./assets/neclace.jpg" },
  { id: 2, name: "Knitted Sweater", price: 75, image: "./assets/sweater.png" },
  { id: 3, name: "Artisanal Mug", price: 25, image: "./assets/Exhausting-Mug.png" },
  { id: 4, name: "Vase", price: 30, image: "./assets/vase.jpeg" },
  { id: 5, name: "Stone Bracelet", price: 40, image: "./assets/bracelet.png" },
  { id: 6, name: "Cotton T-shirt", price: 45, image: "./assets/white t.png" },
];

// Cart data
let cart = [];

// Render products
const productGrid = document.querySelector('.product-grid');
products.forEach(product => {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');
  productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="product-image">
    <h3>${product.name}</h3>
    <p class="product-price">Price: $${product.price}</p>
    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
  `;
  productGrid.appendChild(productCard);
});

// Render cart
const cartSection = document.querySelector('#cart');
const cartItemsContainer = document.querySelector('.cart-items');

function renderCart() {
  cartItemsContainer.innerHTML = '';
  const totalCointainer = document.querySelector('.total-cart');

  let totalQuantity = 0;
  let totalPrice = 0;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p class="empty-cart-msg">Your cart is empty.</p>';
    return;
  }
  cart.forEach(item => {
    totalQuantity+= item.quantity;
    totalPrice+=item.quantity * item.price;

    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <div>
        <span>${item.name} ($${item.price} x ${item.quantity})</span>
      </div>
      <div>
        <button class="quantity-btn" onclick="decrementQuantity(${item.id})">-</button>
        <button class="quantity-btn" onclick="incrementQuantity(${item.id})">+</button>
        <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
      </div>
    `;
    cartItemsContainer.appendChild(cartItem);
    totalCointainer.innerHTML=`
      <p> Total Quantity: ${totalQuantity} </p>
      <p> Total Price: $${totalPrice.toFixed(2 )}</p>
    `
  });
}

// Add to cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const cartItem = cart.find(item => item.id === productId);
  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  renderCart();
}

// Increment quantity
function incrementQuantity(productId) {
  const cartItem = cart.find(item => item.id === productId);
  if (cartItem) {
    cartItem.quantity++;
  }
  renderCart();
}

// Decrement quantity
function decrementQuantity(productId) {
  const cartItem = cart.find(item => item.id === productId);
  if (cartItem) {
    cartItem.quantity--;
    if (cartItem.quantity === 0) {
      cart = cart.filter(item => item.id !== productId);
    }
  }
  renderCart();
}

// Remove from cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  renderCart();
}
// Toggle cart visibility
document.querySelector('#toggle-cart').addEventListener('click', () => {
  cartSection.classList.toggle('hidden');
});

// Close cart
document.querySelector('#close-cart').addEventListener('click', () => {
  cartSection.classList.add('hidden');
});
