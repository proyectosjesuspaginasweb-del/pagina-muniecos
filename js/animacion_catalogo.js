/*Inicio de efecto del menu en seguimiento y efecto de movimiento en pagina*/

window.addEventListener("scroll", () => {/*cuando el usuario mueva la rueda del raton hacia abajo has este efecto*/
    const container = document.querySelector(".ContainerImgSizeXo");
    const steps = document.querySelectorAll(".SizeImg");
    
    // Calculamos cuánto hemos scrolleado dentro del contenedor
    const rect = container.getBoundingClientRect();
    const scrollPercent = -rect.top / (rect.height - window.innerHeight);
    
    if (scrollPercent >= 0 && scrollPercent <= 10) {
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

/*Empieza el seguimiento del menu*/

const scrollnav = [
    { id: "navbar", className: "is-scrolled"},
    { id: "imgnavxo", className: "is-scrollednav"},
    { id: "optionav", className: "is-scrolloptionnav"}
]

//El vigilate
window.addEventListener("scroll", () =>{
    //Se crea una constante para saber cuanto se ha movido el scroll verticalmente
    const scrollActual = window.scrollY

    //Recorre la constante (por si en el futuro tenemos mas de una elemento)
    scrollnav.forEach(item =>{
        const elemento = document.getElementById(item.id)//en la constante elemento se guardar el id que se pone en scrollnav

        if (scrollActual > 100) {
            elemento.classList.add(item.className);
        } else {
            elemento.classList.remove(item.className);
        }
    });
});


/*Termina el seguimiento del menu*/


/*termino de animacion de menu*/

const loadwindows = [
    {id: "scrolltittleWho", className: "animationwhotittle"},
    {id: "scrolltextWho", className: "animationwhotext"},
    {id: "imgwhoxo", className: "animationimgwho"}
];

window.addEventListener('DOMContentLoaded', () =>{
    loadwindows.forEach(item=>{
        const el = document.getElementById(item.id);
        if (el) {
            el.classList.toggle(item.className);
        }
    })
});


/*termino de efecto del menu en seguimiento y efecto de movimiento en pagina*/





