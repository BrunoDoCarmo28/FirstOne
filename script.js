function togglemode(){

const html = document.documentElement 
html.classList.toggle("L")
const img = document.querySelector("#profile img")

if (html.classList.contains("L")){
   img.setAttribute("src", "./assets/avatar.png")
    

} else {

img.setAttribute("src", "./assets/avl.png")

}


}
