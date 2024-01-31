const cartToggle = document.querySelector('#cart')
const cartContainer = document.querySelector('.cart')
const bodyElement = document.body

const plusBtn = document.querySelector('.btn-plus');
const minusBtn = document.querySelector('.btn-minus');
const addToCartBtn = document.querySelector('.btn-add');
const deleteBtn = document.querySelector('.delete');

const quantityElement = document.querySelector('.count .amount');
const cartList = document.querySelector('.cart-list');

const totalIndicator = document.querySelector('.cart-icon .total')
let quantity = 0;
let totalQuantity = 0;

cartToggle.addEventListener('click', (e) => {
    e.stopPropagation()
    cartContainer.classList.toggle("hidden")
})

cartContainer.addEventListener('click', (e) => {
    e.stopPropagation()
})


bodyElement.addEventListener("click", () => {
    cartContainer.classList.add("hidden")
})





plusBtn.addEventListener('click', function () {
    quantity++;
    updateQuantity();
});

minusBtn.addEventListener('click', function () {
    if (quantity > 0) {
        quantity--;
        updateQuantity();
    }
});

addToCartBtn.addEventListener('click', function () {
    if (quantity > 0) {
        addToCart();
        resetQuantity();
    }

    updateTotalQuantity()
});

deleteBtn?.addEventListener('click', function () {
    deleteCartItem();
});

function updateQuantity() {
    quantityElement.textContent = quantity;
}

function addToCart() {
    const productName = document.querySelector('.details h2').textContent.trim();
    const productPrice = document.querySelector('.current-price').textContent.trim().split(' ')[0];
    const totalPrice = calculateTotalPrice(quantity, productPrice);

    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
        <img class="thumbnail" src="./images/image-product-1-thumbnail.jpg" alt="">
        <div>
          <p class="title color-primary-300">${productName}</p>
          <p class="quantity color-primary-300">${productPrice} x ${quantity} 
            <span class="total fw-700 color-primary-500">$${totalPrice}</span>
          </p>
        </div>
        <button class="delete"><img src="./images/icon-delete.svg" alt=""></button>
      `;

    cartList.appendChild(cartItem);

    // Add event listener to the delete button of the new cart item
    const newDeleteBtn = cartItem.querySelector('.delete');
    newDeleteBtn.addEventListener('click', function () {
        deleteCartItem(cartItem);
    });
}

function calculateTotalPrice(quantity, price) {
    const numericPrice = parseFloat(price.replace('$', ''));
    return (quantity * numericPrice).toFixed(2);
}

function resetQuantity() {
    quantity = 0;
    updateQuantity();
}

function deleteCartItem(cartItem) {
    // If cartItem is not provided, delete the last cart item
    if (!cartItem) {
        const cartItems = document.querySelectorAll('.cart-item');
        cartItem = cartItems[cartItems.length - 1];
    }

    cartItem.remove();
    updateTotalQuantity()
}


function updateTotalQuantity() {
    const cartItemQuantityElements = document.querySelectorAll('.cart-item .quantity');
    totalQuantity = 0
    cartItemQuantityElements.forEach(element => {
        const match = element.innerText.match(/\sx (\d+)/);
        if (match) {
            const quantity = parseInt(match[1], 10);
            totalQuantity += quantity;
        }
    });

    totalIndicator.innerText = totalQuantity == 0 ? '' : totalQuantity;
}