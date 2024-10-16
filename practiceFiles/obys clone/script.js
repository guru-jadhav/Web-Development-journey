function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#wrapper"),
        smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#wrapper", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#wrapper").style.transform
            ? "transform"
            : "fixed",
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}

function loderAnimation() {
    document.body.style.cursor = "none";
    document.body.style.overflow = "hidden";
    document.getElementById("crsr").style.opacity = "0";
    var tl = gsap.timeline();
    tl.from(".lines h1, .lines p", {
        y: 150,
        stagger: 0.25,
        duration: 0.6,
        delay: 0.5,
        stagger: 0.2,
    });

    tl.from(
        ".lines-part-1",
        {
            y: 150,
            opacity: 0,
            duration: 0.3,
            onStart: function () {
                const counter = document.querySelector("#counter");
                let count = 0;
                const setCount = setInterval(() => {
                    if (count <= 100) {
                        counter.innerHTML = count++;
                        // console.log(count);
                    } else {
                        clearInterval(setCount);
                    }
                }, 25);
            },
        },
        "-=0.8"
    );

    tl.to("#loader", { display: "none", opacity: 0, delay: 2.5 });

    tl.from("#page1", {
        y: "100%",
        duration: 1,
        ease: "power2.inOut",
        onComplete: function () {
            // document.body.style.cursor = "default";
            document.getElementById("crsr").style.opacity = "1";
            document.body.style.backgroundColor = "#1d1c1c";
            // document.body.style.overflowY = "scroll"; this was causing the problem(remember it)
        },
    });
    tl.from(".nav div, .nav-1", {
        opacity: 0,
        // stagger: 0.2,
        duration: 0.3,
        y: -20,
    });

    tl.from(
        ".hero h1",
        {
            y: 50,
            opacity: 0,
            stagger: 0.2,
            duration: 0.3,
        },
        "-=0.6"
    );

    document.addEventListener("mousemove", (dets) => {
        gsap.to("#crsr", {
            left: dets.x,
            top: dets.y,
        });
    });

    const flags = document.querySelectorAll(".flag");
    flags.forEach((flag) => {
        flag.addEventListener("mousemove", (dets) => {
            gsap.from("#flagImg", {
                opacity: 1,
                duration: 0.5,
                left: dets.x,
                top: dets.y,
                ease: "circ.out",
                zindex: 10
            });
        });

        flag.addEventListener("mouseleave", () => {
            gsap.to("#flagImg", {
                opacity: 0,
                duration: 0.5,
                ease: "circ.out"
            })
        })
    });

    Shery.makeMagnet(".nav-2 h3, .nav-1 div", {
        //Parameters are optional.
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 0.5,
    });
}

function videoAnimation() {
    const video = document.getElementById("actualVideo");
    const videoContainer = document.getElementById("videoContainerInner");
    const playPause = document.getElementById("play-pause");
    const videoCursor = document.getElementById("videoCursor");
    videoContainer.addEventListener("click", () => {
        if (video.paused) {
            video.play();
            playPause.classList.remove("ri-play-line");
            playPause.classList.add("ri-pause-line");
            videoCursor.classList.add("videoCursorStyle2");
            videoCursor.classList.remove("videoCursorStyle1");
            gsap.to("#actualVideo", { opacity: 1, duration: 0.5, ease: "circ" });
            // document.getElementById("actualVideo").style.opacity = 1;
        } else {
            video.pause();
            playPause.classList.add("ri-play-line");
            playPause.classList.remove("ri-pause-line");
            videoCursor.classList.add("videoCursorStyle1");
            videoCursor.classList.remove("videoCursorStyle2");
            gsap.to("#actualVideo", { opacity: 0, duration: 0.5, ease: "circ" });
            // document.getElementById("actualVideo").style.opacity = 0;
        }
    });

    videoContainer.addEventListener("mousemove", (dets) => {
        document.getElementById("crsr").style.opacity = "0";
        gsap.to("#videoCursor", {
            left: dets.x - 450,
            top: dets.y - 60,
        });
    });

    videoContainer.addEventListener("mouseleave", () => {
        document.getElementById("crsr").style.opacity = "1";
        gsap.to("#videoCursor", {
            left: 80 + "%",
            top: 5 + "%",
        });
    });


    document.getElementById("letsCreate").addEventListener("mousemove", () => {
        gsap.to("#letsCreate", {

        })
    })
}

function gooeyAnimation() {
    Shery.imageEffect(".ImgContainer", {
        style: 5,
        config: { "a": { "value": 3.21, "range": [0, 30] }, "b": { "value": 0.92, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.7904487145460102 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.5, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.31, "range": [0, 10] }, "metaball": { "value": 0.37, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10.69, "range": [0, 100] } },
        gooey: true
    })
}

locomotiveAnimation();
loderAnimation();
videoAnimation();
gooeyAnimation();

