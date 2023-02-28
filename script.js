// Hamburger Script

const navLinks = document.getElementById('navLinks');
const ham = document.getElementById('ham');
const hamInner = document.getElementById('hamInner');

ham.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        hamInner.classList.toggle('fa-times');
});

//Clock js
// the clock timer start 
// Set the date we're counting down to
var countDownDate = new Date("March 25, 2023 13:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("count-days").innerHTML = ('0' + days).substr(-2);
        document.getElementById("count-hours").innerHTML = ('0' + hours).substr(-2);
        document.getElementById("count-mins").innerHTML = ('0' + minutes).substr(-2);
        document.getElementById("count-sec").innerHTML = ('0' + seconds).substr(-2);

        // If the count down is finished, write some text
        if (distance < 0) {
                clearInterval(x);
                document.getElementById("clock").innerHTML = "REGISTRATIONS CLOSED!";
        }
}, 1000);


function websiteVisits(response) {
        document.querySelector("#visits").textContent = response.value;
    }

// Clock JS End


var items = document.querySelectorAll(".timeline li");

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      if(!items[i].classList.contains("in-view")){
        items[i].classList.add("in-view");
      }
    } else if(items[i].classList.contains("in-view")) {
        items[i].classList.remove("in-view");
    }
  }
}
 
window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);
