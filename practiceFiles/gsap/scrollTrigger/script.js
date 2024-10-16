gsap.from(".page1 #circle", {
    scale: 0,
    rotate: 720,
    duration: 3,
    scrollTrigger: {
        trigger: ".page1 #circle",
        scroller: "body",
        markers: true,
        start: "top 50%",
        end: "top 25%",
        scrub: true
    }
})


gsap.from(".page2 #circle", {
    scale: 0,
    rotate: 720,
    duration: 3,
    scrollTrigger: {
        trigger: ".page2 #circle",
        scroller: "body",
        markers: true,
        start: "top 70%",
        end: "top 50%",
        scrub: true
    }
})


gsap.from(".page3 #circle", {
    scale: 0,
    rotate: 720,
    duration: 3,
    scrollTrigger: {
        trigger: ".page3 #circle",
        scroller: "body",
        markers: true,
        start: "top 70%",
        end: "top 50%",
        scrub: true
    }
})