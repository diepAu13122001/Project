const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `<div class="footer-content">
        <img src="img/light-logo.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">Honda</li>
                <li><a href="#" class="footer-link">Xe the thao</a></li>
                <li><a href="#" class="footer-link">xe gan may</a></li>
                <li><a href="#" class="footer-link">xe tay ga</a></li>
                <li><a href="#" class="footer-link">xe cup</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">Yamaha</li>
                <li><a href="#" class="footer-link">Xe the thao</a></li>
                <li><a href="#" class="footer-link">xe gan may</a></li>
                <li><a href="#" class="footer-link">xe tay ga</a></li>
                <li><a href="#" class="footer-link">xe cup</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">Suzuki</li>
                <li><a href="#" class="footer-link">Xe the thao</a></li>
                <li><a href="#" class="footer-link">xe gan may</a></li>
                <li><a href="#" class="footer-link">xe tay ga</a></li>
                <li><a href="#" class="footer-link">xe cup</a></li>
            </ul>
        </div>
    </div>
    <p class="footer-title">about company</p>
    <p class="info"></p>
    <p class="info">support emails: help@hdd.com -
    customersupport@hdd.com</p>
    <p class="info">telephone :  0342 327 725 - 0869 021 227</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="https://www.instagram.com" class="social-link">instagram</a>
            <a href="https://www.facebook.com" class="social-link">facebook</a>
            <a href="https://www.youtube.com" class="social-link">youtube</a>
        </div>
    </div>
    
`;
}

createFooter();

const logo = document.querySelector('.logo');
logo.addEventListener('click', () => {
    location.href = 'home.html';
})