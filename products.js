let carts = [];
let products = [];
let bestSellers = document.querySelector("#bestSellers");
let newArrivals = document.querySelector("#newArrivals");
let cartContainer = document.querySelector("#cartContainer");

const getHomeData = () => {
  bestSellers.innerHTML = "";
  newArrivals.innerHTML = "";

  if (products.length > 0) {
    products?.slice(6, 11).forEach((data) => {
      let createNewDiv = document.createElement("div");
      createNewDiv.classList.add("card");
      createNewDiv.dataset.id = data.id;
      createNewDiv.innerHTML = ` 
    <div class="card_img">
        <img src=${data?.imageUrl} alt="">
    </div>
     <div class="card_content">
        <a href="productdetails.html" class="card_title">${
          data?.description
        }</a>
        <h1 class="card_price">$${data?.price.toFixed(2)}</h1>
        <button class="btn addTocart">Add To Cart</button>
    </div>`;
      bestSellers.appendChild(createNewDiv);
    });
  }

  if (products.length > 0) {
    products?.slice(1, 6).forEach((data) => {
      let createNewDiv = document.createElement("div");
      createNewDiv.classList.add("card");
      createNewDiv.dataset.id = data.id;
      createNewDiv.innerHTML = ` 
    <div class="card_img">
        <img src=${data?.imageUrl} alt="">
    </div>
     <div class="card_content">
        <a href="productdetails.html" class="card_title">${
          data?.description
        }</a>
        <h1 class="card_price">$${data?.price.toFixed(2)}</h1>
        <button class="btn addTocart">Add To Cart</button>
    </div>`;
      newArrivals.appendChild(createNewDiv);
    });
  }
};
// bestSellers?.addEventListener("click", (e) => {
//   let clickedPosition = e.target;
//   let checkClassName = clickedPosition.classList.contains("addTocart");
//   if (checkClassName) {
//     let productId = clickedPosition.parentElement.parentElement.dataset.id;
//     addToCart(productId);
//   }
// });

// const addToCart = (productId) => {
//   let findPositionProductInCart = carts?.findIndex(
//     (value) => value.id == productId
//   );

//   if (carts.length <= 0) {
//     carts = [
//       {
//         id: productId,
//         quantity: 1,
//       },
//     ];
//   } else if (findPositionProductInCart < 0) {
//     carts.push({
//       id: productId,
//       quantity: 1,
//     });
//   } else {
//     // carts[findPositionProductInCart].quantity++;
//     carts[findPositionProductInCart].quantity =
//       carts[findPositionProductInCart].quantity + 1;
//   }
//   // console.log(carts);
//   showCartItems();
// };

// const showCartItems = () => {
//   cartContainer.innerHTML = "";

//   carts?.forEach((item) => {
//     console.log("item :", item);
//     let createDiv = document.createElement("div");
//     createDiv.classList.add("cartItem");
//     createDiv.innerHTML = `<div>
//                         <img src="https://m.media-amazon.com/images/I/61AcT0ZuO3L._AC_UY218_.jpg" alt="">
//                     </div>
//                     <div class="cart_item_details">
//                         <h4>Product name</h4>
//                         <h4>Qty : ${item}</h4>
//                         <h4>$ ${item}</h4>
//                         <h4>remove</h4>
//                     </div>`;
//     cartContainer.appendChild(createDiv);
//   });
// };
// showCartItems();

const fetchData = async () => {
  const response = await fetch(`data.json`);
  const data = await response.json();
  products = data;

  getHomeData();
};

fetchData();
