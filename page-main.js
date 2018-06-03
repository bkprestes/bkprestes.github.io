$('.img-fluid').hover(function(){
    $(this).addClass('img-maior')
},function(){
    $(this).removeClass('img-maior')
})

const nav = document.querySelector('nav')
const main = document.getElementById('main')
const foto = document.getElementsByClassName('imagem-rebeca')[0]

function animeScroll(){
    const windowTop = window.pageYOffset
    if(windowTop>150){
        nav.classList.add('navFixed')        
        main.classList.add('main')
        foto.classList.add('hide')
        nav.style.marginTop = "0px";
        nav.style.left = '0';
    }else{
        nav.classList.remove('navFixed')
        main.classList.remove('main')
        foto.classList.remove('hide')
        nav.style.marginTop = "50px";
    }
}

window.addEventListener('scroll', function(){
    animeScroll()
})