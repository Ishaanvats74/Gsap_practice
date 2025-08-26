gsap.registerPlugin(ScrollTrigger);

gsap.to(".c", {
    scrollTrigger: {
      trigger: ".c",
      start: "20px 80%",
      end: "100px ",
      markers:true,
      toggleActions: "play none mone reverse",
      scrub:true,
      pin: ".c",

    },
    x: 400,
    rotation: 360,
    duration: 5
  });