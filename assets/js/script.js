function myFunction() {
    var element = document.getElementById("divi");
    element.classList.add("flex-wrap");
}

const mediaQuery = window.matchMedia('(max-width: 1306px)')
if (mediaQuery.matches) {
  myFunction();
}

//Javascript to toggle the menu
document.getElementById('nav-toggle').onclick = function(){
  document.getElementById("nav-content").classList.toggle("hidden");
}
