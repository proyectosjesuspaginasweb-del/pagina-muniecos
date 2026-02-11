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


/*Inicio de efecto del menu en seguimiento*/


const scrollElements = [
    { id: "navbar", className: "is-scrolled" },
    { id: "optionav", className: "is-scrollednav" },
    { id: "imglogoXo", className: "is-scrollimgnav" }, // Ojo a las mayúsculas
    { id: "scrolltittleWho", className: "scroll-tiitle" } // El nombre que mencionaste
];

window.onscroll = () =>{
    const isScrolled = window.scrollY > 10;

    scrollElements.forEach(item =>{
        const element = document.getElementById(item.id);
        if (element) {
            element.classList.toggle(item.className, isScrolled);
        }
    });
}

const loadwindows = [
    {id: "scrolltittleWho", className: "scroll-tittle"},
    {id: "scrolltextWho", className: "scroll-text"},
    {id: "imgwhoxo", className: "loadimgwho"}
];

window.addEventListener('DOMContentLoaded', () =>{
    loadwindows.forEach(item=>{
        const el = document.getElementById(item.id);
        if (el) {
            el.classList.add(item.className);
        }
    })
});

/*const navbar = document.getElementById("navbar");
const navoption = document.getElementById("optionav");
const imgnav = document.getElementById("ImgLogoXo");
const imgwho = document.getElementById("imgwhoxo");
const titulowho = document.getElementById("scrolltittleWho");

window.onscroll = function () {
    if (window.scrollY > 10) {
        navbar.classList.add('is-scrolled');
        navoption.classList.add('is-scrollednav');
        imgnav.classList.add('is-scrollimgnav');
        imgwho.classList.add('scrollimgwhoxo');
        titulowho.classList.add('scroll-tiitle');
    
    }else{
        navbar.classList.remove('is-scrolled');
        navoption.classList.remove('is-scrollednav');
        imgnav.classList.remove('is-scrollimgnav');
        imgwho.classList.remove('scrollimgwhoxo');
        titulowho.classList.remove('scroll-tiitle');
    }
}*/


/*fin de efecto del menu en seguimiento*/

/*Inicio del efecto del movimiento del who*/


/*Termino del efecto del movimiento del who*/

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



