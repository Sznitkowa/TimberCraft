const footerYear = document.querySelector('.footer__year');
const navMobileBox = document.querySelector('.nav-mobile__box');
const burgerBtn = document.querySelector('.nav-mobile__btn--burger');
const closeBtn = document.querySelector('.nav-mobile__btn--close');

const handleFooterYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

const toggleMenu = () => {
	navMobileBox.classList.toggle('show-menu');
};

handleFooterYear();
burgerBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);
