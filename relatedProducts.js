const relatedData = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 89.99,
    description: "High-quality sound with noise cancellation.",
    category: "Headphones",
    imageUrl: "https://m.media-amazon.com/images/I/71F2ccIPPLL._AC_UY218_.jpg",
    stock: 25,
    ratings: 4.5,
  },
  {
    id: 6,
    name: "Wireless Headphones",
    price: 89.99,
    description: "High-quality sound with noise cancellation.",
    category: "Headphones",
    imageUrl: "https://m.media-amazon.com/images/I/61oGAG5r7cL._AC_UY218_.jpg",
    stock: 25,
    ratings: 4.5,
  },
  {
    id: 7,
    name: "Wireless Headphones",
    price: 89.99,
    description: "High-quality sound with noise cancellation.",
    category: "Headphones",
    imageUrl: "https://m.media-amazon.com/images/I/714leNyXHIL._AC_UY218_.jpg",
    stock: 25,
    ratings: 4.5,
  },
  {
    id: 2,
    name: "Smartphone",
    price: 699.99,
    description: "Latest model with stunning display and camera.",
    category: "Smartphone",
    imageUrl: "https://m.media-amazon.com/images/I/41vU1u8DZXL._AC_UY218_.jpg",
    stock: 15,
    ratings: 4.7,
  },
  {
    id: 8,
    name: "Smartphone",
    price: 699.99,
    description: "Latest model with stunning display and camera.",
    category: "Smartphone",
    imageUrl: "https://m.media-amazon.com/images/I/71YwZXmVcEL._AC_UY218_.jpg",
    stock: 15,
    ratings: 4.7,
  },
  {
    id: 9,
    name: "Smartphone",
    price: 699.99,
    description: "Latest model with stunning display and camera.",
    category: "Smartphone",
    imageUrl: "https://m.media-amazon.com/images/I/51rp0nqaPoL._AC_UY218_.jpg",
    stock: 15,
    ratings: 4.7,
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 49.99,
    description: "Ergonomic design with customizable buttons.",
    category: "Accessories",
    imageUrl: "https://m.media-amazon.com/images/I/61qN9d08hgL._AC_UY218_.jpg",
    stock: 50,
    ratings: 4.3,
  },
  {
    id: 10,
    name: "Gaming Mouse",
    price: 49.99,
    description: "Ergonomic design with customizable buttons.",
    category: "Accessories",
    imageUrl: "https://m.media-amazon.com/images/I/71tGtBuo0yL._AC_UY218_.jpg",
    stock: 50,
    ratings: 4.3,
  },
  {
    id: 11,
    name: "Gaming Mouse",
    price: 49.99,
    description: "Ergonomic design with customizable buttons.",
    category: "Accessories",
    imageUrl: "https://m.media-amazon.com/images/I/61AcT0ZuO3L._AC_UY218_.jpg",
    stock: 50,
    ratings: 4.3,
  },
  {
    id: 4,
    name: "Laptop Stand",
    price: 29.99,
    description: "Adjustable height for better posture.",
    category: "Accessories",
    imageUrl: "https://m.media-amazon.com/images/I/612+65xHWJL._AC_UY218_.jpg",
    stock: 30,
    ratings: 4.0,
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 59.99,
    description: "Portable speaker with rich sound quality.",
    category: "Speaker",
    imageUrl: "https://m.media-amazon.com/images/I/518cRYanpbL._AC_UY218_.jpg",
    stock: 20,
    ratings: 4.6,
  },
  {
    id: 12,
    name: "Bluetooth Speaker",
    price: 59.99,
    description: "Portable speaker with rich sound quality.",
    category: "Speaker",
    imageUrl: "https://m.media-amazon.com/images/I/81djh1gfUwL._AC_UY218_.jpg",
    stock: 20,
    ratings: 4.6,
  },
];

let getRelatedProducts = "";
const gatRelatedData = () => {
  let relatedProducts = document.querySelector("#relatedProducts");
  relatedData?.slice(1, 11)?.forEach((data) => {
    console.log("data :", data);

    return (getRelatedProducts += `<div class="card">
      <div class="card_img">
          <img src=${data?.imageUrl} alt="">
      </div>
      <div class="card_content">
          <a href="productdetails.html" class="card_title">${data?.description}</a>
          <h1 class="card_price">$${data?.price}</h1>
          <button class="btn">Add To Cart</button>
      </div>
  </div>`);
  });
  relatedProducts.innerHTML = getRelatedProducts
    ? getRelatedProducts
    : "<h1>No Data</h1>";
};

gatRelatedData();
