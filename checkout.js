const cart = JSON.parse(localStorage.getItem('cart')) || [];
const totalPriceElement = document.getElementById('total-price');
const cartItemsElement = document.getElementById('cart-items');

// Display cart items
cart.forEach(item => {
  const div = document.createElement('div');
  div.classList.add('cart-item');
  div.innerHTML = `<p>${item.productName} - $${item.price.toFixed(2)}</p>`;
  cartItemsElement.appendChild(div);
});

// Calculate total price
const totalPrice = cart.reduce((total, item) => total + item.price, 0);
totalPriceElement.textContent = totalPrice.toFixed(2);

function processPayment() {
  const cardNumber = document.getElementById('card-number').value;
  const cardExpiry = document.getElementById('card-expiry').value;
  const cardCvc = document.getElementById('card-cvc').value;

  if (cardNumber && cardExpiry && cardCvc) {
    alert('Payment successful! Thank you for your purchase.');
    localStorage.removeItem('cart'); // Clear the cart after successful payment
    window.location.href = 'index.html'; // Redirect to main page
  } else {
    alert('Please fill in all payment details.');
  }
}
