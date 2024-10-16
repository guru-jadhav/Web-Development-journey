function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#wrapper"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#wrapper", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#wrapper").style.transform ? "transform" : "fixed"
    });



    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}

function loader() {
    document.body.style.cursor = "none";
    document.body.style.overflow = "hidden";
    document.getElementById("crsr").style.opacity = "0";
    var tl = gsap.timeline()
    tl.from(".lines h1, .lines-part-1 h3", {
        y: 150,
        stagger: 0.25,
        duration: 0.6,
        delay: 0.5,
        stagger: 0.2,
        onComplete: function () {
            locomotiveAnimation();
            const now = document.querySelector("#now");
            let count = 0;
            const setNow = setInterval(() => {
                if (count <= 100) {
                    if (now.classList.contains("now")) {
                        now.classList.remove("now");
                        now.style.transform = "skewX(0deg)";

                    } else {
                        now.classList.add("now");
                        now.style.transform = "skewX(-20deg)";
                    }
                    count = count + 40;
                } else {
                    now.classList.add("now");
                    now.style.transform = "skewX(-20deg)";
                    clearInterval(setNow);
                }
            }, 600)
        }
    });

    tl.from(".lines-part-1", {
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
                    // function(){
                    // tl.to("#loader", {display:"none", opacity:0.5});
                    // tl.from("#page1", {y:"100%", duration: 1});
                    // tl.to("#page1, #page2, #page3, #page4", {y:"-100%", duration: 1, delay: 0.5});
                    // }
                }
            }, 25);
        }
    }, "-=0.8");
    tl.to("#loader", { display: "none", opacity: 0.5, delay: 2 });
    tl.from("#page1", {
        y: "100%", duration: 1, ease: "power2.inOut", onComplete: function () {
            // document.body.style.cursor = "default";
            document.getElementById("crsr").style.opacity = "1";
            document.body.style.overflowY = "scroll";
        }
    });

    tl.from(".nav div", {
        opacity: 0,
        // stagger: 0.2,
        duration: 0.3,
        y: -20
    })

    tl.from(".hero h1", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.3
    }, "-=0.6")

    document.addEventListener("mousemove", (dets) => {
        gsap.to("#crsr", {
            left: dets.x,
            top: dets.y
        })
    })

    const flags = document.querySelectorAll(".flag");
    flags.forEach(flag => {
        flag.addEventListener("mousemove", (dets) => {
            gsap.to("#flagImg", {
                left: dets.x,
                top: dets.y
            })
        })
    });

    Shery.makeMagnet(".nav-2 h3, .nav-1 div", {
        //Parameters are optional.
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 0.5,
    });

    // Completed till flag animation 
    // Put your progress on git hub 

}
// loader();

// document.addEventListener("DOMContentLoaded", () =>{
    // videoAnimation();
// })

function videoAnimation(){
    const video = document.getElementById("actualVideo");
    const videoContainer = document.getElementById("video-container");
    const playBtn = document.getElementById("play-btn");
    videoContainer.addEventListener("click", () => {
        if (video.paused) {
            video.play();
            document.getElementById("play-btn").style.opacity = 0;
            document.getElementById("videoImg").style.opacity = 0;
        } else {
            video.pause();
            document.getElementById("play-btn").style.opacity = 1;
            document.getElementById("videoImg").style.opacity = 1;
        }
    });

    videoContainer.addEventListener("mousemove", (dets) => {
        // document.getElementById("crsr").style.opacity = "0";
        gsap.to("#play-btn", {
            left: (dets.x - 450),
            top: (dets.y - 60)
        })
    });

    videoContainer.addEventListener("mouseleave", () => {
        // document.getElementById("crsr").style.opacity = "1";
        gsap.to("#play-btn", {
            left: 10 + "%",
            top: 15 + "%"
        })
    })
}

















































// Shery.imageEffect(".img", {
//     style: 4 /*OR 5 for different variant */,
//     // debug: true,
//   });

// Shery.hoverWithMediaCircle(".img" /* Element to target.*/, {
//     images: ["pic1.jpg"] /*OR*/,
//     //videos: ["video1.mp4", "video2.mp4"],
// });


// Shery.imageEffect(".img", {
//     style: 2, //Select Style
//     debug: true, // Debug Panel
//     config: {
//       /* Config made from debug panel */
//     },
//     // preset: "./presets/wigglewobble.json",
//   });