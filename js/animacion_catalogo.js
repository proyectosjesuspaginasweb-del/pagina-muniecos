/*Boton de modo oscuro/claro*/

const temaCheckbox = document.getElementById("theme-checkbox");
const imgWho = document.querySelector(".ContainerWhoXo");

temaCheckbox.addEventListener("change", ()=>{
    
    if (temaCheckbox.checked) {
        document.body.classList.add("dark-mode");
        console.log("Modo Oscuro Activado");
        imgWho.classList.add("the-containercontactXo");

    } else {
        document.body.classList.remove("dark-mode");
        console.log("Modo Claro Activado");
        imgWho.classList.remove("the-containercontactXo");
    }
});

/*fin de tema de modo*/

/*Inicio de efecto del menu en seguimiento y efecto de movimiento en pagina*/

const updateActiveImage = () => {
    const container = document.querySelector(".ContainerImgSizeXo");
    const steps = document.querySelectorAll(".SizeImg");
    
    if (!container || steps.length === 0) return;

    const rect = container.getBoundingClientRect();
    
    // Calculamos el progreso. 
    // Si rect.top es positivo, aún no llegamos al contenedor.
    let scrollPercent = -rect.top / (rect.height - window.innerHeight);

    // --- MI CRÍTICA: Lógica de protección ---
    let targetIndex = 0; // Por defecto, la primera imagen

    if (scrollPercent >= 0 && scrollPercent <= 1) {
        // Si estamos dentro del contenedor, calculamos cuál toca
        const stepIndex = Math.floor(scrollPercent * steps.length);
        targetIndex = Math.min(stepIndex, steps.length - 1);
    } else if (scrollPercent > 1) {
        // Si ya pasamos el contenedor, dejamos la última activa
        targetIndex = steps.length - 1;
    }
    // Si scrollPercent es < 0, targetIndex se queda en 0 (la primera)

    steps.forEach((step, index) => {
        step.classList.toggle("active", index === targetIndex);
    });
};

window.addEventListener("scroll", updateActiveImage);
window.addEventListener("load", updateActiveImage); // También al terminar de cargar todo
updateActiveImage();

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





