
const shop = document.querySelector(".shop-Cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let productHTML = productData.map(data => {
  let { id, title, description, price, img } = data;
  return `
    <div class="item-Div">
      <img src='${img}' alt="">
      <p>${title}</p>
      <p>${description}</p>
      <p>${price}</p>
      <button class="addToCart" type = "button" data-type = "${id}" onclick= "generateCart(${id}, '${title}', '${description}', '${price}', '${img}')"  >Add to Cart</button>
    </div>
  `
})
shop.innerHTML = productHTML.join('');



let generateCart = (id, title, description, price, img) => {
  basket.push({
    id: id,
    title: title,
    description: description,
    price: price,
    img: img
  })

  localStorage.setItem("data", JSON.stringify(basket))
  calculate()
  addCart(id)
}


let calculate = () => {
  const cartNum = document.querySelector(".cartNum");
  cartNum.innerHTML = basket.length;
}

let addCart = (id) => {
  const addToCart = document.querySelectorAll(".addToCart");
  addToCart.forEach(cart => {
    let dataAttribute = cart.getAttribute("data-type")
    if (id == dataAttribute) {
      cart.innerHTML = "Added"
    }

  })
}




