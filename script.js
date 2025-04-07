let cart = [];
let cartCount = 0;

function addToCart(productName, price) {
  cart.push({ productName, price });
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;
}

function goToCheckout() {
  localStorage.setItem('cart', JSON.stringify(cart)); // Store cart data in localStorage
  window.location.href = 'checkout.html'; // Redirect to checkout page
}
