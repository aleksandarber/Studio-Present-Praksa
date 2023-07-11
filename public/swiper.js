
const swiperMain = new Swiper('.mainS', {
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    });

    

        //swiper for products
    if(window.outerWidth<=540){
        console.log("aa");
        var swiperCards = new Swiper(".cardsS", {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
          });
    }
    else if (window.outerWidth<=1212){
        console.log("aa");
        var swiperCards = new Swiper(".cardsS", {
            slidesPerView: 2,
            spaceBetween: 30,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
          });
    }
    else{
        var swiperCards = new Swiper(".cardsS", {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
            el: ".swiper-pagination",
            clickable: true,
            },
        });
    }