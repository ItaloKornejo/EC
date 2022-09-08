import { dataDB } from "./js/data.js";
import { printBook, printBookInCart, cart } from "./js/layout.js";
import "./js/showCart.js";




const contentBook = document.querySelector(".content_book");
const contentCartBody = document.querySelector(".content_cart-body");

const cartIcon = document.querySelector('#totalCart');
const totalPrice = document.querySelector('#total');

contentBook.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn__add")) {

        let totalCartPrice=0;
        let itemsCart=0;

        const idBook = +e.target.parentElement.id;

        const findBook = dataDB.find((item) => item.id === idBook);

        if(dataDB[idBook-1].stock>0){
            if (cart[idBook] ) {
                cart[idBook].amount++;
                dataDB[idBook-1].stock--;
            } else {
                cart[idBook] = findBook;
                cart[idBook].amount = 1;
                dataDB[idBook-1].stock--;
            }
        }

        Object.values(cart).forEach(item => {
            totalCartPrice+=item['amount']*item['price'];
            itemsCart+=item['amount'];
        });

        cartIcon.innerHTML = itemsCart;
        totalPrice.innerHTML = totalCartPrice;

        printBook(contentBook, dataDB);
        printBookInCart(contentCartBody);
    }
});

contentCartBody.addEventListener("click", (e) => {
    if (e.target.classList.contains("bx-minus")) {

        let itemsCart=0;
        let totalCartPrice=0;
    
        const idBook = +e.target.parentElement.id;

        if(cart[idBook].amount==1){
            delete cart[idBook];
        }else{
            cart[idBook].amount--;
        }
        dataDB[idBook-1].stock++;
         Object.values(cart).forEach(item => {
            totalCartPrice+=item['amount']*item['price'];
            itemsCart+=item['amount'];
            });

        totalPrice.innerHTML = totalCartPrice;
        cartIcon.innerHTML = itemsCart;

    }

    if (e.target.classList.contains("bx-plus-medical")) {

        if(dataDB[(+e.target.parentElement.id)-1].stock!=0){
        let itemsCart=0;
        let totalCartPrice=0;
        const idBook = +e.target.parentElement.id;

        cart[idBook].amount++;
        dataDB[idBook-1].stock--;

        Object.values(cart).forEach(item => {
            totalCartPrice+=item['amount']*item['price'];
            itemsCart+=item['amount'];
            });

        totalPrice.innerHTML = totalCartPrice;
        cartIcon.innerHTML = itemsCart;
        }else{
            window.alert("Sin existencias");
        }}

    if (e.target.classList.contains("bx-trash")) {
        let totalCartPrice=0;
        let itemsCart=0;
        const idBook = +e.target.parentElement.id;
        dataDB[idBook-1].stock+=cart[idBook].amount;
        delete cart[idBook];
        Object.values(cart).forEach(item => {
            totalCartPrice+=item['amount']*item['price'];
            itemsCart+=item['amount'];
            });
    
        totalPrice.innerHTML = totalCartPrice;
        cartIcon.innerHTML = itemsCart;
    }
    printBook(contentBook, dataDB);
    printBookInCart(contentCartBody);
});

printBook(contentBook, dataDB);

const iconMenu = document.querySelector('#menuMobile');
const contMenu = document.querySelector('.menuNavbar');

iconMenu.addEventListener("click", (e) => {
	console.log(contMenu);
	contMenu.classList.toggle("menuNavbar-show");
});


var swiper = new Swiper('.swiper', {
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev'
	},  
	slidesPerView: 'auto',
	spaceBetween: 10,
	// freeMode: true,
	// init: false,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},

  
	breakpoints: {
		350: {
			slidesPerView:1,
			spaceBetween: 20,
		},
		
	  	550: {
			slidesPerView: 1,
			spaceBetween: 20,
	  	},
	  	680: {
			slidesPerView: 1,
			spaceBetween: 20,
	  	},
	  	920: {
			slidesPerView: 1,
			spaceBetween: 40,
	  	},
	 	1240: {
			slidesPerView:1,
			spaceBetween: 40,
	  },
	} 
    });