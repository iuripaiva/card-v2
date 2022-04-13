const body = document.querySelector("body");
const toggle = document.getElementById("toggle-btn");
const togglebkg = document.getElementById("toggle-bkg");

toggle.onclick = function(){
    toggle.classList.toggle("active");
    togglebkg.classList.toggle("active");
    body.classList.toggle("active");
}