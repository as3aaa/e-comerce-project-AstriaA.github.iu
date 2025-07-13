const products = [
    {
        name: "Chocolate Cupcake",
        image: "images/chocolate cupcake.jpg",
        description: "Cupcake cokelat premium dengan lapisan ganache lembut dan taburan cokelat serut yang meleleh di mulut.",
        price: "Rp 25.000"
    },
    {
        name: "Vanilla Cupcake",
        image: "images/vanilla cupcake.jpg",
        description: "Perpaduan sempurna antara bolu vanila klasik dan buttercream lembut yang manis dan harum.",
        price: "Rp 20.000"
    },
    {
        name: "Strawberry Cupcake",
        image: "images/strawberry cupcake.jpg",
        description: "Rasa stroberi segar dalam setiap gigitan, dengan topping krim pink manis dan potongan buah asli.",
        price: "Rp 22.000"
    },
    {
        name: "Red Velvet cupcake",
        image: "images/red.jpg",
        description: "Red velvet lembut dengan warna merah menggoda, disempurnakan dengan krim keju yang creamy dan sedikit asam.",
        price: "Rp 22.000"
    },
     {
        name: "Carrot Cupcake",
        image: "images/carrot.jpg",
        description: "Cupcake wortel sehat dengan kayu manis dan kacang walnut cincang, ditutup krim keju yang lembut dan tidak terlalu manis.",
        price: "Rp 22.000"
    }
];

const cart = [];

function renderProducts() {
    const gallery = document.querySelector('.cupcake-gallery');
    gallery.innerHTML = '';
    products.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.className = 'cupcake-item';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p class="caption">${product.description}</p>
            <p class="price">${product.price}</p>
            <button class="add-to-cart-btn" data-index="${index}">Tambah ke Keranjang</button>
        `;
        gallery.appendChild(productDiv);
    });

    // Add event listeners to all add to cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productIndex = button.getAttribute('data-index');
            addToCart(products[productIndex]);
        });
    });
}

function addToCart(product) {
    cart.push(product);
    alert(`${product.name} telah ditambahkan ke keranjang.`);
}

document.getElementById('toggleFlavorsBtn').addEventListener('click', function() {
    const flavorList = document.getElementById('flavorList');
    if (flavorList.classList.contains('hidden')) {
        flavorList.classList.remove('hidden');
        this.textContent = 'Sembunyikan Rasa Cupcake';
    } else {
        flavorList.classList.add('hidden');
        this.textContent = 'Tampilkan Rasa Cupcake';
    }
});

// Render products on page load
renderProducts();
