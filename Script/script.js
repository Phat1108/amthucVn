let searchBtn = document.querySelector('.search-btn');
let searchBar = document.querySelector('.nav_search');
let formBtn = document.querySelector('.login-btn');
let loginForm = document.querySelector('.form_login');
let formClose = document.querySelector('.bx-window-close');
let menu = document.querySelector('.menu_bar');
let navbar = document.querySelector('.nav');
let videoBtn = document.querySelectorAll('.vid-btn');


// window.onscroll = () =>{
//     searchBtn.classList.remove('bx-window-close');
//     searchBar.classList.remove('active');
//     menu.classList.remove('bx-window-close');
//     navbar.classList.remove('active');
//     loginForm.classList.remove('active');
// }

menu.addEventListener('click', () =>{
    menu.classList.toggle('bx-window-close');
    navbar.classList.toggle('active');
});

//Tìm kiếm
searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('bx-window-close');
    searchBar.classList.toggle('active');
});

//dang nhap
formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

//SLide_Navition
videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});


// Baner chạy 1
var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  loop:true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
  },
});



// Baner chạy 2

var swiper = new Swiper(".brand-slider", {
  spaceBetween: 20,
  loop:true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  breakpoints: {
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },
});