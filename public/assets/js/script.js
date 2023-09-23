import goods from "./data.js";
let { clothes, sale, products } = goods;

function renderCategories() {
  clothes.map((product) => {
    const listCate = document.querySelector(".list-categories");
    let itemCate = document.createElement("a");
    itemCate.classList.add("item-cate");

    let itemImg = document.createElement("div");
    itemImg.classList.add("img");
    itemImg.style.backgroundImage = `url(${product.image})`;

    let itemDetail = document.createElement("div");
    itemDetail.classList.add("detail");
    itemDetail.innerHTML = product.name;

    itemCate.appendChild(itemImg);
    itemCate.appendChild(itemDetail);
    listCate.appendChild(itemCate);
  });
}
renderCategories();

function summerSale() {
  sale.map((item) => {
    const globalSale = document.querySelector(".global-sale");

    const firstA = document.createElement("a");
    firstA.setAttribute("href", "");
    const saleItem = document.createElement("div");
    saleItem.classList.add("sale-item");
    const secondA = document.createElement("a");
    secondA.setAttribute("href", "");

    const itemImg = document.createElement("div");
    itemImg.classList.add("item-img");
    const image = document.createElement("img");
    image.setAttribute("src", item.image);
    const overOut = document.createElement("div");
    overOut.classList.add("over-out");
    itemImg.appendChild(image);
    itemImg.appendChild(overOut);
    secondA.appendChild(itemImg);

    const discounts = document.createElement("div");
    discounts.classList.add("discount");

    const itemDiscount = document.createElement("div");
    itemDiscount.classList.add("item-discount");
    itemDiscount.innerHTML = "-" + item.discount + "%";
    const name = document.createElement("div");
    name.classList.add("name");
    name.innerHTML = item.name;

    discounts.appendChild(itemDiscount);
    discounts.appendChild(name);

    saleItem.appendChild(secondA);
    saleItem.appendChild(discounts);
    firstA.appendChild(saleItem);
    globalSale.appendChild(firstA);
  });
}
summerSale();

function renderProducts() {
  const content = document.querySelector(".content");
  products.map((item) => {
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
      content.appendChild(aDiv);
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
      content.appendChild(aDiv);
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
      content.appendChild(aDiv);
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
      content.appendChild(aDiv);
    }
  });
}
renderProducts();

function cart() {
  const order = JSON.parse(localStorage.getItem("order"));

  const numberOrder = document.querySelector(".header .number");
  numberOrder.innerHTML = order.length;
}

cart();

// function addProducts() {
//   const array = JSON.parse(localStorage.getItem("array"));
//   const numberItem = document.querySelector("header .number");
//   numberItem.innerHTML = array.length;

//   const btns = document.querySelectorAll(".add-to-cart");
//   const btn = Array.prototype.slice.call(btns);
//   let newArray = [...array];
//   btn.forEach((b) =>
//     b.addEventListener("click", () => {
//       const idProduct = b.getAttribute("id");
//       const productFind = products.find((el) => el.id === +idProduct);

//       newArray.push(productFind);
//       localStorage.setItem("array", JSON.stringify(newArray));

//       const numberItem = document.querySelector("header .number");
//       numberItem.innerHTML = newArray.length;
//     })
//   );
// }
// addProducts();

