// const categoryData = [
//   {
//     id: 101,
//     name: "Bluetooth Speaker",
//     price: 59.99,
//     description: "Portable speaker with rich sound quality.",
//     category: "Speaker",
//     imageUrl: "https://m.media-amazon.com/images/I/81djh1gfUwL._AC_UY218_.jpg",
//     stock: 20,
//     ratings: 4.6,
//   },
//   {
//     id: 102,
//     name: "Laptop Stand",
//     price: 29.99,
//     description: "Adjustable height for better posture.",
//     category: "Accessories",
//     imageUrl: "https://m.media-amazon.com/images/I/612+65xHWJL._AC_UY218_.jpg",
//     stock: 30,
//     ratings: 4.0,
//   },
//   {
//     id: 103,
//     name: "Smartphone",
//     price: 699.99,
//     description: "Latest model with stunning display and camera.",
//     category: "Smartphone",
//     imageUrl: "https://m.media-amazon.com/images/I/51rp0nqaPoL._AC_UY218_.jpg",
//     stock: 15,
//     ratings: 4.7,
//   },
//   {
//     id: 104,
//     name: "Wireless Headphones",
//     price: 89.99,
//     description: "High-quality sound with noise cancellation.",
//     category: "Headphones",
//     imageUrl: "https://m.media-amazon.com/images/I/714leNyXHIL._AC_UY218_.jpg",
//     stock: 25,
//     ratings: 4.5,
//   },
// ];

let categoryItem = "";
const getCategoryData = (categoryData) => {
  const categoryContainer = document.getElementById("categoryContainer");
  categoryData?.forEach((data) => {
    return (categoryItem += `<div class="category_box">
    <div class="category_img">
    <a href="shop.html">
   <img src=${data?.imageUrl} alt="">
   </a>
   </div>
<h2>${data?.category}</h2>
</div>`);
  });
  categoryContainer.innerHTML = categoryItem
    ? categoryItem
    : "<h1>No Data</h1>";
};

const fetchCategoryData = async () => {
  const response = await fetch("category.json");
  const data = await response.json();
  getCategoryData(data);
};

fetchCategoryData();
