// Header
function toggleNavbar() {
  const header = document.querySelector('.custom-header');
  const navbar = document.querySelector('#navbarNavAltMarkup');

  navbar.addEventListener('shown.bs.collapse', function () {
    header.classList.remove('rounded-pill');
    header.classList.add('expanded');
  });

  navbar.addEventListener('hidden.bs.collapse', function () {
    header.classList.remove('expanded');
    header.classList.add('rounded-pill');
  });
}

// Slider
const items = document.querySelectorAll('.slider .list .item');
const thumbnails = document.querySelectorAll('.thumbnail .item');

let countItem = items.length;
let itemActive = 0;

function showSlider() {
  const itemActiveOld = document.querySelector('.slider .item.active');
  const thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
  itemActiveOld.classList.remove('active');
  thumbnailActiveOld.classList.remove('active');

  items[itemActive].classList.add('active');
  thumbnails[itemActive].classList.add('active');
}

// auto run slider
function nextSlider() {
  itemActive = (itemActive + 1) % countItem;
  showSlider();
}

let refreshIntrval = setInterval(nextSlider, 6000);

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    itemActive = index;
    showSlider();

    // clear auto run slider
    clearInterval(refreshIntrval);
    refreshIntrval = setInterval(nextSlider, 6000);
  });
});
