const singleProduct = {
  id: 1,
  name: "Wireless Headphones",
  price: 89.99,
  description: "High-quality sound with noise cancellation.",
  category: "Headphones",
  imageUrl: "https://m.media-amazon.com/images/I/71F2ccIPPLL._AC_UY218_.jpg",
  stock: 25,
  ratings: 4.5,
};

const getSingleProduct = () => {
  //   let image = document.getElementById("image");
  //   let price = document.getElementById("price");
  //   let name = document.getElementById("name");
  //   let description = document.getElementById("description");
  //   image.src = singleProduct.imageUrl;
  //   name.innerText = singleProduct.name;
  //   price.innerText = singleProduct.price;
  //   description.innerText = singleProduct.description;
  let productDetailsContainer = document.getElementById(
    "productDetailsContainer"
  );
  document.getElementById(
    "productDetailsContainer"
  ).innerHTML = `<div class="productDetails">
              <div class="left">
                  <img id="image" src=${singleProduct.imageUrl} alt="">
              </div>
              <div class="right">
                  <h2 id="name">${singleProduct.name}</h2>
                  <h2 id="price">$ ${singleProduct.price}</h2>
                    <p id="ratings"><span class="rat">Ratings</span>${singleProduct?.ratings}</p>
                  <p id="description">${singleProduct.description}</p>
                  <button class="btn">Add To Cart</button>
              </div>
          </div>`;
};

getSingleProduct();
