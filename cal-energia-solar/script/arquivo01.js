const peca = document.getElementById('peca')
peca.onchange = function(){
    if(this.value=='ducha-banho' || this.value=='lavatorio' || this.value=='ducha-higienica' || this.value=='banheira' || this.value=='pia-de-cozinha'){
        const formulario = document.getElementById('formulario')
        formulario.setAttribute('class', 'show')
    }else{
        formulario.setAttribute('class', 'hide')
        
    }
}




const capital = document.getElementById('capital')

const arrayCapitais = ['Florianópolis', 'São Paulo', 'Salvador', 'Porto Alegre']

for(let i=0; i<arrayCapitais.length;i++){
    const options = document.createElement('option')
    options.innerHTML=arrayCapitais[i]
    capital.appendChild(options)
}

