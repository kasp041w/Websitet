

gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#product_section",
    scrub: 1,
    start: "center bottom",
    end: "+=25"
  }
});

tl.from(".scroll_fx", {
  y: 100,
  opacity: 0,
  
});


gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#raad_section",
    scrub: 1,
    start: "right bottom",
    end: "+=100"
  }
});

tl.from(".scroll_fx2", {
  x: 100,
  opacity: 0,
  
});