$("a[href='#top']").click(function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

function filterProduct() {
  const searchInput = document.querySelector(".search input");
  const searchBtn = document.querySelector(".search .find");
  const content = document.querySelector(".content");

  searchBtn.addEventListener("click", () => {
    let newValue = searchInput.value.toLowerCase();
    let filteredProducts = products.filter((item) =>
      item.discription.toLowerCase().includes(newValue)
    );

    content.innerHTML = "";

    filteredProducts.forEach((item) => {
      let contentItem = document.createElement("div");
      contentItem.classList.add("content-item");

      contentItem.innerHTML = `
      ${
        item.sale_off == null && item.choice == null
          ? `
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

            <div class="content-button">
              <button class="add-to-cart" id = ${item.id} >Add To Cart 🛒</button>
            </div>
          </div>
        
      `
          : ""
      }

      ${
        item.sale_off && item.choice == null
          ? `
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

                  <div class="content-button">
                    <button class="add-to-cart" id = ${item.id}>Add To Cart 🛒</button>
                  </div>
                </div>
          `
          : ""
      }
      
      ${
        item.sale_off == null && item.choice
          ? `
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

                  <div class="content-button">
                    <button class="add-to-cart" id = ${item.id}>Add To Cart 🛒</button>
                  </div>
                </div>
      `
          : ""
      }

      ${
        item.sale_off && item.choice
          ? `
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

                  <div class="content-button">
                    <button class="add-to-cart" id = ${item.id}>Add To Cart 🛒</button>
                  </div>
                </div>
        `
          : ""
      }
      `;
      content.appendChild(contentItem);
    });

    const btns = document.querySelectorAll(".add-to-cart");
    const btn = Array.prototype.slice.call(btns);
    array = JSON.parse(localStorage.getItem("array"));
    btn.forEach((b) =>
      b.addEventListener("click", () => {
        const idProduct = b.getAttribute("id");
        const productFind = products.find((el) => el.id === +idProduct);

        array.push(productFind);
        localStorage.setItem("array", JSON.stringify(array));

        const numberItem = document.querySelector("header .number");
        numberItem.innerHTML = array.length;
      })
    );
  });

  searchInput.addEventListener("change", () => {
    console.log(searchInput.value);
    let newValue = searchInput.value.toLowerCase();
    let filteredProducts = products.filter((item) =>
      item.discription.toLowerCase().includes(newValue)
    );

    content.innerHTML = "";

    filteredProducts.forEach((item) => {
      let contentItem = document.createElement("div");
      console.log(item.choice);
      contentItem.classList.add("content-item");

      contentItem.innerHTML = `
      ${
        item.sale_off == null && item.choice == null
          ? `
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

            <div class="content-button">
              <button class="add-to-cart" id = ${item.id} >Add To Cart 🛒</button>
            </div>
          </div>
        
      `
          : ""
      }

      ${
        item.sale_off && item.choice == null
          ? `
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

                  <div class="content-button">
                    <button class="add-to-cart" id = ${item.id}>Add To Cart 🛒</button>
                  </div>
                </div>
          `
          : ""
      }
      
      ${
        item.sale_off == null && item.choice
          ? `
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

                  <div class="content-button">
                    <button class="add-to-cart" id = ${item.id}>Add To Cart 🛒</button>
                  </div>
                </div>
      `
          : ""
      }

      ${
        item.sale_off && item.choice
          ? `
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

                  <div class="content-button">
                    <button class="add-to-cart" id = ${item.id}>Add To Cart 🛒</button>
                  </div>
                </div>
        `
          : ""
      }
      `;
      content.appendChild(contentItem);
    });

    const btns = document.querySelectorAll(".add-to-cart");
    const btn = Array.prototype.slice.call(btns);
    array = JSON.parse(localStorage.getItem("array"));
    btn.forEach((b) =>
      b.addEventListener("click", () => {
        console.log("aaaaa");
        const idProduct = b.getAttribute("id");
        const productFind = products.find((el) => el.id === +idProduct);

        array.push(productFind);
        localStorage.setItem("array", JSON.stringify(array));

        const numberItem = document.querySelector("header .number");
        numberItem.innerHTML = array.length;
      })
    );
  });

  // const btns = document.querySelectorAll(".add-to-cart");
  // const btn = Array.prototype.slice.call(btns);
  // let array = [];
  // btn.forEach((b) =>
  //   b.addEventListener("click", () => {
  //     console.log("aaaaa");
  //     const idProduct = b.getAttribute("id");
  //     const productFind = products.find((el) => el.id === +idProduct);

  //     array.push(productFind);
  //     localStorage.setItem("array", JSON.stringify(array));

  //     const numberItem = document.querySelector("header .number");
  //     numberItem.innerHTML = array.length;
  //   })
  // );
}
filterProduct();

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
