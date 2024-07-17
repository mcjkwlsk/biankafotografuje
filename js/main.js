const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".nav__btn");
const navItems = document.querySelector(".nav__items");
const navSocials = document.querySelector(".nav__socials");
const allNavItems = document.querySelectorAll(".nav__item");
const navBtnBars = document.querySelector(".burger-btn__bars");
const footerYear = document.querySelector(".footer__year");

const handleNav = () => {
	nav.classList.toggle("nav--clicked");
	navBtn.classList.toggle("nav__btn--clicked");
	navItems.classList.toggle("nav__items--unhidden");
	navSocials.classList.toggle("nav__socials--unhidden");

	allNavItems.forEach((item) => {
		item.addEventListener("click", () => {
			nav.classList.remove("nav--clicked");
			navBtn.classList.remove("nav__btn--clicked");
			navItems.classList.remove("nav__items--unhidden");
			navSocials.classList.remove("nav__socials--unhidden");
		});
	});
};

const footerCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

footerCurrentYear();
navBtn.addEventListener("click", handleNav);
