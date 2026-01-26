$(function() {
    $(window).scroll(function() {
        var scroll  = $(window).scrollTop();
        if (scroll >= 100) {
            $('.OptionMenu').addClass('.is-scrolled'); 
        }else{
            $('OptionMenu').addClass('.is-scrolled')
        }
    });
});

/*Efecto de size*/

document.addEventListener("DOMContentLoaded", () => {

    const steps = document.querySelectorAll(".scroll-step");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    // Quitamos active a todos
                    steps.forEach(step => step.classList.remove("active"));

                    // Activamos solo el que está visible
                    entry.target.classList.add("active");

                    handleScrollLock(entry.target);
                }

            });
        },
        {
            threshold: 0.6
        }
    );

    steps.forEach(step => observer.observe(step));

});

