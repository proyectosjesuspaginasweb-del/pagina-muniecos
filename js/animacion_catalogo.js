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

document.addEventListener("DOMContentLoaded", () => {/*DOM dice cuando la pagina este 100% cargada ejecuta lo siguiente*/

    const steps = document.querySelectorAll(".scroll-step");/*Buscame en el html la clase llamada .scroll-step y guardamela como una constante*/

    const observer = new IntersectionObserver(/*IntersectionObserver si los elementos salen o entran hasmela visible*/
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

