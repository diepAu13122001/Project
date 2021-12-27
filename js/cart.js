// create small product cards
// for java: create a class product and add in () of this function to change variables

// create data
const data = [
    {image: "img/card7.png", name: "BRAND", shortDes: "this is a short line about", itemCount: 3, price: 32},
    {image: "img/card5.png", name: "BRAND", shortDes: "this is a short line about", itemCount: 1, price: 45.5},
    {image: "img/card4.png", name: "BRAND", shortDes: "this is a short line about", itemCount: 3, price: 28.4},
    {image: "img/card10.png", name: "BRAND", shortDes: "this is a short line about", itemCount: 1, price: 39.7}];

const smProduct = document.querySelectorAll('.sm-product');
const createSmallCards = (index) => {
    let productInfo = data[index];
    smProduct[index].innerHTML = `
     <div class="sm-product">
         <img src="${productInfo.image}" class="sm-product-img" alt="">
         <div class="sm-text">
             <p class="sm-product-name">${productInfo.name}</p>
             <p class="sm-des">${productInfo.shortDes}</p>
         </div>
         <div class="item-counter">
             <button class="counter-btn decrement">-</button>
             <p class="item-count">${productInfo.itemCount}</p>
             <button class="counter-btn increment">+</button>
         </div>
             <p class="sm-price" data-price="${productInfo.price}">${Math.round((productInfo.itemCount * productInfo.price) * 100) / 100}</p>
             <button class="sm-delete-btn"><img src="img/close.png" alt=""></button>
     </div>
    `;
}

let totalBill = 0;
for (let i = 0; i < 4; i++) {
    createSmallCards(i);

    //total bill
    totalBill += Math.round((Number(data[i].price * data[i].itemCount)) * 100) / 100;
}


const setupEventsForCart = () => {
    const counterMinus = document.querySelectorAll('.cart .decrement');
    const counterPlus = document.querySelectorAll('.cart .increment');
    const counts = document.querySelectorAll('.cart .item-count');
    const price = document.querySelectorAll('.cart .sm-price');
    const deleteBtn = document.querySelectorAll('.cart .sm-delete-btn');

    counts.forEach((item, i) => {
        let cost = Number(price[i].getAttribute('data-price'));

        counterMinus[i].addEventListener('click', () => {
            if (item.innerHTML > 1) {
                item.innerHTML--;
                totalBill -= cost;
                price[i].innerHTML = `${Math.round((item.innerHTML * cost) * 100) / 100}`;
                document.querySelector('.bill').innerHTML = `${Math.round(totalBill * 100) / 100}`;
            }
        })

        counterPlus[i].addEventListener('click', () => {
            if (item.innerHTML < 3) {
                item.innerHTML++;
                totalBill += cost;
                price[i].innerHTML = `${Math.round((item.innerHTML * cost) * 100) / 100}`;
                document.querySelector('.bill').innerHTML = `${Math.round(totalBill * 100) / 100}`;
            }
        })
    })

    const smCard = document.querySelectorAll('.sm-product');
    deleteBtn.forEach((item, i) => {
        item.addEventListener('click', () => {
            let priceOfThisItem = price[i].innerHTML;
            smCard[i].remove();
            document.querySelector('.bill').innerHTML = `${Math.round((totalBill - priceOfThisItem) * 100) / 100}`;
            //cause I can't do anything in database, this delete function only execute well with 1 item
            // location.reload();
        })
    })
}

setupEventsForCart();

document.querySelector('.bill').innerHTML = `${totalBill}`;

const cart = document.querySelector('.cart');
const wishlist = document.querySelector('.wishlist');

const setEmptyCart = (name) => {
    const element = document.querySelector(`.${name}`);
    element.innerHTML = `<img src="img/empty-cart.png" class="empty-img" alt="">`;
}

setEmptyCart('wishlist');




