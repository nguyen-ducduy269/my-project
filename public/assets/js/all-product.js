import goods from "./data.js";
let { allProducts } = goods;

function renderAllProducts() {
  const renderProducts = document.querySelector(".all-product .product");
  allProducts.map((item) => {
    const contentItem = document.createElement("div");
    const aDiv = document.createElement("a");
    aDiv.setAttribute("href", "detail-product.html");
    contentItem.classList.add("content-item");

    if (item.sale_off == null && item.choice == null) {
      contentItem.innerHTML += `
            <img
              class="content-img"
              src=${item.image}
              alt=""
            />
            <div class="product-item">
              <div class="item-price">
                ₫
                <p style="font-size: 20px">${item.price}</p>
              </div>
  
              <div class="sold">
                <span>${item.first_sold}</span>
                <img src="./assets/image/product/48x48.png" alt="" />
                <span class="next-sold">${item.next_sold}</span>
              </div>
  
              <div class="discription">${item.discription}</div>
  
              <div class="shipping">Free shipping</div>
            </div>
        `;
      aDiv.appendChild(contentItem);
      renderProducts.appendChild(aDiv);
    }
    if (item.sale_off && item.choice == null) {
      contentItem.innerHTML += `
                  <img
                    class="content-img"
                    src=${item.image}
                    alt=""
                  />
                  <div class="product-item">
                    <div class="item-price">
                      ₫
                      <p style="font-size: 20px">${item.price}</p>
                    </div>
  
                    <div class="sale-off">${item.sale_off}</div>
  
                    <div class="sold">
                      <span>${item.first_sold}</span>
                      <img src="./assets/image/product/48x48.png" alt="" />
                      <span class="next-sold">${item.next_sold}</span>
                    </div>
  
                    <div class="discription">${item.discription}</div>
  
                    <div class="shipping">Free shipping</div>
                  </div>
                  `;
      aDiv.appendChild(contentItem);
      renderProducts.appendChild(aDiv);
    }
    if (item.sale_off == null && item.choice) {
      contentItem.innerHTML += `
                  <img
                    class="content-img"
                    src=${item.image}
                    alt=""
                  />
                  <div class="product-item">
                    <div class="item-price">
                      <p class="after-price">₫${item.after_price}</p>
                      <p class="befor-price">₫${item.before_price}</p>
                    </div>
  
                    <div class="choice">
                      <img src=${item.choice[0]} alt="" />
                      <img src=${item.choice[1]} alt="" />
                    </div>
  
                    <div class="sold">
                      <span>${item.first_sold}</span>
                      <img src="./assets/image/product/48x48.png" alt="" />
                      <span class="next-sold">${item.next_sold}</span>
                    </div>
  
                    <div class="discription">${item.discription}</div>
  
                    <div class="shipping">Free shipping</div>
                  </div>
                  `;
      aDiv.appendChild(contentItem);
      renderProducts.appendChild(aDiv);
    }
    if (item.sale_off && item.choice) {
      contentItem.innerHTML += `
                  <img
                    class="content-img"
                    src=${item.image}
                    alt=""
                  />
                  <div class="product-item">
                    <div class="item-price">
                      ₫
                      <p style="font-size: 20px">${item.price}</p>
                    </div>
  
                    <div class="sale-off">${item.sale_off}</div>
                    <div class="choice">
                      <img
                        src=${item.choice}
                        alt=""
                      />
                    </div>
  
                    <div class="sold">
                      <span>${item.first_sold}</span>
                      <img src="./assets/image/product/48x48.png" alt="" />
                      <span class="next-sold">${item.next_sold}</span>
                    </div>
  
                    <div class="discription">${item.discription}</div>
  
                    <div class="shipping">Free shipping</div>
                  </div>
                  `;
      aDiv.appendChild(contentItem);
      renderProducts.appendChild(aDiv);
    }
  });
}
renderAllProducts();

function numberOrder() {
  const array = Array(localStorage.getItem("array"));
  const numberItem = document.querySelector("header .number");
  numberItem.innerHTML = array.length;
}
numberOrder();

const product = [];
const detailProducts = () => {
  const contentItem = document.querySelectorAll(".content-item");

  contentItem.forEach((item) => {
    item.addEventListener("click", () => {
      const imageItem = item.querySelector("img");
      const imageSrc = imageItem.getAttribute("src");

      const itemPrice = item.querySelector(".item-price p").innerHTML;
      const soldNumber = item.querySelector(".sold span").innerHTML;
      const vote = item.querySelector(".next-sold").innerHTML;
      const discription = item.querySelector(".discription").innerHTML;
      product.push(imageSrc, soldNumber, vote, itemPrice, discription);
      localStorage.setItem("product", JSON.stringify(product));
    });
  });
};

detailProducts();

function cart() {
  const order = JSON.parse(localStorage.getItem("order"));

  const numberOrder = document.querySelector(".header .number");
  numberOrder.innerHTML = order.length;
}

cart();
