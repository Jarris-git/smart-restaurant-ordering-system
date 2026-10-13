function showDesserts(){
    //recuperation des menus
    const menus = document.querySelectorAll(".menu-item");
    //parcourris les menus
    menus.forEach(menu =>{
      //si c'est dessert
      if(menu.classList.contains("dessert")){
        menu.style.display = "block";
      }else{
        menu.style.display = "none";
      }
    });
}

  function showFast(){
    const menus = document.querySelectorAll(".menu-item");
    menus.forEach(menu =>{
      if(menu.classList.contains("burger")){
        menu.style.display = "block";
      }else{
        menu.style.display = "none";
      }
    });
  }
  function showPizza(){
    const menus = document.querySelectorAll(".menu-item");
    menus.forEach(menu =>{
      if(menu.classList.contains("pizza")){
        menu.style.display = "block";
      }else{
        menu.style.display = "none";
      }
    });
  }
  function showBoissons(){
    const menus = document.querySelectorAll(".menu-item");
    menus.forEach(menu =>{
      if(menu.classList.contains("boisson")){
        menu.style.display = "block";
      }else{
        menu.style.display = "none";
      }
    });
  }
  function showGrillades(){
    const menus = document.querySelectorAll(".menu-item");
    menus.forEach(menu =>{
      if(menu.classList.contains("grillades")){
        menu.style.display = "block";
      }else{
        menu.style.display = "none";
      }
    });
  }
  function showPates(){
    const menus = document.querySelectorAll(".menu-item");
    menus.forEach(menu =>{
      if(menu.classList.contains("pates")){
        menu.style.display = "block";
      }else{
        menu.style.display = "none";
      }
    });
  }


const cartBtn = document.getElementById("cartBtn");
const cartSidebar = document.getElementById("cartSidebar");
const closeCart = document.getElementById("closeCart");

cartBtn.addEventListener("click", () => {
    cartSidebar.classList.add("active");
});

closeCart.addEventListener("click", () => {
    cartSidebar.classList.remove("active");
});

const buttons = document.querySelectorAll(".add-to-cart");

const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");

let total = 0;
let count = 0;

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const name = button.dataset.name;
        const price = parseInt(button.dataset.price);

        count++;
        total += price;

        cartCount.innerText = count;
        cartTotal.innerText = total + " FCFA";

        const item = document.createElement("div");

        item.innerHTML = `
            <div class="d-flex justify-content-between mb-3">
                <span>${name}</span>
                <span>${price} FCFA</span>
            </div>
        `;

        cartItems.appendChild(item);

    });

});