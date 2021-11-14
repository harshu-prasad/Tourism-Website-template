let hamburger = document.getElementsByClassName('hamburger')[0];
let closeBtn = document.getElementsByClassName('closeBtn')[0];
let navigaionBarUl = document.getElementsByClassName('navigation-bar-ul')[0];
// let navLiArray = Array.from(document.getElementsByClassName('nav-li'));

hamburger.addEventListener('click', () => {
	closeBtn.style.display = 'block';
	navigaionBarUl.classList.remove('width-resp');
});

closeBtn.addEventListener('click', () => {
	navigaionBarUl.classList.add('width-resp');
	closeBtn.style.display = 'none';
});