
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';


 

window.addEventListener('load', (e) => {
    var swiper = new Swiper(".mySwiper", {
		pagination: {
			el: ".swiper-pagination",
		},
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});



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


 
const iconMenu = document.querySelector('.header__menu-burger');
const menuBody = document.querySelector('.header__menu-body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		menuBody.classList.toggle('header__menu-body_active');
	});
}




const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});
