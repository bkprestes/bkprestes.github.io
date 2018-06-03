$('.img-fluid').hover(function(){
    $(this).addClass('img-maior')
},function(){
    $(this).removeClass('img-maior')
})

const nav = document.querySelector('[data-animacao]')
const main = document.getElementById('main')

function animeScroll(){
    const windowTop = window.pageYOffset
    console.log(windowTop)
    if(windowTop>150){
        nav.classList.add('navFixed')        
        main.classList.add('main')
    }else{
        nav.classList.remove('navFixed')
        main.classList.remove('main')
    }
}

window.addEventListener('scroll', function(){
    animeScroll()
})