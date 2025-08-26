// gsap.from(".header",{
//     duration: 3,
//     y:"-100%"
// })

// gsap.from(".link",{
//     duration:1,
//     opacity:0,
//     delay:3 ,
//     stagger:1
// })

// gsap.from(".right",{
//     duration:2,
//     x:"100%",
//     delay:3,
//     ease:"power.in",
// })

// gsap.from(".left",{
//     duration:2,
//     x:"-100%",
//     delay:3,
//     ease:"power.in",
// })

// gsap.to(".footer", { duration: 1, y: 0, ease: "elastic", delay: 5 });

// gsap.fromTo(
//   ".button",
//   { opacity: 0, scale: 0, rotation: 720 },
//   { duration: 4, opacity: 1, scale: 1, rotation: 0 }
// );

const timeline = gsap.timeline({ default: { duration: 1 } });

timeline
  .from(".header", {
    duration: 3,
    y: "-100%",
  })
  .from(".link", {
    duration: 1,
    opacity: 0,
    stagger: 1,
  })
  .from(".right", {
    duration: 2,
    x: "100%",
    ease: "power.in",
  },3)
  .from(".left", {
    duration: 2,
    x: "-100%",
    ease: "power.in",
  },3) // or i can use "<" this to make work at same time 
  .to(".footer", { duration: 1, y: 0, ease: "elastic" })
  .fromTo(
    ".button",
    { opacity: 0, scale: 0, rotation: 720 },
    { duration: 4, opacity: 1, scale: 1, rotation: 0 }
  );


  const b = document.querySelector(".button")

  b.addEventListener("click",()=>{
    timeline.reverse();
  })
