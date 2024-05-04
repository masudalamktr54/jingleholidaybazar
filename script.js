// ++++++++++++++++ This is nav scroll color change +++++++++++++++++
// let header = document.getElementById("nav")
// function changeNavbarColorOnScroll() {
// 	if (window.scrollY > 0) { 
// 	header.classList.add('scrolled');
// 	} else {
// 	header.classList.remove('scrolled');
// 	}
// }
// window.addEventListener('scroll', changeNavbarColorOnScroll);

window.addEventListener('scroll', function() {
    const nav = document.getElementById('nav');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});


// +++++++++++++++++++++ this is mobile navbar ++++++++++++++++++++++++++++++++
document.querySelector(".sidebar").style.display = "none"
document.querySelector(".hamburger").addEventListener("click", () => {
	document.querySelector(".sidebar").style.display = "inline"

	document.querySelector(".hamburger").style.display = "none"
})

document.querySelector(".cross").addEventListener("click", () => {
	document.querySelector(".hamburger").style.display = "inline"

	document.querySelector(".sidebar").style.display = "none"
})