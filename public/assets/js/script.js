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

            <div class="content-button">
              <button class="add-to-cart" id = ${item.id} >Add To Cart 🛒</button>
            </div>
          </div>
      `;
      content.appendChild(contentItem);
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

                  <div class="content-button">
                    <button class="add-to-cart" id = ${item.id}>Add To Cart 🛒</button>
                  </div>
                </div>
                `;
      content.appendChild(contentItem);
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

                  <div class="content-button">
                    <button class="add-to-cart" id = ${item.id}>Add To Cart 🛒</button>
                  </div>
                </div>
                `;
      content.appendChild(contentItem);
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

                  <div class="content-button">
                    <button class="add-to-cart" id = ${item.id}>Add To Cart 🛒</button>
                  </div>
                </div>
                `;
      content.appendChild(contentItem);
    }
  });
}
renderProducts();

// account log
function signUp() {
  const signUpButton = document.querySelector(".contain .register");
  const accSignUp = document.querySelector(".account-sign-up");

  signUpButton.addEventListener("click", () => {
    accSignUp.classList.add("sign-active");
    signUpForm();
  });

  const closeAccSignUp = document.querySelector(".sign-up-title button");
  closeAccSignUp.addEventListener("click", () => {
    accSignUp.classList.remove("sign-active");
  });
}
signUp();

function signUpForm() {
  const fullName = document.getElementById("full-name");
  fullName.addEventListener("click", (e) => {
    e.target.value = "";
  });
  const emailSignUp = document.getElementById("email-sign-up");
  emailSignUp.addEventListener("click", (e) => {
    e.target.value = "";
  });
  const passSignUp = document.getElementById("password-sign-up");
  passSignUp.addEventListener("click", (e) => {
    e.target.value = "";
  });
  const reEnterPass = document.getElementById("password-re-enter");
  reEnterPass.addEventListener("click", (e) => {
    e.target.value = "";
  });

  const accSignUp = document.querySelector(".account-sign-up");
  const createAcc = document.querySelector(".create-account");
  createAcc.addEventListener("click", () => {
    let fullNameValue = fullName.value;
    let emailValue = emailSignUp.value;
    let passValue = passSignUp.value;
    let reEnterPassValue = reEnterPass.value;
    console.log("1", fullNameValue);
    console.log("2", emailValue);
    console.log("3", passValue);
    console.log("4", reEnterPassValue);
    if (!fullNameValue && emailValue && passValue && reEnterPassValue) {
      alert("You have not entered your name!");
    }
    if (fullNameValue && !emailValue && passValue && reEnterPassValue) {
      alert("You must log in to your account!");
    }
    if (fullNameValue && emailValue && !passValue && reEnterPassValue) {
      alert("You have not entered your password!");
    }
    if (fullNameValue && emailValue && passValue && !reEnterPassValue) {
      alert("Please re-enter your password!");
    }
    if (fullNameValue && emailValue && passValue && reEnterPassValue) {
      if (passValue != reEnterPassValue) {
        alert("Re-entered password is incorrect!");
      } else if (passValue == reEnterPassValue) {
        const account = {
          full_name: fullName.value,
          email: emailSignUp.value,
          password: passSignUp.value,
        };
        localStorage.setItem("account", JSON.stringify(account));
        accSignUp.classList.remove("sign-active");
        alert("You have successfully registered an account!");
      }
    }
  });
}

function signIn() {
  const signInButton = document.querySelector(".contain .sign-in");
  const accSignIn = document.querySelector(".account-sign-in");

  signInButton.addEventListener("click", () => {
    accSignIn.classList.add("sign-active");
    signInForm();
  });

  const closeAccSignIn = document.querySelector(".sign-in-title button");
  closeAccSignIn.addEventListener("click", () => {
    accSignIn.classList.remove("sign-active");
  });
}
signIn();

function signInForm() {
  const localAccount = JSON.parse(localStorage.getItem("account"));
  console.log("localAccount", localAccount);

  const emailSignIn = document.getElementById("email-sign-in");
  emailSignIn.addEventListener("click", (e) => {
    e.target.value = "";
  });
  const passSignIn = document.getElementById("pass-sign-in");
  passSignIn.addEventListener("click", (e) => {
    e.target.value = "";
  });

  const accSignIn = document.querySelector(".account-sign-in");
  const signInBtn = document.querySelector(".sign-in-button");
  signInBtn.addEventListener("click", () => {
    let emailSignInValue = emailSignIn.value;
    let passSignInValue = passSignIn.value;

    if (emailSignInValue && !passSignInValue) {
      alert("You must enter an account!");
    }
    if (emailSignInValue && !passSignInValue) {
      alert("You must enter a password!");
    }
    if (emailSignInValue && passSignInValue) {
      if (
        emailSignInValue != localAccount.email &&
        passSignInValue == localAccount.password
      ) {
        alert("Wrong account!");
      }
      if (
        emailSignInValue == localAccount.email &&
        passSignInValue != localAccount.password
      ) {
        alert("Wrong password!");
      }
      if (
        emailSignInValue == localAccount.email &&
        passSignInValue == localAccount.password
      ) {
        alert("Successful login!");
        accSignIn.classList.remove("sign-active");

        const main = document.querySelector(".main");
        main.innerHTML = "";
        main.innerHTML += `
            <div class="main">
              <div class="account">
                <img src="./assets/image/account.webp" alt="" />
              </div>
              <div class="aftext">Hi ${localAccount.full_name} <br />Welcome to AliExpress</div>

              <div class="account-contact">
                <a href="">
                  <img src="./assets/image/user.png" alt="" />
                  <h4>Account</h4>
                </a>

                <a href="myorder.html">
                  <img src="./assets/image/clipboard.png" alt="" />
                  <h4>Orders</h4>
                </a>

                <a href="">
                  <img id="log-out" src="./assets/image/logout.png" alt="" />
                  <h4>Log out</h4>
                </a>
              </div>
            </div>
            `;
        addToCart();
        addProducts();
        logOut();

        const cartItem = document.querySelector(".shopping a");
        cartItem.setAttribute("href", "myorder.html");
      }
    }
  });
}

let array = [];
function addToCart() {
  const btns = document.querySelectorAll(".add-to-cart");
  const btn = Array.prototype.slice.call(btns);
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
}

function addProducts() {
  const array = JSON.parse(localStorage.getItem("array"));
  const numberItem = document.querySelector("header .number");
  numberItem.innerHTML = array.length;

  const btns = document.querySelectorAll(".add-to-cart");
  const btn = Array.prototype.slice.call(btns);
  let newArray = [...array];
  btn.forEach((b) =>
    b.addEventListener("click", () => {
      const idProduct = b.getAttribute("id");
      const productFind = products.find((el) => el.id === +idProduct);

      newArray.push(productFind);
      localStorage.setItem("array", JSON.stringify(newArray));

      const numberItem = document.querySelector("header .number");
      numberItem.innerHTML = newArray.length;
    })
  );
}

function logOut() {
  const logOutBtn = document.getElementById("log-out");
  logOutBtn.addEventListener("click", () => {
    const main = document.querySelector(".main");
    main.innerHTML = "";
    if (confirm("Bạn có chắc muốn đăng xuất?") == true) {
      main.innerHTML += `
        <div class="main">
          <div class="account">
            <img src="./assets/image/account.webp" alt="" />
          </div>
          <div class="text">Welcome to AliExpress</div>

          <div class="button">
            <button class="register">Register</button>
            <button class="sign-in">Sign in</button>
          </div>
        </div>
      `;
    } else {
      return false;
    }
  });
}

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
