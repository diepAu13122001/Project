// add 1 method for check the user had logged in

// get data of user's address
const placeOrderBtn = document.querySelector('.place-order-btn');
placeOrderBtn.addEventListener('click', () => {
    getAddress();

})

const getAddress = () => {
    let address = document.querySelector('#address').value;
    let street = document.querySelector('#street').value;
    let city = document.querySelector('#city').value;
    let state = document.querySelector('#state').value;
    let pincode = document.querySelector('#pincode').value;
    let landmark = document.querySelector('#landmark').value;
    if (!address.length || !street.length || !city.length || !state.length || !pincode.length || !landmark.length) {
        showAlert('fill all the inputs first','failed');
    } else {
        showAlert('your order is placed', 'success');
        // return {address, street, city, state, pincode, landmark};
        setTimeout(location.href = 'mail.html', 50000);
    }
}

// alert function
const showAlert = (msg, type) => {
    let alertBox = document.querySelector('.alert-box');
    let alertMsg = document.querySelector('.alert-msg');
    let alertImg = document.querySelector('.alert-img');

    alertMsg.innerHTML = msg;

    if(type === 'success'){
        alertImg.src = `img/success.png`;
        alertMsg.style.color = `#0ab50a`;
    }else{
        alertImg.src = `img/error.png`;
        alertMsg.style.color =null;
    }

    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 3000);
    return false;
}