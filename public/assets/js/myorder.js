const shoppingItem = JSON.parse(localStorage.getItem("array"));

const orderH1 = document.querySelector(".orders h1");
orderH1.innerHTML = "Shopping Cart" + " " + "(" + shoppingItem.length + ")";

function renderProduct() {
  const myOrder = document.querySelector(".my-order");
  if (shoppingItem.length == 0) {
    myOrder.innerHTML = `
    <div class="number-products">
      <p>There are currently no products.</p>
    </div>
    `;
  } else {
    shoppingItem.map((item) => {
      const order = document.createElement("div");
      order.classList.add("order");

      order.innerHTML += `
      ${
        item.type == "ring" && item.after_price == null
          ? `
        <label class="checkbox-inline">
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>
        <img src=${item.image} alt="" />
        <div class="order-detail">
            <p>${item.discription}</p>
    
            <div class="order-cost">VND ₫<span>${item.price}</span></div>
            <div class="shipping">Free shipping</div>
    
            <div class="size-ring">
                <p>Choose size ring: 7</p>
                <div>
                    <button value="7" class="value-7 size-ring-active">7</button>
                    <button value="8" class="value-8">8</button>
                    <button value="9" class="value-9">9</button>
                </div>
            </div>
    
            <div class="to-summary">
            <div class="quantities">
                <button class="decrease">-</button>
                <div class="quantity">1</div>
                <button class="increase">+</button>
            </div>
    
            <button class="delete">
                <i class="fa-regular fa-trash-can"></i>
            </button>
            </div>
        </div>
      `
          : ""
      }
    
      ${
        item.type != "ring" && item.after_price == null
          ? `
          <label class="checkbox-inline">
            <input type="checkbox">
            <span class="checkmark"></span>
          </label>
          <img src=${item.image} alt="" />
          <div class="order-detail">
              <p>${item.discription}</p>
      
              <div class="order-cost">VND ₫<span>${item.price}</span></div>
              <div class="shipping">Free shipping</div>
      
              <div class="to-summary">
              <div class="quantities">
                  <button class="decrease">-</button>
                  <div class="quantity">1</div>
                  <button class="increase">+</button>
              </div>
      
              <button class="delete">
                  <i class="fa-regular fa-trash-can"></i>
              </button>
              </div>
          </div>
      `
          : ""
      }
    
      ${
        item.after_price && item.price == null
          ? `
        <label class="checkbox-inline">
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>
        <img src=${item.image} alt="" />
        <div class="order-detail">
            <p>${item.discription}</p>
    
            <div class="order-cost">VND ₫<span>${item.after_price}</span></div>
            <div class="shipping">Free shipping</div>
    
            <div class="to-summary">
            <div class="quantities">
                <button class="decrease">-</button>
                <div class="quantity">1</div>
                <button class="increase">+</button>
            </div>
    
            <button class="delete">
                <i class="fa-regular fa-trash-can"></i>
            </button>
            </div>
        </div>
        `
          : ""
      }
      `;
      myOrder.appendChild(order);
    });
  }
}

function changeRingValue() {
  const sizeRing = document.querySelectorAll(".size-ring");

  sizeRing.forEach((item) => {
    const ringSize7 = item.querySelector(".value-7");
    const ringSize8 = item.querySelector(".value-8");
    const ringSize9 = item.querySelector(".value-9");
    const valueRing = item.querySelector(".size-ring p");

    ringSize7.addEventListener("click", () => {
      ringSize7.classList.add("size-ring-active");
      ringSize8.classList.remove("size-ring-active");
      ringSize9.classList.remove("size-ring-active");
      valueRing.innerHTML = "Choose size ring: " + ringSize7.value;
    });

    ringSize8.addEventListener("click", () => {
      ringSize7.classList.remove("size-ring-active");
      ringSize8.classList.add("size-ring-active");
      ringSize9.classList.remove("size-ring-active");
      valueRing.innerHTML = "Choose size ring: " + ringSize8.value;
    });

    ringSize9.addEventListener("click", () => {
      ringSize7.classList.remove("size-ring-active");
      ringSize8.classList.remove("size-ring-active");
      ringSize9.classList.add("size-ring-active");
      valueRing.innerHTML = "Choose size ring: " + ringSize9.value;
    });
  });
}

