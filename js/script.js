let movement = ()=>{
    let nav = document.getElementById("nav-bar-wider");
let mover = () => {
  let pos = nav.getBoundingClientRect();
  if (pos.top == 0) {
    nav.classList.remove("shrinker");
    nav.classList.add("widder");
  } else {
    nav.classList.add("shrinker");
    nav.classList.remove("widder");
  }
};
window.addEventListener("scroll", () => mover());
}
movement();


let slideMaker = ()=>{
    const slide = document.querySelectorAll(".observer");
    const h = document.querySelectorAll(".observedH");
    const p = document.querySelectorAll(".observedP");
    const observer = new IntersectionObserver((entries) => {
      console.log(p);
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          h.forEach((e) => {
            e.classList.add("fa");
          });
          p.forEach((u) => {
            u.classList.add("fa");
          });
        } else {
          h.forEach((e) => {
            e.classList.remove("fa");
          });
          p.forEach((u) => {
            u.classList.remove("fa");
          });
        }
      });
    });
    
    slide.forEach((s) => {
      observer.observe(s);
    });
}

slideMaker();

// refactor up
// const slide1 = document.getElementById("observer1");
// const h = document.getElementById("observedH1");
// const p = document.getElementById("observedP1");
// const observer = new IntersectionObserver((entries) => {
//   const firstEntry = entries[0];
//   if (firstEntry.isIntersecting) {
//     h.classList.add("fa");
//     p.classList.add("fa");
//   } else {
//     h.classList.remove("fa");
//     p.classList.remove("fa");
//   }
// });
// observer.observe(slide1);

// const slide2 = document.getElementById("observer2");
// const h2 = document.getElementById("observedH2");
// const p2 = document.getElementById("observedP2");
// const observer2 = new IntersectionObserver((entries) => {
//   const firstEntry = entries[0];
//   if (firstEntry.isIntersecting) {
//     h2.classList.add("fa");
//     p2.classList.add("fa");
//   } else {
//     h2.classList.remove("fa");
//     p2.classList.remove("fa");
//   }
// });
// observer2.observe(slide2);

// const slide3 = document.getElementById("observer3");
// const h3 = document.getElementById("observedH3");
// const p3 = document.getElementById("observedP3");
// const observer3 = new IntersectionObserver((entries) => {
//   const firstEntry = entries[0];
//   if (firstEntry.isIntersecting) {
//     h3.classList.add("fa");
//     p3.classList.add("fa");
//   } else {
//     h3.classList.remove("fa");
//     p3.classList.remove("fa");
//   }
// });
// observer3.observe(slide3);
