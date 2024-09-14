let data = [
  {
    name: "Кресло",
    price: 500,
    img: "https://static.tildacdn.com/tild3236-3964-4939-b134-306465323833/image.png",
    inCart: false,
  },
  {
    name: "Диван",
    price: 1025,
    img: "https://avatars.dzeninfra.ru/get-zen_doc/1077599/pub_62ffa1abeca0490a02237987_62ffa30cb62bf13db8dad7bc/scale_1200",
    inCart: false,
  },
  {
    name: "Деревянный стул",
    price: 200,
    img: "https://inscension.shop/cdn/shop/files/1.EspooDiningChairA.png?v=1698676524&width=1600",
    inCart: false,
  },
  {
    name: "Рабочий стол",
    price: 625,
    img: "https://avatars.mds.yandex.net/i?id=d511be9b842b3fb0fd9612134009cfcfbcee3a5a-6882373-images-thumbs&n=13",
    inCart: false,
  },
  {
    name: "Рабочий стол",
    price: 625,
    img: "https://avatars.mds.yandex.net/i?id=d511be9b842b3fb0fd9612134009cfcfbcee3a5a-6882373-images-thumbs&n=13",
    inCart: false,
  },
  {
    name: "Рабочий стол",
    price: 625,
    img: "https://avatars.mds.yandex.net/i?id=d511be9b842b3fb0fd9612134009cfcfbcee3a5a-6882373-images-thumbs&n=13",
    inCart: false,
  },
];

let productListWrapper = document.querySelector(".product-list");

function renderData(data) {
  for (let i = 0; i < data.length; i++) {
    productListWrapper.innerHTML += `<article class="past">
        <img src=${data[i].img} alt="">
        <p>${data[i].name}</p>
        <p>${data[i].price}$</p>
      <button class="buyBtn">Купить</button>
      </article>`;
  }
}

renderData(data);
