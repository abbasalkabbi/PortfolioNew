var menu = document.querySelector(".menu-nav"),
  a = menu.querySelectorAll("ul a");
a[0].addEventListener("click", show);
a[1].addEventListener("click", show);
a[2].addEventListener("click", show);
a[3].addEventListener("click", show);
var home=document.querySelector(".home");
var skills=document.querySelector(".skills");
var about=document.querySelector(".about");
var contact=document.querySelector(".contact");
function show() {

  menu.style.display = "none";
  
}

function menubutton() {
  menu.style.display = "flex";
}
function menubuttonclose(){
  menu.style.display = "none";
}



function isInViewport(elem) {
  let bounding = elem.getBoundingClientRect();
  return (
      bounding.top >= 0 &&
      bounding.left >= -100 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right-100 <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
window.addEventListener('scroll', function (event) {
  let home_nav=document.querySelector(".home-nav"),
  skills_nav=document.querySelector(".Skills-nav"),
  about_nav=document.querySelector(".about-nav"),
  contact_nav=document.querySelector(".contact-nav");
  
	if (isInViewport(home)) {
    home_nav.classList.add("active")
		skills_nav.classList.remove("active")
    about_nav.classList.remove("active")
    contact_nav.classList.remove("active")

	}
  if (isInViewport(skills)) {
    home_nav.classList.remove("active")
		skills_nav.classList.add("active")
    about_nav.classList.remove("active")
    contact_nav.classList.remove("active")
	}
  if (isInViewport(about)) {
    home_nav.classList.remove("active")
		skills_nav.classList.remove("active")
    about_nav.classList.add("active")
    contact_nav.classList.remove("active")
	}
  if (isInViewport(contact)) {
    home_nav.classList.remove("active")
		skills_nav.classList.remove("active")
    about_nav.classList.remove("active")
    contact_nav.classList.add("active")
	}
}, false);