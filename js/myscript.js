window.onload = () => {

let menu = document.getElementById('menu');

    function showMenu(){
        let divSpan = document.getElementById('span-mobile');
        divSpan.addEventListener('click', function(){
            menu.style.display = 'block';
        })
    }

    function closeMenu(){
        let close = document.getElementById('close-menu');
        close.addEventListener('click', function(){
            menu.style.display = 'none';
        })
    }

    

    function showText(words){
        let span = document.getElementById('texto-custom');
        let wordFirst = span.innerText;
        words.push(wordFirst);
        
        let i =0;
        do{
            
            setInterval(function(){
                span.innerText = words[i];      
                
                if(i==(words.length-1)){
                    i=0;
                }else{
                    i++;
                }
                      
            }, 1500);

            
        }while(i==(words.length));
        
        
    }

    let palavras = ['Web', 'Front-End'];

    showMenu();
    closeMenu();
    showText(palavras);

}