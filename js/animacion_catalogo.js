/*Inicio de efecto del menu en seguimiento y efecto de movimiento en pagina*/


const scrollElements = [
    { id: "navbar", className: "is-scrolled" },
    { id: "optionav", className: "is-scrollednav" },
    { id: "imglogoXo", className: "is-scrollimgnav" }, // Ojo a las mayúsculas
    { id: "aimtittle", className: "scroll-tittleaim"},
    { id: "aimtextscroll", className: "scroll-textaim"},
    { id: "sizetext", className: "scroll-textsize"},
    { id: "catalogotittle", className: "scroll-tittlecatalogo"},
    { id: "catalogotexto", className: "scroll-textcatalogo"}
];



const loadwindows = [
    {id: "scrolltittleWho", className: "scroll-tittlewho"},
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



/*termino de efecto del menu en seguimiento y efecto de movimiento en pagina*/

/*termino de efecto del menu en seguimiento y efecto de movimiento en pagina*/

/*termino de efecto del menu en seguimiento y efecto de movimiento en pagina*/

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





