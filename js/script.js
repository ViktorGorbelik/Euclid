let burger = document.querySelector('.header-burger');
let menu = document.querySelector('.header-nav');
let menuLinks = menu.querySelectorAll('.header-nav__link')

burger.addEventListener('click',

function(e) {
    e.target.blur();

    burger.classList.toggle('header-burger--active');

    menu.classList.toggle('header-nav--active');

    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function(el) {
  el.addEventListener('click',

  function() {

    burger.classList.remove('header-burger--active');

    menu.classList.remove('header-nav--active');

    document.body.classList.remove('stop-scroll');

  })
})

let magnifier = document.querySelector('.header-nav__magnifier');
let search = document.querySelector('.search');
let input = document.querySelector('.search__input');
let cross = document.querySelector('.search-cross');

magnifier.addEventListener('click',

function() {
    input.focus();

    magnifier.classList.toggle('header-nav__magnifier--active');

    search.classList.toggle('search--active');

  })

cross.addEventListener('click',

function(evt) {
  evt.preventDefault()

    magnifier.classList.remove('header-nav__magnifier--active');

    search.classList.remove('search--active');

  })

const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

let tabsBtn = document.querySelectorAll('.section-our-work__steps-btn');
let tabsContent = document.querySelectorAll('.our-work-content');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    e.target.blur();
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('section-our-work__steps-btn--active')});
    e.currentTarget.classList.add('section-our-work__steps-btn--active');

    tabsContent.forEach(function(element){ element.classList.remove('our-work-content--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('our-work-content--active');
  });
});


new Accordion('.accordion-list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active'
});
