// Simple cart functionality (basic example)
let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    alert(`${productName} added to cart!`);
}

// Attach to buttons (in a real site, use event listeners)
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const name = product.querySelector('h3').textContent;
        const price = parseFloat(product.querySelector('p').textContent.replace('$', ''));
        addToCart(name, price);
    });
});