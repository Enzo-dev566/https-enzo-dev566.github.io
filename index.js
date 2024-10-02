/* Modo oscuro-Modo claro */
let darkmode = localStorage.getItem('darkmode')
const tema = document.getElementById('tema')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
} 
const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}
if(darkmode === 'active') enableDarkmode()
tema.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== 'active' ? enableDarkmode() : disableDarkmode()
})

/* Responsive */
const nav = document.querySelector(".navbar");
const open = document.querySelector("#open-menu");
const exit = document.querySelector("#exit-menu");

open.addEventListener("click", () => {
    nav.classList.add("visible");
})

exit.addEventListener("click", () => {
    nav.classList.remove("visible");
})