window.addEventListener("load", () =>{/*Ecoje la ventana e indicas que al momento de cargar hagaa lo siguiente un un callback*/
    document.querySelectorAll(".icons1").forEach(icon =>{
    icon.classList.add("mostrar");});/*Selecciona la clase icon del html y lo muestra en el css con la animacion*/
});

window.addEventListener("load", () =>{/*el .forEach ayuda a seleccionar mas de un elemento de class*/
    document.querySelectorAll(".icons2").forEach(icon =>{
    icon.classList.add("mostrar2");
    })
});