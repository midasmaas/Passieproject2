const words = ["Midas touch", "mooi design", "modern design", "nette code"];

let cursor = gsap.to('.cursor', {opacity: 0, ease: "power2.inOut", repeat: -1});

let boxTL = gsap.timeline();

boxTL.to('.box', {duration: 1, width: "17vw",
    delay: 0.5, ease: "power4.inOut"})
    .from('.hi', {duration: 1, y: "7vw", ease:
    "power3.out", onComplete: () => masterTL.play()})
    .to('.box',{duration: 1, height: "7vw", ease:
    "elastic.out"})

let masterTL = gsap.timeline({repeat: -1}).pause();

words.forEach(word =>{
    let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1})
    tl.to('.text', {duration: 1, text: word})
    masterTL.add(tl)
})


gsap.utils.toArray("nav a").forEach(function(a) {
    a.addEventListener("click", function(e) {
      e.preventDefault();
      gsap.to(window, {duration: 1, scrollTo: e.target.getAttribute("href")});
    });
  });

  gsap.from(".lijnOmLijnDik", {
    scrollTrigger: {
      trigger: ".overMij",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%"
    },
    scaleX: 0, 
    transformOrigin: "left center", 
    ease: "none"
  });


/*
  gsap.to(".tijdlijnElem", {
    scrollTrigger: ".tijdlijn",
    scale: 2, 
    repeat: -1, 
    yoyo: true, 
    ease: "power2"
  });

  

 

  gsap.to(".tijdlijnElem", {
    scrollTrigger: ".tijdlijn", 
    scale: 2, 
    repeat: -1, 
    ease: "power2"
  });

  */


  gsap.from(".journalistiek", {
    scrollTrigger: ".journalistiek", 
    duration:1, 
    x:-400, 
    opacity: 0, 
    stagger: 0.3,
    ease: "power2"
  });

  gsap.from(".verkoop", {
    scrollTrigger: ".verkoop", 
    duration:1, 
    x:+200, 
    opacity: 0, 
    stagger: 0.3,
    ease: "power2"
  });

  gsap.from(".frontend", {
    scrollTrigger: ".frontend", 
    duration:1, 
    x:-200, 
    opacity: 0, 
    stagger: 0.3,
    ease: "power2"
  });


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