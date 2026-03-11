document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(SplitText)
    document.fonts.ready.then(() =>{
    gsap.set(".welcomeContainer", { opacity:1 });

    const headlineSplit = SplitText.create(".welcomeContainer", {
        type: "words",
        wordsClass: "word++",
        ignore: "sup"
    });

    gsap.from(headlineSplit.words, {
        y: -100,
        opacity: 0,
        rotation: "random(-80, 80)",
        stagger: 0.1,
        duration: 1.5,
        ease: "back",
        repeat: 2
    })
});
});