function changeQuantities() {
  const decreaseBtn = document.querySelectorAll(".decrease");
  const quantityValue = document.querySelectorAll(".quantity");
  const increaseBtn = document.querySelectorAll(".increase");
  const deleteBtn = document.querySelectorAll(".delete");
  const shoppingItem = JSON.parse(localStorage.getItem("array"));

  for (let i = 0; i < shoppingItem.length; i++) {
    if (shoppingItem[i].price && shoppingItem[i].after_price == null) {
      decreaseBtn[i].addEventListener("click", () => {
        let quantities = Number(quantityValue[i].innerHTML);
        if (quantities > 1) {
          quantities -= 1;
          quantityValue[i].innerHTML = quantities;
        }
      });

      increaseBtn[i].addEventListener("click", () => {
        let quantities = Number(quantityValue[i].innerHTML);
        quantities += 1;
        quantityValue[i].innerHTML = quantities;
      });

      deleteBtn[i].addEventListener("click", () => {
        if (confirm("You definitely want to delete this product?")) {
          const listItem = JSON.parse(localStorage.getItem("array"));
          listItem.splice(i, 1);
          localStorage.setItem("array", JSON.stringify(listItem));
          window.location.reload();
        }
      });
    } else if (shoppingItem[i].price == null && shoppingItem[i].after_price) {
      decreaseBtn[i].addEventListener("click", () => {
        let quantities = Number(quantityValue[i].innerHTML);
        if (quantities > 1) {
          quantities -= 1;
          quantityValue[i].innerHTML = quantities;
        }
      });

      increaseBtn[i].addEventListener("click", () => {
        let quantities = Number(quantityValue[i].innerHTML);
        quantities += 1;
        quantityValue[i].innerHTML = quantities;
      });

      deleteBtn[i].addEventListener("click", () => {
        if (confirm("There are currently no products?")) {
          const listItem = JSON.parse(localStorage.getItem("array"));
          listItem.splice(i, 1);
          localStorage.setItem("array", JSON.stringify(listItem));
          window.location.reload();
        }
      });
    }
  }
}

function totalPrice() {
  const checkBox = document.querySelectorAll(".checkbox-inline input");
  const totalPriceElement = document.querySelector(".price span");
  const prices = [];

  checkBox.forEach((item) => {
    item.addEventListener("click", () => {
      const currentPrice = parseFloat(
        item.parentElement.parentElement.querySelector(".order-cost span")
          .innerHTML
      );

      const currentQuantity = parseInt(
        item.parentElement.parentElement.querySelector(".quantities .quantity")
          .innerHTML
      );

      let totalCurrentPrice = currentPrice * currentQuantity;
      console.log("currentPrice", currentPrice);
      console.log("currentQuantity", currentQuantity);
      console.log("totalCurrentPrice", totalCurrentPrice);

      const isChecked = item.checked;
      if (isChecked) {
        prices.push(totalCurrentPrice);
      } else if (!isChecked) {
        const indexPrice = prices.indexOf(totalCurrentPrice);
        if (indexPrice > -1) {
          prices.splice(indexPrice, 1);
        }
      }

      let totalPrice = 0;
      prices.forEach((price) => {
        totalPrice += price;
      });

      console.log("totalPrice", totalPrice);

      totalPriceElement.innerHTML = totalPrice.toFixed(3);
    });
  });
}

const items = [];
function renderTotalProduct() {
  const checkBox = document.querySelectorAll(".checkbox-inline input");
  const summaryH1 = document.querySelector(".sum .submit");

  checkBox.forEach((item) => {
    item.addEventListener("click", () => {
      const parentElement = item.parentNode.parentNode;

      const nameItem = parentElement.querySelector(".order-detail p").innerHTML;

      const imageItem = parentElement.querySelector("img");
      const imageItemSrc = imageItem.src;

      const unitPrice = Number(
        parentElement.querySelector(".order-cost span").innerHTML
      );

      const quantity = parentElement.querySelector(".quantity").innerHTML;

      const productPrice = unitPrice * quantity;

      items.push({
        imageItemSrc: imageItemSrc,
        nameItem: nameItem,
        unitPrice: unitPrice,
        quantity: quantity,
        productPrice: productPrice,
      });

      for (let i = 0; i < items.length; i++) {
        summaryH1.addEventListener("click", () => {
          localStorage.setItem("items", JSON.stringify(items));
        });
      }
    });
  });
}

