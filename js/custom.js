// var shake = document.querySelectorAll('.shakeMe')
// console.log(shake);

// for (let i = 0; i < shake.length; i++) {

//     shake[i].addEventListener("mouseenter", event => {
//         shake[i].classList.add('rubberBand');
//     });

//     shake[i].addEventListener("mouseleave", event => {
//         shake[i].classList.remove('rubberBand');
//     });
    
    
    
// }

// NAVBAR HIDING

// Need to have css code to :
// position:fixed
// top:0;
// transition: ex. top ease 0.5s;

let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById('navbar');

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = '0';
  } else {
    navbar.style.top = '-90px';
  }
  prevScrollPos = currentScrollPos;
}


$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'swing');
});