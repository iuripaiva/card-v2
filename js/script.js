let age = document.getElementById("age");
const body = document.querySelector("body");
const toggle = document.getElementById("toggle-btn");
const togglebkg = document.getElementById("toggle-bkg");

// Theme switch
toggle.onclick = function(){
    toggle.classList.toggle("active");
    togglebkg.classList.toggle("active");
    body.classList.toggle("active");
}

togglebkg.onclick = function(){
    toggle.classList.toggle("active");
    togglebkg.classList.toggle("active");
    body.classList.toggle("active");
}

// Script to update my age based on my birthday
let today = new Date();
let day = String(today.getDate()).padStart(2, '0');
let month = String(today.getMonth() + 1).padStart(2, '0'); //0 = Jan
let year = today.getFullYear();
let newAge = year - 1997;

if ((month == "06" && day == "27") || (month > "06")){
    age.innerHTML = newAge;
} else {
    age.innerHTML = newAge - 1;
}
