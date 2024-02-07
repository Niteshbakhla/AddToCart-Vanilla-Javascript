  



const cart = document.querySelector(".cartNum");
const shoppingCart = document.querySelector(".shoppingCart");
let basket = JSON.parse(localStorage.getItem('data')) || []
cart.innerHTML = basket.length;

let generateCartItem = () => {
    if (basket.length !== 0) {
        return shoppingCart.innerHTML = basket.map(data => {
            let { id, title, description, price, img } = data;

            return `
            <div class="item-Div" data-type = ${id}>
                    <img src='${img}' alt="">
                    <p>${title}</p>
                    <p>${description}</p>
                    <p>${price}</p>
                    <button onclick = "removeCart(${id})">Remove Cart</button>
          </div>
            `
        }).join("")
    }
}


let removeCart = (id) => {
    let data = localStorage.getItem("data");
    if (data !== null) {

        let parsedData = JSON.parse(data);
        console.log(parsedData)
        let idToDelete = id;
        const indexToDelete = parsedData.findIndex(item => item.id === idToDelete);
        if (indexToDelete !== -1) {
            parsedData.splice(indexToDelete, 1);
            localStorage.setItem("data", JSON.stringify(parsedData))
            basket = parsedData;
            const itemToRemove = document.querySelector(`.item-Div[data-type="${idToDelete}"]`);
            if (itemToRemove !== null) {
                itemToRemove.remove();
                basketLength();
            }
        }
    }
    
}


let basketLength = () => {
    let basketData = basket.length;
    cart.innerHTML = basketData;
}

let updateEmptyCart = () => {
    if (basket.length === 0) {
        let div = document.createElement("div")
        div.classList.add("emptyCart")
        div.innerHTML = "Cart is empty"
        shoppingCart.appendChild(div)
    }
}
updateEmptyCart()
generateCartItem()
