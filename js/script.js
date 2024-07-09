document.addEventListener("DOMContentLoaded", function () {
  // Toggle mobile menu
  const toggler = document.getElementById("toggler");
  const navbar = document.querySelector(".navbar");

  toggler.addEventListener("change", function () {
    navbar.classList.toggle("active", this.checked);
  });

  // Menambah Item ke Keranjang
  const cartButtons = document.querySelectorAll(".cart-btn");
  const cartIcon = document.querySelector(".fa-shopping-cart");

  cartButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      alert("Item added to cart!");
    });
  });

  // Menambah Item Ke Favorit

  const heartIcons = document.querySelectorAll(".fas.fa-heart");

  heartIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      // You can implement your own logic to handle favorites
      this.classList.toggle("active");
    });
  });
});
