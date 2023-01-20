function togglemode() {
  const html = document.documentElement
  html.classList.toggle("L")

  
  const img = document.querySelector("#profile img")

  
  if (html.classList.contains("L")) {

    img.setAttribute("src", ".Assets/avl.png")
  } else {
    
    img.setAttribute("src", ".Assets/avatar.png")
  }
}