function filterProduct() {
  const searchInput = document.querySelector(".search input");
  const searchBtn = document.querySelector(".search .find");
  const myOrder = document.querySelector(".my-order");
  const shoppingItem = JSON.parse(localStorage.getItem("array"));

  searchBtn.addEventListener("click", () => {
    let newValue = searchInput.value.toLowerCase();
    let filteredProducts = shoppingItem.filter((item) =>
      item.discription.toLowerCase().includes(newValue)
    );

    myOrder.innerHTML = "";

    filteredProducts.forEach((item) => {
      const order = document.createElement("div");
      order.classList.add("order");

      order.innerHTML = `
      ${
        item.type == "ring" && item.after_price == null
          ? `
            <label class="checkbox-inline">
              <input type="checkbox">
              <span class="checkmark"></span>
            </label>
            <img src=${item.image} alt="" />
            <div class="order-detail">
                <p>${item.discription}</p>
        
                <div class="order-cost">VND ₫<span>${item.price}</span></div>
                <div class="shipping">Free shipping</div>
        
                <div class="size-ring">
                    <p>Choose size ring: 7</p>
                    <div>
                        <button value="7" class="value-7 size-ring-active">7</button>
                        <button value="8" class="value-8">8</button>
                        <button value="9" class="value-9">9</button>
                    </div>
                </div>
        
                <div class="to-summary">
                <div class="quantities">
                    <button class="decrease">-</button>
                    <div class="quantity">1</div>
                    <button class="increase">+</button>
                </div>
        
                <button class="delete">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
                </div>
            </div>
          `
          : ""
      }
    
      ${
        item.type != "ring" && item.after_price == null
          ? `
          <label class="checkbox-inline">
            <input type="checkbox">
            <span class="checkmark"></span>
          </label>
          <img src=${item.image} alt="" />
          <div class="order-detail">
              <p>${item.discription}</p>
      
              <div class="order-cost">VND ₫<span>${item.price}</span></div>
              <div class="shipping">Free shipping</div>
      
              <div class="to-summary">
              <div class="quantities">
                  <button class="decrease">-</button>
                  <div class="quantity">1</div>
                  <button class="increase">+</button>
              </div>
      
              <button class="delete">
                  <i class="fa-regular fa-trash-can"></i>
              </button>
              </div>
          </div>
      `
          : ""
      }
    
      ${
        item.after_price && item.price == null
          ? `
        <label class="checkbox-inline">
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>
        <img src=${item.image} alt="" />
        <div class="order-detail">
            <p>${item.discription}</p>
    
            <div class="order-cost">VND ₫<span>${item.after_price}</span></div>
            <div class="shipping">Free shipping</div>
    
            <div class="to-summary">
            <div class="quantities">
                <button class="decrease">-</button>
                <div class="quantity">1</div>
                <button class="increase">+</button>
            </div>
    
            <button class="delete">
                <i class="fa-regular fa-trash-can"></i>
            </button>
            </div>
        </div>
        `
          : ""
      }
      `;
      myOrder.appendChild(order);
    });

    changeRingValue();

    const decreaseBtn = document.querySelectorAll(".decrease");
    const increaseBtn = document.querySelectorAll(".increase");
    const deleteBtn = document.querySelectorAll(".delete");

    decreaseBtn.forEach((item) => {
      item.addEventListener("click", () => {
        let quantity = Number(
          item.parentNode.querySelector(".quantity").innerHTML
        );
        if (quantity > 1) {
          quantity -= 1;
          item.parentNode.querySelector(".quantity").innerHTML = quantity;
        }
      });
    });

    increaseBtn.forEach((item) => {
      item.addEventListener("click", () => {
        let quantity = Number(
          item.parentNode.querySelector(".quantity").innerHTML
        );
        quantity += 1;
        item.parentNode.querySelector(".quantity").innerHTML = quantity;
      });
    });

    deleteBtn.forEach((item) => {
      item.addEventListener("click", () => {
        if (confirm("You definitely want to delete this product?")) {
          const listItem = JSON.parse(localStorage.getItem("array"));
          listItem.splice(item, 1);
          localStorage.setItem("array", JSON.stringify(listItem));
          window.location.reload();
        }
      });
    });

    totalPrice();
  });

  searchInput.addEventListener("change", () => {
    let newValue = searchInput.value.toLowerCase();
    let filteredProducts = shoppingItem.filter((item) =>
      item.discription.toLowerCase().includes(newValue)
    );

    myOrder.innerHTML = "";

    filteredProducts.forEach((item) => {
      const order = document.createElement("div");
      order.classList.add("order");

      order.innerHTML = `
      ${
        item.type == "ring" && item.after_price == null
          ? `
        <label class="checkbox-inline">
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>
        <img src=${item.image} alt="" />
        <div class="order-detail">
            <p>${item.discription}</p>
    
            <div class="order-cost">VND ₫<span>${item.price}</span></div>
            <div class="shipping">Free shipping</div>
    
            <div class="size-ring">
                <p>Choose size ring: 7</p>
                <div>
                    <button value="7" class="value-7 size-ring-active">7</button>
                    <button value="8" class="value-8">8</button>
                    <button value="9" class="value-9">9</button>
                </div>
            </div>
    
            <div class="to-summary">
            <div class="quantities">
                <button class="decrease">-</button>
                <div class="quantity">1</div>
                <button class="increase">+</button>
            </div>
    
            <button class="delete">
                <i class="fa-regular fa-trash-can"></i>
            </button>
            </div>
        </div>
      `
          : ""
      }
    
      ${
        item.type != "ring" && item.after_price == null
          ? `
          <label class="checkbox-inline">
            <input type="checkbox">
            <span class="checkmark"></span>
          </label>
          <img src=${item.image} alt="" />
          <div class="order-detail">
              <p>${item.discription}</p>
      
              <div class="order-cost">VND ₫<span>${item.price}</span></div>
              <div class="shipping">Free shipping</div>
      
              <div class="to-summary">
              <div class="quantities">
                  <button class="decrease">-</button>
                  <div class="quantity">1</div>
                  <button class="increase">+</button>
              </div>
      
              <button class="delete">
                  <i class="fa-regular fa-trash-can"></i>
              </button>
              </div>
          </div>
      `
          : ""
      }
    
      ${
        item.after_price && item.price == null
          ? `
        <label class="checkbox-inline">
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>
        <img src=${item.image} alt="" />
        <div class="order-detail">
            <p>${item.discription}</p>
    
            <div class="order-cost">VND ₫<span>${item.after_price}</span></div>
            <div class="shipping">Free shipping</div>
    
            <div class="to-summary">
            <div class="quantities">
                <button class="decrease">-</button>
                <div class="quantity">1</div>
                <button class="increase">+</button>
            </div>
    
            <button class="delete">
                <i class="fa-regular fa-trash-can"></i>
            </button>
            </div>
        </div>
        `
          : ""
      }
      `;
      myOrder.appendChild(order);
    });

    changeRingValue();

    const decreaseBtn = document.querySelectorAll(".decrease");
    const increaseBtn = document.querySelectorAll(".increase");
    const deleteBtn = document.querySelectorAll(".delete");

    decreaseBtn.forEach((item) => {
      item.addEventListener("click", () => {
        let quantity = Number(
          item.parentNode.querySelector(".quantity").innerHTML
        );
        if (quantity > 1) {
          quantity -= 1;
          item.parentNode.querySelector(".quantity").innerHTML = quantity;
        }
      });
    });

    increaseBtn.forEach((item) => {
      item.addEventListener("click", () => {
        let quantity = Number(
          item.parentNode.querySelector(".quantity").innerHTML
        );
        quantity += 1;
        item.parentNode.querySelector(".quantity").innerHTML = quantity;
      });
    });

    deleteBtn.forEach((item) => {
      item.addEventListener("click", () => {
        if (confirm("You definitely want to delete this product?")) {
          const listItem = JSON.parse(localStorage.getItem("array"));
          listItem.splice(item, 1);
          localStorage.setItem("array", JSON.stringify(listItem));
          window.location.reload();
        }
      });
    });

    totalPrice();
  });
}

function runWebsite() {
  renderProduct();
  changeRingValue();
  changeQuantities();
  totalPrice();
  filterProduct();
  renderTotalProduct();
}
runWebsite();
