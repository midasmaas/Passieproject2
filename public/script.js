
function smoothScroll(target, duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;
    console.log(startPosition);

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
}




function over() {
    smoothScroll('.overPlek', 1000);
}


function portfolio() {
    smoothScroll('.portfolioPlek', 1000);
}


function vaardigheden() {
    smoothScroll('.vaardighedenPlek', 1000);
}

function contact() {
    smoothScroll('.contactPlek', 1000);
}


function over2() {
    smoothScroll('.overPlek2', 1000);
}


function portfolio2() {
    smoothScroll('.portfolioPlek2', 1000);
}


function vaardigheden2() {
    smoothScroll('.vaardighedenPlek2', 1000);
}

function contact2() {
    smoothScroll('.contactPlek2', 1000);
}



document.querySelector(".over").addEventListener("click", over);
document.querySelector(".portfolio").addEventListener("click", portfolio);
document.querySelector(".vaardigheden").addEventListener("click", vaardigheden);
document.querySelector(".contact").addEventListener("click", contact);

document.querySelector(".over2").addEventListener("click", over2);
document.querySelector(".portfolio2").addEventListener("click", portfolio2);
document.querySelector(".vaardigheden2").addEventListener("click", vaardigheden2);

function smoothScroll(target, duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;
    console.log(startPosition);

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
}




function over() {
    smoothScroll('.overPlek', 1000);
}


function portfolio() {
    smoothScroll('.portfolioPlek', 1000);
}


function vaardigheden() {
    smoothScroll('.vaardighedenPlek', 1000);
}

function contact() {
    smoothScroll('.contactPlek', 1000);
}


function over2() {
    smoothScroll('.overPlek2', 1000);
}


function portfolio2() {
    smoothScroll('.portfolioPlek2', 1000);
}


function vaardigheden2() {
    smoothScroll('.vaardighedenPlek2', 1000);
}

function contact2() {
    smoothScroll('.contactPlek2', 1000);
}



document.querySelector(".over").addEventListener("click", over);
document.querySelector(".portfolio").addEventListener("click", portfolio);
document.querySelector(".vaardigheden").addEventListener("click", vaardigheden);
document.querySelector(".contact").addEventListener("click", contact);

document.querySelector(".over2").addEventListener("click", over2);
document.querySelector(".portfolio2").addEventListener("click", portfolio2);
document.querySelector(".vaardigheden2").addEventListener("click", vaardigheden2);
document.querySelector(".contact2").addEventListener("click", contact2);


/*Functie hamburgermenuknop */

var box = document.getElementById("menu-toggle");

function toggleMenu(){
    
    if (box.checked) {
        box.checked = false;
      } else {
        box.checked = true;
      }

}


document.getElementById('menu-button').addEventListener("click", toggleMenu)