
const links = document.getElementById('links');
const linklink = document.getElementById('network');
const network = document.getElementById('menu-network');

function verificarTamanho(){
    if(window.innerWidth>768){
        linklink.classList.remove('hide')
        network.setAttribute('class', 'hide');
    }else{
        network.setAttribute('class', 'show');
        linklink.classList.add('hide')
    }
}



function redimensionar(){
    verificarTamanho();
}

verificarTamanho();
window.addEventListener('resize', function(){
    redimensionar();
});

const menu = document.getElementById('lista-menu').getElementsByTagName('a');

for(let i=0; i<4; i++){
    menu[i].onmouseover = function(){
        menu[i].innerHTML = menu[i].getAttribute('data-traducao')
    }
    menu[i].onmouseout = function(){
        menu[i].innerHTML = menu[i].getAttribute('data-original')
    }
}




