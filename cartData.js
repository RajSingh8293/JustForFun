const cartData = [
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
];

let getCartProducts = "";
const getCartData = () => {
  cartData.forEach((data) => (getCartProducts += ``));
};
getCartData();
