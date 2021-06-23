function myFunction() {
    var element = document.getElementById("divi");
    element.classList.add("flex-wrap");
}

const mediaQuery = window.matchMedia('(max-width: 1306px)')
if (mediaQuery.matches) {
  myFunction();
}
