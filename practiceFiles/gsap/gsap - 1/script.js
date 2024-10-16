document.addEventListener("DOMContentLoaded", ()=>{
    let tl = gsap.timeline();
    gsap.from(".nav div h3",{
        y:-50,
        opacity:0,
        delay:0.2,
        duration:0.7,
        stagger:0.2
    });

    tl.from(".container h1", {
        x: -300,
        opacity:0,
        delay:0.2,
        duration:1.5,
        stagger:0.2,
        ease: "bounce"
    })

    tl.from(".imgs img", {
        x: 100,
        rotate: 45,
        opacity: 0,
        duration: 0.6,
        stagger: 0.5,
    })
})