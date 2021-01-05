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


var rule = CSSRulePlugin.getRule("textAnim:after");


gsap.from(".gsap", {duration:1, y:-50, opacity: 0, stagger: 0.3})
gsap.from(".foto", {duration:1, y:30, opacity: 0, delay: 1.4})
gsap.to(rule, {cssRule: {scaleY: 0}, duration: 1})

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


