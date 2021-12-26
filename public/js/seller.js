let loader = document.querySelector('.loader');

const becomeSellerElement = document.querySelector('.become-seller');
const productListingElement = document.querySelector('.product-listing');
const applyForm = document.querySelector('.apply-form');
const showApplyFormBtn = document.querySelector('#apply-btn');

// if the seller acc existed, trans them to login page (code in java, cause it haven't had a server to load user :)))

const applyFormButton = document.querySelector('#apply-form-btn');
const businessName = document.querySelector('#business-name');
const address = document.querySelector('#business-add');
const about = document.querySelector('#about');
const number = document.querySelector('#number');
const tac = document.querySelector('#terms-and-cond');
const legitInfo = document.querySelector('#legitInfo');

const addProductButton = document.querySelector('#add-product-button');

showApplyFormBtn.addEventListener('click', () => {
    becomeSellerElement.classList.add('hide');
    applyForm.classList.remove('hide');
    applyFormButton.addEventListener('click', () => {
        if (!businessName.value.length || !address.value.length || !about.value.length || !number.value.length) {
            showAlert('fill all the inputs');
        } else if (!tac.checked || !legitInfo.checked) {
            showAlert('you must agree to our terms and conditions');
        } else {
            // loader.style.display = 'block';
            applyForm.classList.add('hide');
            productListingElement.classList.remove('hide');
            addProductButton.addEventListener('click', () => {
                loader.style.display = 'block';
                location.href = 'addProduct.html';
            })
        }
    })
})

// alert function
const showAlert = (msg) => {
    let alertBox = document.querySelector('.alert-box');
    let alertMsg = document.querySelector('.alert-msg');
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 3000);
    return false;
}

let deleteAlert = document.querySelector('.delete-alert');
const openDeletePopup = (id) => {
    deleteAlert.style.display = 'flex';

    let closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => deleteAlert.style.display = null);

    let deleteBtn = document.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => deleteItem(id));
}

const noProductImg = document.querySelector('.no-product-img');
const productList = document.querySelectorAll('.product-card');

const deleteItem = (id) => {
    productList[id].style.display = 'none';
    deleteAlert.style.display = 'none';
    countItem();
}

function countItem() {
    let count = 0;
    productList.forEach((item, i) => {
        if (productList[i].style.display === 'none') {
            count++;
            if (count === productList.length) {
                noProductImg.classList.remove('hide');
            }
        }
    })
}


const openBtn = document.querySelector('.open-btn');
openBtn.addEventListener('click', () => {
    location.href = 'product.html';
})

const editBtn = document.querySelector('.edit-btn');
editBtn.addEventListener('click', () => {
    location.href = 'addProduct.html';
})