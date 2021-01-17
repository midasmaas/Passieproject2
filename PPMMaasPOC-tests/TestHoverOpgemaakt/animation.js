/*Test 1*/

gsap.from(".balk", {
    scrollTrigger: {
        trigger: ".balkenSection",
        scrub: true,
        pin: true,
        start: "top top",
        end: "+=100%"
    },
    scaleX: 0,
    transformOrigin: "left center",
    ease: "none"
});




//Test 2

/*
gsap.from("#balk3", {
    scrollTrigger: ".SVGBalken",
    duration:3,
    x:-300,
    stagger: 0.3,
    ease: "power2",
    onUpdate: function () {
        console.log('update')
        console.log(this.progress())
        var percentage = this.progress()
        var result = Math.round((percentage)*100);
        document.getElementById('percentageHTML').innerText = result + "%";
    }
});


 */
/*

let tl = gsap.timeline({
        scrollTrigger: ".SVGBalken",
        duration:1,
        stagger: 0.3,
        ease: "power2"
});

 */

//Test2//


/*
tl.to("#balk1", {
        x:-300,
        onUpdate: function () {
            var percentage = this.progress();
            var result = Math.round((percentage)*100);
            document.getElementById('percentageHTML1').innerText = result + "%";
        }
    }).fromTo("#balk2", {x: -300}, {x:0,

        onUpdate: function () {
            var percentage = this.progress();
            var result = Math.round((percentage)*80);
            document.getElementById('percentageHTML2').innerText = result + "%";
        }}).to("#balk3", {
    x:-60,
    onUpdate: function () {
        var percentage = this.progress();
        var result = Math.round((percentage)*20);
        document.getElementById('percentageHTML3').innerText = result + "%";
    }}).to("#balk4", {
    x:-120,
    onUpdate: function () {
        var percentage = this.progress();
        var result = Math.round((percentage)*40);
        document.getElementById('percentageHTML4').innerText = result + "%";
    }});

 */


let tlBalken = gsap.timeline({
    scrollTrigger: ".SVGBalken",
    duration:1,
    stagger: 0.3,
    ease: "power2"
});

tlBalken.fromTo("#balk1", {x: "-15rem"}, {x: "0rem",
    onUpdate: function () {
        var percentage = this.progress();
        var result = Math.round((percentage)*100);
        document.getElementById('percentageHTML1').innerText = result + "%";
    }}).fromTo("#balk2", {x: -300}, {x:-60,
    onUpdate: function () {
        var percentage = this.progress();
        var result = Math.round((percentage)*80);
        document.getElementById('percentageHTML2').innerText = result + "%";
    }}).fromTo("#balk3", {x: -300}, {x:-240,
    onUpdate: function () {
        var percentage = this.progress();
        var result = Math.round((percentage)*20);
        document.getElementById('percentageHTML3').innerText = result + "%";
    }}).fromTo("#balk4", {x: -300}, {x:-180,
    onUpdate: function () {
        var percentage = this.progress();
        var result = Math.round((percentage)*40);
        document.getElementById('percentageHTML4').innerText = result + "%";
    }});


var tooltipSpan = document.getElementById('tooltip-span');

window.onmousemove = function (e) {
    var x = e.clientX,
        y = e.clientY;
    tooltipSpan.style.top = (y + 20) + 'px';
    tooltipSpan.style.left = (x + 20) + 'px';
};