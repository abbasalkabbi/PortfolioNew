const menu = document.querySelector(".menu-nav"),
  a = menu.querySelectorAll("ul a");
a[0].addEventListener("click", show);
a[1].addEventListener("click", show);
a[2].addEventListener("click", show);
a[3].addEventListener("click", show);
function show() {
  console.log(a);
  if (menu.style.display == "none") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
}

function menubutton() {
  show();
}
