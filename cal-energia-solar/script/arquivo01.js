/*manipulação dos formularios 1 e 2*/

const peca = document.getElementById('peca')
const formulario1 = document.getElementById('formulario1')
const formulario2 = document.getElementById('formulario2')
peca.onchange = function(){
    if(this.value=='ducha-banho' || this.value=='lavatorio' || this.value=='ducha-higienica' || this.value=='banheira' || this.value=='pia-de-cozinha'){
        
        formulario2.setAttribute('class', 'hide')
        formulario1.setAttribute('class', 'show')
    }else if (this.value=='lava-loucas' || this.value=='maquina-lavar-roupa') {
        
        formulario1.setAttribute('class', 'hide')
        formulario2.setAttribute('class', 'show')
    } else {
        formulario1.setAttribute('class', 'hide')
        formulario2.setAttribute('class', 'hide')
    }
    
   
}

/*manipulação do botão ok referente aos formularios 1 e 2*/

const ok1 = document.getElementById('ok1')
const ok2 = document.getElementById('ok2')
const vazao1 = document.getElementById('vazao1')
const tempoMedio = document.getElementById('tempo-medio-seg-dia')
const qtdUso1 = document.getElementById('quantidade-uso-dia1')
const tabela1 = document.getElementById('tabela1')
const table1 = document.getElementById('table1')

/*verifica se campos estão vazios*/



ok1.onclick = function(){
    
    if(tempoMedio.value=='' || qtdUso1.value==''){
        alert('Não deixe os campos vazios, com exceção do campo Vazão.')
    }else{
        tabela1.setAttribute('class', 'show')
        formulario1.setAttribute('class', 'hide')
        const tr = document.createElement('tr')
        var td0 = document.createElement('td')
        var td1 = document.createElement('td')
        var td2 = document.createElement('td')  
        var td3 = document.createElement('td')      
        
        td0.innerHTML = peca.value
        td1.innerHTML = vazao1.value  
        td2.innerHTML = tempoMedio.value
        td3.innerHTML = qtdUso1.value
        

        tr.appendChild(td0)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)

        table1.appendChild(tr)

        document.getElementById('escolha').selected = true

        vazao1.value = ''
        tempoMedio.value = ''
        qtdUso1.value =''
        
        }

        return false
}

    const vazao2 = document.getElementById('vazao2')    
    const qtdUso2 = document.getElementById('quantidade-uso-dia2')
    const tabela2 = document.getElementById('tabela2')
    const table2 = document.getElementById('table2')

ok2.onclick = function(){
    

    if(qtdUso2.value==''){
        alert('Não deixe os campos vazios, com exceção do campo Vazão.')
    }else{
        tabela2.setAttribute('class', 'show')
        formulario2.setAttribute('class', 'hide')
        const tr = document.createElement('tr')
        var td0 = document.createElement('td')
        var td1 = document.createElement('td')
        var td2 = document.createElement('td')  
            
        
        td0.innerHTML = peca.value
        td1.innerHTML = vazao2.value
        td2.innerHTML = qtdUso2.value

        tr.appendChild(td0)
        tr.appendChild(td1)
        tr.appendChild(td2)

        table2.appendChild(tr)

        document.getElementById('escolha').selected = true

        vazao2.value = ''
        qtdUso2.value =''   
    }

    
    return false
}




const capital = document.getElementById('capital')

const arrayCapitais = ['Florianópolis', 'São Paulo', 'Salvador', 'Porto Alegre']

for(let i=0; i<arrayCapitais.length;i++){
    const options = document.createElement('option')
    options.innerHTML=arrayCapitais[i]
    capital.appendChild(options)
}

