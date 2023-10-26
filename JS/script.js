//Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
//hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

//klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Cek apakah semua input valid
  const isFormValid = true;
  // ...

  if (isFormValid) {
    // Kirim formulir
    // ...
  } else {
    // Tampilkan peringatan alert
    alert("Harap perbaiki kesalahan input!");
  }
});


// var navbar = document.getElementById('navbar');window.onscroll = function () {
//     if (window.scrollY > 22){
//         navbar.classList.add('scrolled');
//     } else {
//         navbar.classList.remove('scrolled');
//     }

