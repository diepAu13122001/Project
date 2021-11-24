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
