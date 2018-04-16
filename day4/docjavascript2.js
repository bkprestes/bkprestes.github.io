function trocaClasse(elemento, antiga, nova) {
		    elemento.classList.remove(antiga);
		    elemento.classList.add(nova);
		}

    	function voltarVermelho(){
    		var vermelho = document.getElementById('vermelho');

    		vermelho.src = 'imagens/pixi-vermelho.jpg';
    		setTimeout(function() {
			    var nav = document.querySelector('nav');
			    trocaClasse(nav, 'bg-danger', 'bg-dark');
			}, 50);
    	}

    	function trocarVermelho(){
    		var vermelho2 = document.getElementById('vermelho');

    		vermelho2.src = 'imagens/pixi-vermelho2.jpg';
    		setTimeout(function() {
			    var nav = document.querySelector('nav');
			    trocaClasse(nav, 'bg-dark', 'bg-danger');
			}, 50);

    	}

    	function voltarAzul(){
    		var azul = document.getElementById('azul');

    		azul.src = 'imagens/pixi-azul.jpg';
    		setTimeout(function() {
			    var nav = document.querySelector('nav');
			    trocaClasse(nav, 'bg-primary', 'bg-dark');
			}, 50);
    	}

    	function trocarAzul(){
    		var azul2 = document.getElementById('azul');

    		azul2.src = 'imagens/pixi-azul2.jpg';

    		setTimeout(function() {
			    var nav = document.querySelector('nav');
			    trocaClasse(nav, 'bg-dark', 'bg-primary');
			}, 50);
    	}

    	function voltarPreto(){
    		var preto = document.getElementById('preto');

    		preto.src = 'imagens/pixi-preto.jpg';

    	}

    	function trocarPreto(){
    		var preto2 = document.getElementById('preto');

    		preto2.src = 'imagens/pixi-preto2.jpg';
    	}

    	function voltarBranco(){
    		var branco = document.getElementById('branco');

    		branco.src = 'imagens/pixi-branco.jpg';
    		setTimeout(function() {
			    var nav = document.querySelector('nav');
			    trocaClasse(nav, 'bg-light', 'bg-dark');
			}, 50);
    	}

    	function trocarBranco(){
    		var branco2 = document.getElementById('branco');

    		branco2.src = 'imagens/pixi-branco2.jpg';


    		setTimeout(function() {
			    var nav = document.querySelector('nav');
			    trocaClasse(nav, 'bg-dark', 'bg-light');
			}, 50);


  
    	}

    	function corPreta(n){
				var a = document.getElementById(n);
				trocaClasse(a, 'text-white', 'text-dark');
		}

		function corBranca(n){
				var a = document.getElementById(n);
				trocaClasse(a, 'text-dark', 'text-white');
		}


    	function voltarTodos(){
    		var todos = document.getElementById('todos');

    		todos.src = 'imagens/pixi-todos.jpg';
    	}

    	function trocarTodos(){
    		var todos2 = document.getElementById('todos');

    		todos2.src = 'imagens/pixi-lado.jpg';
    	}