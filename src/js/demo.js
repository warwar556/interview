
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

//const pointMap = document.querySelector(".map__point-image");
//const descriptionMap = document.querySelector(".map__point-description-container");

//pointMap.addEventListener("click", () => {
//  descriptionMap.classList.toggle("map__point-description-container_active");
//});
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

noUiSlider.create(slider, {
    start: [0, 100],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});

var slider = document.getElementById('slider-2');

noUiSlider.create(slider, {
    start: [0, 100],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});
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


const burger = document.querySelector('.checkbox1');
const menuBurger = document.querySelector('.header__menu-body');
const bodyScroll = document.body;

burger.addEventListener("click", function (e) {
  menuBurger.classList.toggle('header__menu-body_active');
  bodyScroll.classList.toggle('bodyscroll');
});






//var element = document.querySelector('.classname');
//                                      ^
//element.addEventListener("click", function(e) {
//    alert('something');
//}, false);


//burger[i].onclick = function() {
//  menuBurger.classList.toggle('header__menu-body_active');
//};

//burger.addEventListener("click", () => {
//  menuBurger.classList.toggle('.header__menu-body_active');
//});


 


//burger.classList.toggle('test__body_active');
//function openNav() {
//  document.querySelector(".test__body").style.width = "100%";
//}

//function closeNav() {
//  document.querySelector(".test__body").style.width = "0%";
//}


 

//burger.addEventListener("click", function (e) {
//  //iconMenu.classList.toggle('_active');
//  menuBurger.classList.toggle('test__body_active');
//});

//burger[i].onclick = function() {
//  //menuBurger.classList.toggle('test__body_active');
//  document.querySelector(".test__body").style.width = "100%"
//};



//let filterSelect = document.getElementsByClassName("filter__choice-item");

//for (let i = 0; i < filterSelect.length; i++) {
//  filterSelect[i].onclick = function() {
//		this.classList.toggle('filter__choice-item_active');
//  };
//}





//const iconMenu = document.querySelector('.header__menu-burger');
//const menuBody = document.querySelector('.header__menu-body');

////iconMenu.addEventListener("click", function (e) {
////  //iconMenu.classList.toggle('_active');
////  menuBody.classList.toggle('header__menu-body_active');
////});

//iconMenu[i].onclick = function() {
//  menuBody.classList.toggle('header__menu-body_active');
//};





 

 
 


//const isMobile = {
//	Android: function () {
//		return navigator.userAgent.match(/Android/i);
//	},
//	BlackBerry: function () {
//		return navigator.userAgent.match(/BlackBerry/i);
//	},
//	iOS: function () {
//		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//	},
//	Opera: function () {
//		return navigator.userAgent.match(/Opera Mini/i);
//	},
//	Windows: function () {
//		return navigator.userAgent.match(/IEMobile/i);
//	},
//	any: function () {
//		return (
//			isMobile.Android() ||
//			isMobile.BlackBerry() ||
//			isMobile.iOS() ||
//			isMobile.Opera() ||
//			isMobile.Windows());
//	}
//};

//if (isMobile.any()) {
//	document.body.classList.add('_touch');

//	let menuArrows = document.querySelectorAll('.menu__arrow');
//	if (menuArrows.length > 0) {
//		for (let index = 0; index < menuArrows.length; index++) {
//			const menuArrow = menuArrows[index];
//			menuArrow.addEventListener("click", function (e) {
//				menuArrow.parentElement.classList.toggle('_active');
//			});
//		}
//	}

//} else {
//	document.body.classList.add('_pc');
//}

// Меню бургер
//const iconMenu = document.querySelector('.menu__icon');
//const menuBody = document.querySelector('.menu__body');
//if (iconMenu) {
//	iconMenu.addEventListener("click", function (e) {
//		document.body.classList.toggle('_lock');
//		iconMenu.classList.toggle('_active');
//		menuBody.classList.toggle('_active');
//	});
//}


// Прокрутка при клике
//const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
//if (menuLinks.length > 0) {
//	menuLinks.forEach(menuLink => {
//		menuLink.addEventListener("click", onMenuLinkClick);
//	});

//	function onMenuLinkClick(e) {
//		const menuLink = e.target;
//		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
//			const gotoBlock = document.querySelector(menuLink.dataset.goto);
//			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

//			if (iconMenu.classList.contains('_active')) {
//				document.body.classList.remove('_lock');
//				iconMenu.classList.remove('_active');
//				menuBody.classList.remove('_active');
//			}

//			window.scrollTo({
//				top: gotoBlockValue,
//				behavior: "smooth"
//			});
//			e.preventDefault();
//		}
//	}
//}

//const abc = document.querySelectorAll(".filter__choice-item");
//if (abc) {
//	abc.addEventListener("click", function (e) {
//		menuBody.classList.toggle('filter__choice-item_active');
//	});
//}

//document.querySelector(".filter__choice-item").onclick = function(){
//  alert("Вы нажали на кнопку");
//}

//const filterSelect = document.querySelectorAll(".filter__choice-item");
//if (filterSelect) {
//	filterSelect.addEventListener("click", function (e) {
//		filterSelect.classList.toggle('filter__choice-item_active');
//	});
//}
