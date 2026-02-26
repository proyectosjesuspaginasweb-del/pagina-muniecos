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

/*Efecto de carga de animacion en who*/

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
    });
});

/*Fin efecto de carga de animacion en who*/

//animacion en scroll buttom en pagina

const scrollbuttom = [//constantes definidas en un Array
    {id: "tittleandtextaimxo", className: "scroll-tittleandtextaimxo"},
    {id: "textaimxo1", className: "scroll-textaimxo1"},
    {id: "textaimxo2", className: "scroll-textaimxo2"},
    {id: "textaimxo3", className: "scroll-textaimxo3"}
];

window.addEventListener('scroll', () =>{//guardia llamado windows al momento de que la ventana de scroll
    scrollbuttom.forEach(item =>{//bucle hasta que se cumpla el bucle hasta que se cumpla la condicion
        const elementoscroll = document.getElementById(item.id);

    if (elementoscroll) {
        
        // 2. Medimos la distancia del elemento al techo de la pantalla
        const posicionelementoscroll = elementoscroll.getBoundingClientRect().top;

        // 3. Definimos un "punto de activación" (ejemplo: a un 100% de la pantalla)
        const puntodeactivacion = window.innerHeight * 1;//indica que en que punto se activara la animacion

        if (posicionelementoscroll < puntodeactivacion){
            // Si el elemento subió lo suficiente, le ponemos la clase de CSS
            elementoscroll.classList.add(item.className);
        }else{
            // Opcional: si quieres que la animación se repita al subir
            elementoscroll.classList.remove(item.className);
        }
    }
    });
});




