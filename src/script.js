let data = [
  {
    id: 1,
    name: "Кресло",
    price: 500,
    img: "https://static.tildacdn.com/tild3236-3964-4939-b134-306465323833/image.png",
    inCart: false,
  },
  {
    id: 2,
    name: "Диван",
    price: 1025,
    img: "https://avatars.dzeninfra.ru/get-zen_doc/1077599/pub_62ffa1abeca0490a02237987_62ffa30cb62bf13db8dad7bc/scale_1200",
    inCart: false,
  },
  {
    id: 3,
    name: "Деревянный стул",
    price: 200,
    img: "https://inscension.shop/cdn/shop/files/1.EspooDiningChairA.png?v=1698676524&width=1600",
    inCart: false,
  },
  {
    id: 4,
    name: "Рабочий стол",
    price: 625,
    img: "https://avatars.mds.yandex.net/i?id=d511be9b842b3fb0fd9612134009cfcfbcee3a5a-6882373-images-thumbs&n=13",
    inCart: false,
  },
  {
    id: 5,
    name: "Рабочий стол",
    price: 625,
    img: "https://avatars.mds.yandex.net/i?id=d511be9b842b3fb0fd9612134009cfcfbcee3a5a-6882373-images-thumbs&n=13",
    inCart: false,
  },
  {
    id: 6,
    name: "Рабочий стол",
    price: 625,
    img: "https://avatars.mds.yandex.net/i?id=d511be9b842b3fb0fd9612134009cfcfbcee3a5a-6882373-images-thumbs&n=13",
    inCart: false,
  },
];

let cartData = [];

let productListWrapper = document.querySelector(".product-list");
let cartToggleButton = document.querySelector(".cartIcon");
let cartWrapper = document.querySelector(".cart");
let cartDataWrapper = document.querySelector(".osnova");

let scrollBtn = document.querySelector(".scrollBtn");

scrollBtn.addEventListener("click", function () {
  productListWrapper.scrollIntoView({
    behavior: "smooth",
  });
});

function renderCartData(cartData) {
  cartDataWrapper.innerHTML = "";
  for (let i = 0; i < cartData.length; i++) {
    cartDataWrapper.innerHTML += `
     <div class="tovar">
              <img class="img_card" src=${cartData[i].img} alt="" />
              <div class="cart-product-info">
                <p class="cart-product-name">${cartData[i].name}</p>
                <p class="cart-product-price">${cartData[i].price}$</p>
              </div>
              <button class="delete">Удалить</button>
            </div>`;
  }

  let deleteBtns = document.querySelectorAll(".delete");

  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", function () {
      // let index = data.indexOf(data.find((el) => el.id === cartData[i].id));
      // data[index] = {...data[index], inCart: false}
      cartData.splice(i, 1);
      renderCartData(cartData);
      // renderData(data)
    });
  }
}

renderCartData(cartData);

function renderData(data) {
  productListWrapper.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    productListWrapper.innerHTML += `<article class="past">
        <img src=${data[i].img} alt="">
        <p>${data[i].name}</p>
        <p>${data[i].price}$</p>
      <button class="buyBtn">${data[i].inCart ? "В корзине" : "Купить"}</button>
      </article>`;
  }

  let buyBtns = document.querySelectorAll(".buyBtn");

  for (let i = 0; i < buyBtns.length; i++) {
    if (data[i].inCart == false) {
      buyBtns[i].addEventListener("click", function () {
        cartData.push(data[i]);
        data[i] = { ...data[i], inCart: true };
        renderData(data);
        renderCartData(cartData);
        console.log(data);
      });
    }
  }
}

renderData(data);

cartToggleButton.addEventListener("click", function () {
  cartWrapper.classList.toggle("hide");
});
