function togglemode(){

const html = document.documentElement /*Document é a representação em formato de objeto em JS, o que vem depois do ponto
é o que acessa propriedades e funcionalidades */
html.classList.toggle('L')
const img = document.querySelector("#profile img")/*selecionao SELETOR TODO do css, digitar TODO o seletor*/ 

if (html.classList.contains('L')){
       /* html.classList.remove('L')*/
        img.setAttribute('src', './assets/avatar.png');
    

} else {

/*html.classList.add('L')*/
img.setAttribute('src', './assets/avl.png')

}


}