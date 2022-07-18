window.addEventListener('load', () => {
    function splitToLinesAndFadeUp(selector, $scroller) {
        document.querySelectorAll(selector).forEach(text => {
            let mathM = text.innerHTML.match(/<\s*(\w+\b)(?:(?!<\s*\/\s*\1\b)[\s\S])*<\s*\/\s*\1\s*>|\S+/g);
            if (mathM === null) return;
            mathM = mathM.map(el => `<span style="display:inline-flex; overflow: hidden"><span>${el}</span></span>`);
            text.innerHTML = mathM.join(' ');

            let tl = gsap
                .timeline({
                    paused: true,
                    scrollTrigger: {
                        scroller: document.body,
                        trigger: text,
                        once: true,
                    },
                })
                .fromTo(
                    text.querySelectorAll('span>span'),
                    { yPercent: 100 },
                    { yPercent: 0, delay: 0.4, stagger: 0.05, duration: 1.3, ease: "power4.out" }
                );
        });
    }
    splitToLinesAndFadeUp('.description-left .title, .description-left .title, .first-info-wrapper .title2, .section-5 .title3, .section-6 .title4, .section-7 .title3, .section-8 .title5, .section-8 .title2, .section-10-top .title5, .title-404, .text-404');
})

