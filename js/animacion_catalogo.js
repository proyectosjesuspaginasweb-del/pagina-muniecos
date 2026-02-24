/*Boton de modo oscuro/claro*/

const temaCheckbox = document.getElementById("theme-checkbox");
const imgWho = document.querySelector(".ContainerWhoXo");
const btnBlack = document.querySelector(".slider");

temaCheckbox.addEventListener("change", ()=>{
    
    if (temaCheckbox.checked) {
        document.body.classList.add("dark-mode");
        console.log("Modo Oscuro Activado");
        imgWho.classList.add("the-containercontactXo");
        btnBlack.classList.add("mode-black-slider")

    } else {
        document.body.classList.remove("dark-mode");
        console.log("Modo Claro Activado");
        imgWho.classList.remove("the-containercontactXo");
        btnBlack.classList.remove("mode-black-slider")
    }
});

/*fin de tema de modo*/

/*Inicio de efecto del menu en seguimiento y efecto de movimiento en pagina*/

// 1. Metemos todo en una función para poder reutilizarla
const handleScrollEffect = () => {
    const container = document.querySelector(".ContainerImgSizeXo");
    const steps = document.querySelectorAll(".SizeImg");
    
    if (!container) return; // Seguridad Senior: si no existe el div, no rompas el código

    const rect = container.getBoundingClientRect();
    
    // Calculamos el progreso. 
    // Usamos Math.max y Math.min para que el número siempre esté entre 0 y 1
    let scrollPercent = -rect.top / (rect.height - window.innerHeight);
    
    // Normalizamos el porcentaje
    if (scrollPercent >= 0 && scrollPercent <= 1) {
        const targetIndex = Math.floor(scrollPercent * steps.length);
        const activeIndex = Math.min(targetIndex, steps.length - 1);

        steps.forEach((step, index) => {
            if (index === activeIndex) {
                step.classList.add("active");
            } else {
                step.classList.remove("active");
            }
        });
    }
};

// Dispara el efecto cuando el usuario hace scroll
window.addEventListener("scroll", handleScrollEffect);

// ¡CLAVE! Dispara el efecto en cuanto la página carga
window.addEventListener("DOMContentLoaded", handleScrollEffect);

// OPCIONAL: Por si el usuario cambia el tamaño de la ventana
window.addEventListener("resize", handleScrollEffect);

// window.addEventListener("scroll", () => {/*cuando el usuario mueva la rueda del raton hacia abajo has este efecto*/
//     const container = document.querySelector(".ContainerImgSizeXo");
//     const steps = document.querySelectorAll(".SizeImg");
    
//     // Calculamos cuánto hemos scrolleado dentro del contenedor
//     const rect = container.getBoundingClientRect();
//     const scrollPercent = -rect.top / (rect.height - window.innerHeight);
    
//     if (scrollPercent >= 0 && scrollPercent <= 1) {
//         // Dividimos el progreso entre el número de imágenes
//         const stepIndex = Math.floor(scrollPercent * steps.length);
//         const targetIndex = Math.min(stepIndex, steps.length - 1);

//         steps.forEach((step, index) => {
//             if (index === targetIndex) {
//                 step.classList.add("active");
//             } else {
//                 step.classList.remove("active");
//             }
//         });
//     }
// });

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





