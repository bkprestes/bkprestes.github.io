const capital = document.getElementById('capital')

const arrayCapitais = ['Florianópolis', 'São Paulo', 'Salvador', 'Porto Alegre']

for(let i=0; i<arrayCapitais.length;i++){
    const options = document.createElement('option')
    options.innerHTML=arrayCapitais[i]
    capital.appendChild(options)
}

