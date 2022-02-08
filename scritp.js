var tl = gsap.timeline();

tl.from('.nav-brand', {
    stagger: 2,
    duration: 1,
    y: 20,
    delay: .5,
    ease: 'Expo.easeInOut',
    opacity: 0
})
.from('#border', {
    width: 0,
    duration: 2,
    ease: 'Expo.easeInOut',
}, '-=2')
.from('#leftitem', {
    stagger: 3,
    duration: 3,
    y: 20,
    ease: 'Expo.easeInOut',
    opacity: 0
}, '-=2')
.from('#right', {
    duration: 3.5,
    scale: 1.05,
    ease: 'Expo.easeInOut',
    opacity: 0
}, '-=2')
//nav
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
});