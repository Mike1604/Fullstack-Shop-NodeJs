

const header = document.getElementsByTagName('header')[0];

header.innerHTML = `
    <h1>VinylShop</h1>
    <nav>
    <ul class="nav__links">
        <li class="nav__link"><a href="/FrontEnd/views/index.html">Home</a></li>
        <li class="nav__link"><a href="#">Vinyls!</a></li>
        <li class="nav__link"><a href="#">Genres</a></li>
        <li class="nav__link"><a href="/FrontEnd/views/addProductView.html">Admin</a></li>
    </ul>
    </nav>
    <div class="nav__buttons">
    <a href="#"><i class="bi bi-cart3 nav__cart"></i></a>
    <a class="cta" href="#"><button>Login</button></a>
    </div>
    <div class="hamburger" id="hamburger">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
    </div>
`

const hamburger = document.querySelector('.hamburger');
const navmenu = document.querySelector('.nav__links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
});

document.querySelectorAll('.nav__link').forEach(n =>
    n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navmenu.classList.remove('active');
    }));