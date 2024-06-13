
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('section').forEach((section, i)=>{
    if (i === 0){
        section.style.backgroundPosition = "50% 0";
        gsap.to(section,{
            scrollTrigger:{
                trigger: section,
                start: "top top",
                end: "bottom top",
                scrub: true
            },
            ease: Linear.easeNone,
            backgroundPosition: `50% ${-innerHeight / 2}px`
        });
    }else{
        section.style.backgroundPosition = `50% ${innerHeight / 2}px`;
        gsap.to(section,{
            scrollTrigger: {
                trigger: section,
                scrub: true
            },
            ease: Linear.easeNone,
            backgroundPosition: `50% ${-innerHeight / 2}px`
        });
        gsap.set(`.section-${i} h2`,{
            opacity: 0
        });
        gsap.to(`.section-${i} h2`, {
            scrollTrigger:{
                trigger: `.section-${i} h2`,
                toggleActions: "play reverse play reverse",
                start: "top 70%",
                end: "bottom 30%",
                // scrub: "true",
                // markers:{
                //     startColor:"purple",
                //     endColor:"fuchsia",
                //     fontSize:"3rem"
                // }
            },
            opacity: 1,
            duration: 1.5,
            // ease: Power1.easeOut
        })

    }
});

