let icono = document.createElement('i')
let nav = document.querySelector("nav")
let ul = document.querySelector("ul")


const verificar = () => {
    if (window.matchMedia("(max-width: 600px)").matches) {

        // as.forEach( (element) => {
        //     element.style.display = 'none'
        // })
        icono.classList.add("fa-solid", "fa-bars", "barras", "fa-xl")
        icono.id = 'menu'
        nav.insertBefore(icono, nav.firstChild)
    
    
    } else {

        nav.removeChild(icono)
    }
}

verificar();

window.addEventListener('resize', function(event){
    verificar();
});



icono.addEventListener("click", () => {

    if (ul.style.display === "block") {

        ul.style.display = "none"
        icono.style.display = "block"
        icono.classList.remove('fa-solid', 'fa-xmark', 'fa-xl')
        icono.classList.add("fa-solid", "fa-bars", "barras", "fa-xl")

    } else {

        ul.style.display = "block"
        icono.classList.remove("fa-solid", "fa-bars", "fa-xl")
        icono.classList.add('fa-solid', 'fa-xmark', 'fa-xl')

    }
})


