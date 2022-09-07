let cart = {};

function printBookInCart(elementHTML) {
    let html = "";

    const arrayCart = Object.values(cart);

    arrayCart.forEach(({ id, name, autor,category,year,pages, urlImages,amount,price}) => {
        html += `
            <div class="item_cart">
                <div class="item_cart-img">
                    <img src="${urlImages}" alt="">
                </div>

                <h4 class="item_cart-title">${name}</h4>
                <div class="item_cart-options" id="${id}">
                    <i class='bx bx-minus'></i>
                    <span id="amount">${amount}</span>
                    <i class='bx bx-plus-medical'></i>
                    <i class='bx bx-trash'></i>
                </div>
            </div>
        `;
    });

    elementHTML.innerHTML = html;
}
function printBook(elementHTML, data) {
    let html = "";

    data.forEach(({ id, name, autor,category,year,pages, urlImages,stock,price }) => {
        if(stock>0){
        html += `
            <div class="book">
                <div class="book__img">
                    <img src="${urlImages}" alt="${name}">
                </div>
                <div class="book__body" id="${id}">
                    <h2 class="book__body-title">${name}</h2>
                    <p>precio: ${price}</p>
                    <p>stock: ${stock}</p>
                    <button class="btn btn__add">Agregar</button>
                </div>
            </div>
        `;}
    });

    elementHTML.innerHTML = html;
}


export { printBookInCart, printBook, cart };
