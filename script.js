function togglemode(){

const html = document.documentElement

html.classList.toggle("L")
   
const img = document.querySelector("#profile img")/*selecionao SELETOR TODO do css, digitar TODO o seletor*/ 

if (html.classList.contains("L")){
       
 img.setAttribute("src", "Assets/avatar.png")
    

} else {

img.setAttribute("src", "Assets/avl.png")

}


}
