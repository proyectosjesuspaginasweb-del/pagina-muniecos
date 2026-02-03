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

window.addEventListener("scroll", () => {/*cuando el usuario mueva la rueda del raton hacia abajo has este efecto*/
    const container = document.querySelector(".ContainerImgSizeXo");
    const steps = document.querySelectorAll(".SizeImg");
    
    // Calculamos cuánto hemos scrolleado dentro del contenedor
    const rect = container.getBoundingClientRect();
    const scrollPercent = -rect.top / (rect.height - window.innerHeight);
    
    if (scrollPercent >= 0 && scrollPercent <= 1) {
        // Dividimos el progreso entre el número de imágenes
        const stepIndex = Math.floor(scrollPercent * steps.length);
        const targetIndex = Math.min(stepIndex, steps.length - 1);

        steps.forEach((step, index) => {
            if (index === targetIndex) {
                step.classList.add("active");
            } else {
                step.classList.remove("active");
            }
        });
    }
});

/*Efecto de ventana para imagenes catalogo*/


