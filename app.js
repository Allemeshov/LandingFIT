const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.to(".text-first", { y: "0%", duration: 1 });
tl.to(".text-second", { y: "0%", duration: 1 });
tl.to(".hide-first", { x: "-550%", duration: 0.75 });
tl.to(".hide-second", { x: "550%", duration: 0.75 }, "-=0.75");
tl.fromTo(".intro", { opacity: 1 }, { opacity: 0, duration: 1.5 }, "-=0.6");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 2 });
tl.fromTo(".landing", { opacity: 0 }, { opacity: 1, duration: 2 }, "-=2");
tl.to(".intro", { y: "-100%" });
