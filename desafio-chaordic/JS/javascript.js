function X(json){

	/*pega dados gsonp e retorna numa variavel simplificada*/
	function getJSONP(jsonpFixed){
		return jsonpFixed
	}

	//criação do produto vizualizado
	function createProdRef(){
		jsonRef = getJSONP(json.data.reference.item)

		productReference = {
			businessId: jsonRef.businessId,
			name: jsonRef.name,
			imageName: jsonRef.imageName,
			detailUrl: jsonRef.detailUrl,
			oldPrice: jsonRef.oldPrice,
			price: jsonRef.price,
			productInfo: jsonRef.productInfo.paymentConditions
		}

		return productReference
	}

	/*criação dos produtos recomendados*/
		
	function createProdRecommended(i){
		jsonRec = getJSONP(json.data.recommendation)

		
			productRecommeded = {
				businessId: jsonRec[i].businessId,
				name: jsonRec[i].name,
				imageName: jsonRec[i].imageName,
				detailUrl: jsonRec[i].detailUrl,
				oldPrice: jsonRec[i].oldPrice,
				price: jsonRec[i].price,
				productInfo: jsonRec[i].productInfo.paymentConditions
			}
		

		return productRecommeded
	}

	/*limitar a exibição de uma frase de acordo com numero de caracteres*/
	function limitePhrase(phrase){
		if(phrase.length>70){
			return phrase.slice(0,70)+'...'
						
		}
		
	}

	/*add http para link funcionar corretamente*/
	function addTextHttp(obj){
		return 'http:'+obj
	}

	function beforeText(obj, text){
		if(obj!==null){
			return text+obj
		}
		return null
	}

	function afterText(obj,text){
		if(obj!==null){
			return obj+text
		}
	}
	
	function buildProdRef(){
		prodRef = createProdRef()
		div = document.createElement('div')
		document.getElementById('product-reference').appendChild(div)
		div.setAttribute('id', prodRef.businessId)
		div.appendChild(document.getElementById('produto'))
		document.getElementById('name-prod-reference').innerHTML = limitePhrase(prodRef.name)
		document.getElementById('link-prod-reference').setAttribute('href', addTextHttp(prodRef.detailUrl))
		document.getElementById('image-prod-reference').setAttribute('src', addTextHttp(prodRef.imageName))
		document.getElementById('oldPrice-prod-reference').innerHTML = beforeText(prodRef.oldPrice, 'De: ')
		document.getElementById('price-prod-reference').innerHTML = beforeText(prodRef.price, 'Por: ')
		document.getElementById('info-prod-reference').innerHTML = afterText(prodRef.productInfo, ' sem juros')
	}		

	function buildProdRecom(){
		
		for(let i=0; i<json.data.widget.size; i++){
			prodRec = createProdRecommended(i)
			
			div = document.createElement('div')
			a = document.createElement('a')
			img = document.createElement('img')
			p = document.createElement('p')
			small0=document.createElement('small')
			small1 = document.createElement('small')
			small2 = document.createElement('small')
			
			div.setAttribute('id', prodRec.businessId)
			div.setAttribute('class', 'product')
			a.setAttribute('href', addTextHttp(prodRec.detailUrl))
			img.setAttribute('src', addTextHttp(prodRec.imageName))
			small0.setAttribute('class', 'old-price')
			small1.setAttribute('class', 'price')
			small2.setAttribute('class', 'product-info')

			p.innerHTML = limitePhrase(prodRec.name)			
			small0.innerHTML = beforeText(prodRec.oldPrice, 'De: ')			
			small1.innerHTML = beforeText(prodRec.price, 'Por: ')			
			small2.innerHTML = afterText(prodRec.productInfo, ' sem juros')

			document.getElementById('product-recommended').appendChild(div)
			div.appendChild(a)
			a.appendChild(img)
			a.appendChild(p)
			a.appendChild(small0)
			a.appendChild(small1)
			a.appendChild(small2)			
		}		
	}

	buildProdRef()
	buildProdRecom()





	/*pagination*/
	function pagination() {
		var prevButton = document.getElementById('prev');
		var nextButton = document.getElementById('next');
		var listProdRecom = document.getElementById('product-recommended');
		var divListProdRecom = document.getElementById('recommended');

		var minDistance = 0;
		// 10 = padding-left + padding-right
		var maxDistance = 1500 * -1;

		listProdRecom.style.left = listProdRecom.style.left === '' ? 0 : listProdRecom.style.left;
		prevButton.classList.add("disabled");

		prevButton.addEventListener('click', function() {
			var current = listProdRecom.style.left;
			nextButton.classList.remove("disabled");

			if(parseInt(current) === minDistance) {
				return;
			}

			listProdRecom.style.left = (parseInt(current) + 250) + 'px';
			addDisableClass(listProdRecom.style.left, minDistance, prevButton);
		});

		nextButton.addEventListener('click', function() {
			var current = listProdRecom.style.left;
			prevButton.classList.remove("disabled");
			console.log(current)
			if(parseInt(current) === parseInt(maxDistance)) {
				return;
			}

			listProdRecom.style.left = (parseInt(current) - 250) + 'px';
			addDisableClass(listProdRecom.style.left, maxDistance, nextButton);
		});

		function addDisableClass(ulLeft, distance, button) {
			if(parseInt(ulLeft) === parseInt(distance)) {
				button.classList.add("disabled");
			}
		}
	}

	pagination()	

}



let elemento = document.createElement('script')
elemento.setAttribute('type', 'text/javascript')
elemento.src='http://roberval.chaordicsystems.com/challenge/challenge.json?callback=X'
document.head.appendChild(elemento)