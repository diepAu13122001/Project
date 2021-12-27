let loader = document.querySelector('.loader');

// price inputs
const actualPrice = document.querySelector('#actual-price');
const discountPercentage = document.querySelector('#discount');
const sellingPrice = document.querySelector('#sell-price');

discountPercentage.addEventListener('input', () => {
    if (discountPercentage.value > 100) {
        discountPercentage.value = 90;
    } else {
        let discount = actualPrice.value * discountPercentage.value / 100;
        sellingPrice.value = actualPrice.value - discount.toFixed(1);
    }
})

sellingPrice.addEventListener('input', () => {
    let discount = (sellingPrice.value / actualPrice.value) * 100;
    discountPercentage.value = Math.round(discount);
})

// upload image handle
let uploadImages = document.querySelectorAll('.file-upload');
let imagePaths = []; // will store all uploaded images paths
uploadImages.forEach((fileUpload, index) => {
    fileUpload.addEventListener('change', () => {
        const file = fileUpload.files[0];
        let imageUrl;// how to get url of file???

        if (file.type.includes('image')) {
            let label = document.querySelector(`label[for=${fileUpload.id}]`);
            label.style.backgroundImage = `url(${imageUrl})`;
            let productImage = document.querySelector('.product-img');
            productImage.style.backgroundImage = `url(${imageUrl})`;
            imagePaths.push(imageUrl);
        } else {
            showAlert('upload image file only.');
        }
    })
})

//form submission
const productName = document.querySelector('#product-name');
const shortLine = document.querySelector('#short-des');
const des = document.querySelector('#des');

let colors = []; // will store all the colors

const stock = document.querySelector('#stock');
const tags = document.querySelector('#tags');

//buttons
const addProductBtn = document.querySelector('#add-btn');
const saveDraft = document.querySelector('#save-btn');


//store color function
const storeColors = () => {
    let colorCheckbox = document.querySelectorAll('.color-checkbox');
    colorCheckbox.forEach(item => {
        if (item.checked) {
            colors.push(item.value);
        }
    })
}

const validateForm = () => {
    if (!productName.value.length) {
        return showAlert('enter product name');
    } else if (shortLine.value.length > 100 || shortLine.value.length < 10) {
        return showAlert('short description must be between 10 and 100 letters long');
    } else if (!des.value.length) {
        return showAlert('enter detail description about the product');
    } else if (!imagePaths.length) {
        return showAlert('upload at least one product image');
    } else if (!colors.length) {
        return showAlert('select at least one color');
    } else if (!actualPrice.value.length || !discountPercentage.value.length || !sellingPrice.value.length) {
        return showAlert('you must add price');
    } else if (stock.value < 20) {
        return showAlert('you should have at least 20 items in stock');
    } else if (!tags.value.length) {
        return showAlert('enter few tags to help ranking your product in search');
    }
    return true;
}
// backend code (I will trans it to java file)
// const productData = () => {
//   return data = {
//       name: productName.value,
//       shortDes: shortLine.value,
//       des: des.value,
//       images: imagePaths,
//       colors: colors,
//       actualPrice: actualPrice.value,
//       discount: discountPercentage.value,
//       sellPrice: sellingPrice.value,
//       stock: stock.value,
//       tags: tags.value
//   }
// }

addProductBtn.addEventListener('click', () => {
    storeColors();
    if (validateForm()) { // validateForm return true or false while doing validation
        loader.style.display = 'block';
        // let data = productData ();
        location.href = 'seller.html';
    }
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
