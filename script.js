// Console log
console.log("E-shop Website");

// Special Countdown
let dayItem = document.getElementById("days");
let hoursItem = document.getElementById("hours");
let minItem = document.getElementById("min");
let secItem = document.getElementById("sec");

let countDown = () =>{
    let futureDate = new Date("15 March 2022");
    let currentDate = new Date();
    let myDate = futureDate - currentDate;

    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hours = Math.floor(myDate / 1000 / 60 / 60 ) % 24;
    let min = Math.floor(myDate / 1000 / 60) % 60;
    let sec = Math.floor(myDate / 1000) % 60;

    dayItem.innerHTML = days;
    hoursItem.innerHTML = hours;
    minItem.innerHTML = min;
    secItem.innerHTML = sec;
}
countDown();

setInterval(countDown, 1000);

// Scroll function
function scrollTopBack(){
    let scrollTopButton = document.getElementById("scrollUp");
    window.onscroll = function(){
        var scroll = document.documentElement.scrollTop;
        if(scroll >=250){
            scrollTopButton.classList.add("scrollActive");
        }else{
            scrollTopButton.classList.remove("scrollActive");
        }
    }
}

scrollTopBack();

// navbar hiding feature
let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })

})