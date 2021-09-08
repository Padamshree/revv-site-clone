const rentals = document.querySelector('.rentals');
const subs = document.querySelector('.subs');
const searchHeader = document.querySelector('.search-header');
const searchLayout = document.querySelector('search-layout');

selectRental = () => {
	subs.classList.remove("rent-active");
	rentals.classList.add("rent-active");
	searchHeader.innerHTML = '';
	
	let header = document.createElement("p");
	let headerText = document.createElement("p");
	header.innerHTML = "Rentals";
	headerText.innerHTML = "Self drive car rentals in India";
	searchHeader.appendChild(header).className = 'search-header-2';
	searchHeader.appendChild(headerText).className = 'search-header-text-2';
}

selectSub = () => {
	rentals.classList.remove("rent-active");
	subs.classList.add("rent-active");

	searchHeader.innerHTML = '';

	let header = document.createElement("p");
	let headerText = document.createElement("p");
	header.innerHTML = "Subscriptions";
	searchHeader.appendChild(header).className = 'search-header-2';
	headerText.innerHTML = "Car subscriptions in India";
	searchHeader.appendChild(header).className = 'search-header-2';
	searchHeader.appendChild(headerText).className = 'search-header-text-2';
}

rentals.addEventListener('click', selectRental);
subs.addEventListener('click', selectSub);

const backdrop = document.querySelector('.backdrop');
const sideDrawer = document.querySelector('.sidedrawer');
const toggleNav = document.querySelector('.hamburger-icon');
const body = document.querySelector('.main');

toggleNav.addEventListener('click', () => {
	backdrop.classList.toggle('is-active');
	sideDrawer.classList.toggle('is-active');
})

backdrop.addEventListener('click', () => {
	backdrop.classList.toggle('is-active');
	sideDrawer.classList.toggle('is-active');
})