function renderDetailProduct() {
  const product = JSON.parse(localStorage.getItem("product"));

  const allProduct = document.querySelector(".detail-product");
  allProduct.innerHTML = `
    <div class="detail">
        <div class="main-img">
            <img src="${product[0]}" alt="" />
        </div>

        <div class="main-content">
            <div class="product-discription"><b>${product[4]}</b></div>
            <div class="more-infor">Vote ${product[2]}, ${product[1]}</div>
            <div class="product-price"><b>Price: đ${product[3]}</b></div>

            <div class="add-cart">
                <div class="shipping">
                    <p>Ship to</p>

                    <div class="location">
                    <i class="fa-solid fa-location-dot"></i>
                    Ha Noi
                    </div>
                </div>

                <div class="shipping-price">
                    <p>Shipping: <b>${product[3]}</b></p>

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
    alert("Bạn đã thêm vào giỏ hàng thành công!");
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
