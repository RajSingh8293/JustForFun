// const shopProducts = [
//   {
//     id: 1,
//     name: "Wireless Headphones",
//     price: 89.99,
//     description: "High-quality sound with noise cancellation.",
//     category: "Headphones",
//     imageUrl: "https://m.media-amazon.com/images/I/71F2ccIPPLL._AC_UY218_.jpg",
//     stock: 25,
//     ratings: 4.5,
//   },
//   {
//     id: 6,
//     name: "Wireless Headphones",
//     price: 89.99,
//     description: "High-quality sound with noise cancellation.",
//     category: "Headphones",
//     imageUrl: "https://m.media-amazon.com/images/I/61oGAG5r7cL._AC_UY218_.jpg",
//     stock: 25,
//     ratings: 4.5,
//   },
//   {
//     id: 7,
//     name: "Wireless Headphones",
//     price: 89.99,
//     description: "High-quality sound with noise cancellation.",
//     category: "Headphones",
//     imageUrl: "https://m.media-amazon.com/images/I/714leNyXHIL._AC_UY218_.jpg",
//     stock: 25,
//     ratings: 4.5,
//   },
//   {
//     id: 2,
//     name: "Smartphone",
//     price: 699.99,
//     description: "Latest model with stunning display and camera.",
//     category: "Smartphone",
//     imageUrl: "https://m.media-amazon.com/images/I/41vU1u8DZXL._AC_UY218_.jpg",
//     stock: 15,
//     ratings: 4.7,
//   },
//   {
//     id: 8,
//     name: "Smartphone",
//     price: 699.99,
//     description: "Latest model with stunning display and camera.",
//     category: "Smartphone",
//     imageUrl: "https://m.media-amazon.com/images/I/71YwZXmVcEL._AC_UY218_.jpg",
//     stock: 15,
//     ratings: 4.7,
//   },
//   {
//     id: 9,
//     name: "Smartphone",
//     price: 699.99,
//     description: "Latest model with stunning display and camera.",
//     category: "Smartphone",
//     imageUrl: "https://m.media-amazon.com/images/I/51rp0nqaPoL._AC_UY218_.jpg",
//     stock: 15,
//     ratings: 4.7,
//   },
//   {
//     id: 3,
//     name: "Gaming Mouse",
//     price: 49.99,
//     description: "Ergonomic design with customizable buttons.",
//     category: "Accessories",
//     imageUrl: "https://m.media-amazon.com/images/I/61qN9d08hgL._AC_UY218_.jpg",
//     stock: 50,
//     ratings: 4.3,
//   },
//   {
//     id: 10,
//     name: "Gaming Mouse",
//     price: 49.99,
//     description: "Ergonomic design with customizable buttons.",
//     category: "Accessories",
//     imageUrl: "https://m.media-amazon.com/images/I/71tGtBuo0yL._AC_UY218_.jpg",
//     stock: 50,
//     ratings: 4.3,
//   },
//   {
//     id: 11,
//     name: "Gaming Mouse",
//     price: 49.99,
//     description: "Ergonomic design with customizable buttons.",
//     category: "Accessories",
//     imageUrl: "https://m.media-amazon.com/images/I/61AcT0ZuO3L._AC_UY218_.jpg",
//     stock: 50,
//     ratings: 4.3,
//   },
//   {
//     id: 4,
//     name: "Laptop Stand",
//     price: 29.99,
//     description: "Adjustable height for better posture.",
//     category: "Accessories",
//     imageUrl: "https://m.media-amazon.com/images/I/612+65xHWJL._AC_UY218_.jpg",
//     stock: 30,
//     ratings: 4.0,
//   },
//   {
//     id: 5,
//     name: "Bluetooth Speaker",
//     price: 59.99,
//     description: "Portable speaker with rich sound quality.",
//     category: "Speaker",
//     imageUrl: "https://m.media-amazon.com/images/I/518cRYanpbL._AC_UY218_.jpg",
//     stock: 20,
//     ratings: 4.6,
//   },
//   {
//     id: 12,
//     name: "Bluetooth Speaker",
//     price: 59.99,
//     description: "Portable speaker with rich sound quality.",
//     category: "Speaker",
//     imageUrl: "https://m.media-amazon.com/images/I/81djh1gfUwL._AC_UY218_.jpg",
//     stock: 20,
//     ratings: 4.6,
//   },
// ];

let shopProducts = [];
const sortProducts = (products, sortBy) => {
  switch (sortBy) {
    case "name-asc":
      return products.sort((a, b) => a.name.localeCompare(b.name));
    case "name-desc":
      return products.sort((a, b) => b.name.localeCompare(a.name));
    case "price-asc":
      return products.sort((a, b) => a.price - b.price);
    case "price-desc":
      return products.sort((a, b) => b.price - a.price);
    default:
      return products;
  }
};

const getData = (category, sortBy) => {
  const shopProductContainer = document.getElementById("shopProductContainer");
  shopProductContainer.innerHTML = "";

  const filterProducts =
    category === "all"
      ? shopProducts
      : shopProducts.filter((data) => data.category === category);

  const sortedProducts = sortProducts(filterProducts, sortBy);

  sortedProducts.forEach((data) => {
    // filterProducts.forEach((data) => {
    const productElement = document.createElement("div");
    productElement.className = "card";
    productElement.setAttribute("dateId", data.id);
    productElement.innerHTML = `<div class="card_img">
          <img src=${data?.imageUrl} alt="">
      </div>
      <div class="card_content">
          <a href='productdetails.html' class="card_title">${
            data?.description
          }</a>
          <h1 class="card_price">$${data?.price.toFixed(2)}</h1>
          <button class="add_To_Cart">Add To Cart</button>
      </div>`;

    shopProductContainer.appendChild(productElement);
    document.querySelector(".add_To_Cart").addEventListener("click", () => {
      addToCart(data);
    });
  });
  document.querySelector(".totalProducts").innerHTML = filterProducts.length;
};

// btns filters
document.querySelectorAll(".filter_btn").forEach((button) =>
  button.addEventListener("click", (e) => {
    const selectedCategory = e.target.getAttribute("category");

    const currentSort = document.getElementById("sorting").value;
    getData(selectedCategory, currentSort);

    // getData(selectedCategory, "name-asc");
    // console.log("selectedCategory :", selectedCategory);
  })
);

// sort filters tns
// document.querySelectorAll(".sortBtn").forEach((btn) =>
//   btn.addEventListener("click", (e) => {
//     const selectedSort = e.target.getAttribute("sortData");
//     const currentCategory = document
//       .querySelector(".filter_btn.active")
//       .querySelector(".filter_btn")
//       .getAttribute("category");
//     getData(currentCategory, selectedSort);
//   })
// );

// sort filters
document.getElementById("sorting").addEventListener("change", (e) => {
  const selectedSort = e.target.value;
  const currentCategory = document
    .querySelector(".filter_btn")
    .getAttribute("category");
  // const currentCategory = document.querySelector(".filter_btn")
  //   ? document.querySelector(".filter_btn").getAttribute("category")
  //   : "all";
  getData(currentCategory, selectedSort);
});

// window.onload = () => {
//   getData("all", "name-asc");
// };
// getData();

//fetch all products

const fetchData = async () => {
  const response = await fetch("data.json");
  const data = await response.json();
  shopProducts = data;
  console.log("shopProducts :", shopProducts);
  getData("all", "name-asc");
};
fetchData();
