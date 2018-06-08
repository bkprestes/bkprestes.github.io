
const links = document.getElementById('links');
const linklink=document.getElementById('network');
const network = document.getElementById('menu-network');
function redimensionar(){
    if(window.innerWidth>768){
        linklink.appendChild(links);
        network.setAttribute('class', 'hide');
    }else{
        network.setAttribute('class', 'show');
    }
}

window.addEventListener('resize', function(){
    redimensionar();
});



