gsap.to(".page2 h1", {
    transform: "translateX(-215%)",
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        markers: true,
        start:"top 0%",
        end:"top -100%",
        pin: true,
        scrub: true
    }
})