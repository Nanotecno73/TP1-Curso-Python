
let carousel = document.querySelector("#carousel");
let itemsCarousel = document.querySelectorAll(".items");
let itemCarouselLast = itemsCarousel[itemsCarousel.length - 1];

const botonIzquierdo = document.querySelector("#izquierdo");
const botonDerecho = document.querySelector("#derecho");

carousel.insertAdjacentElement('afterbegin', itemCarouselLast);

// function moverDerecha(){
//     let itemCarouselFirst = document.querySelectorAll(".items")[0];    
//     carousel.insertAdjacentElement('beforeend', itemCarouselFirst);
//     carousel.style.transition = "all 0.5s ease";
// }

function moverDerecha(){
    let itemCarouselFirst = document.querySelectorAll('.items')[0];
    carousel.style.marginleft = "-200%";
    carousel.style.transition = "all 0.5s linear";
    carousel.insertAdjacentElement('beforeend', itemCarouselFirst);
    carousel.style.marginleft = "-100";
    // setTimeout (function(){
    //     // carousel.style.transition = "none";
    //     carousel.insertAdjacentElement('beforeend', itemCarouselFirst);
    //     carousel.style.marginleft = "-100";
    // }, 500);
}

// function moverIzquierda(){
//     let itemCarousel = document.querySelectorAll(".items");    
//     let itemCarouselLast = itemCarousel[itemCarousel.length-1];
//     carousel.insertAdjacentElement('afterbegin', itemCarouselLast);
//     carousel.style.transition = "all 0.5s ease";
// }

function moverIzquierda(){
    let itemCarousel = document.querySelectorAll(".items");
    let itemCarouselLast = itemCarousel[itemCarousel.length-1];
    carousel.style.marginleft="0";
    carousel.style.transition="all 0.5s ease";
    setTimeout(function(){
        // carousel.style.transition="none";
        carousel.insertAdjacentElement('afterbegin', itemCarouselLast);
        carousel.style.marginleft="-100%";
    }, 500);
}

botonDerecho.addEventListener('click', function(){
    moverDerecha();
});

botonIzquierdo.addEventListener('click', function(){
    moverIzquierda();
});

setInterval(() => moverDerecha(), 3000);

function enfocarBusqueda(){
    var input = document.getElementById("searchInput");
    input.focus();// Dar foco al input
}