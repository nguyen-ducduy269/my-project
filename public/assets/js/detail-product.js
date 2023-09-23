function renderDetailProduct() {
  const product = JSON.parse(localStorage.getItem("product"));

  const allProduct = document.querySelector(".detail-product");
  allProduct.innerHTML = `
    <div class="detail">
        <div class="main-img">
            <img src="${product[0].image}" alt="" />
        </div>

        <div class="main-content">
            <div class="product-discription"><b>${product[0].discription}</b></div>
            <div class="more-infor">Vote ${product[0].next_sold} star - ${product[0].first_sold}</div>
            <div class="product-price"><b>Price: đ${product[0].price}</b></div>

            <div class="add-cart">
                <div class="shipping">
                    <p>Ship to</p>

                    <div class="location">
                    <i class="fa-solid fa-location-dot"></i>
                    Ha Noi
                    </div>
                </div>

                <div class="shipping-price">
                    <p>Shipping: <b>đ${product[0].price}</b></p>

                    <p>Estimated delivery on Sep</p>
                </div>
                <button class="add-to-cart">Add To Cart</button>
            </div>
        </div>
    </div>
  `;
}

renderDetailProduct();

const order = [];
function addToCart() {
  const addToCartBtn = document.querySelector(".add-to-cart");
  const product = JSON.parse(localStorage.getItem("product"));
  const orderItem = JSON.parse(localStorage.getItem("order"));

  addToCartBtn.addEventListener("click", () => {
    alert("Success to add to cart!");
    orderItem.push(product);

    localStorage.setItem("order", JSON.stringify(orderItem));

    const numberChange = document.querySelector(".header .number");
    numberChange.innerHTML = orderItem.length;
  });
}

addToCart();

function cart() {
  const order = JSON.parse(localStorage.getItem("order"));

  const numberOrder = document.querySelector(".header .number");
  numberOrder.innerHTML = order.length;
}

cart();
