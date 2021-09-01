
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import 'simplebar';
import 'simplebar/dist/simplebar.css';

//слайдеры
window.addEventListener('load', (e) => {
  var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
          nextEl: ".arrow-next",
          prevEl: ".arrow-prev",
      },
  });
});
//слайдеры


//аккордеон
let accordions = document.getElementsByClassName("take__drop-title");

for (let i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function() {
  this.classList.toggle('take__drop-title_active');

      let content = this.nextElementSibling;
      if (content.style.maxHeight) {
          content.style.maxHeight = null;
      } else {
          content.style.maxHeight = content.scrollHeight + "px";
      }
  }
}
//аккордеон


//Фильтр моб
let filterSelect = document.getElementsByClassName("filter__choice-item");

for (let i = 0; i < filterSelect.length; i++) {
filterSelect[i].onclick = function() {
  this.classList.toggle('filter__choice-item_active');
};
}
//Фильтр моб

//Селект декстоп
let openPopovers = [];

  const onPopoverClick = (el) => {
    el.classList.toggle('popover_visible');
  }

  const popovers = document.querySelectorAll('.js-popover');
  popovers.forEach((el) => {
    el.addEventListener('click', (e) => {
      onPopoverClick(el);
      e.stopPropagation();
      e.preventDefault();
    }, false);
  })

  const onBreak = (e) => {
    e.stopPropagation();
  }
  const popoverBreak = document.querySelectorAll('.js-popover-break');
  popoverBreak.forEach((el) => {
    el.addEventListener('click', onBreak, false);
  });

  document.addEventListener('click', function(event) {
    popovers.forEach((el) => {
      el.classList.remove('popover_visible');
    })
  });
//Селект декстоп

//Карта интерактивная

const pointMap = document.querySelector(".map__point-image");
const descriptionMap = document.querySelector(".map__point-description-container");

pointMap.addEventListener("click", () => {
descriptionMap.classList.toggle("map__point-description-container_active");
});
//Карта интерактивная


//Модальное окно header
const modal = document.querySelector('.js-modal');
const modalToggler = document.querySelectorAll('.js-toggle-modal');

const onModalToggle = (e) => {
modal.classList.toggle('modal_visible');
e.stopPropagation();
e.preventDefault();
}

modalToggler.forEach((el) => {
el.addEventListener('click', onModalToggle, false);
})
//Модальное окно header


//Слайдер Range
var slider = document.getElementById('slider');

if(!!slider) {
noUiSlider.create(slider, {
    start: [0, 100],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});
}

var slider2 = document.getElementById('slider-2');

if(!!slider2) {
noUiSlider.create(slider2, {
  start: [0, 100],
  connect: true,
  range: {
      'min': 0,
      'max': 100
  }
});
}


//Слайдер Range

//Модальное окно фильтр моб.
const modalFilter = document.querySelector('.js-filter-modal');
const modalTogglerFilter = document.querySelectorAll('.js-filter-toggle-modal');

const onModalToggleFilter = (e) => {
modalFilter.classList.toggle('filter-modal_visible');
bodyScroll.classList.toggle('bodyscroll');
e.stopPropagation();
e.preventDefault();
}

modalTogglerFilter.forEach((el) => {
el.addEventListener('click', onModalToggleFilter, false);
})
//Модальное окно фильтр моб.



//Меню бургер
const burger = document.querySelector('.checkbox1');
const menuBurger = document.querySelector('.header__menu-body');
const bodyScroll = document.body;

burger.addEventListener("click", function (e) {
menuBurger.classList.toggle('header__menu-body_active');
bodyScroll.classList.toggle('bodyscroll');
});
//Меню бургер