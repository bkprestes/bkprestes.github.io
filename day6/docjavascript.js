var httpRequest;

            function fazerRequisicao(url, destino){

             
                if(window.XMLHttpRequest){
                    httpRequest = new XMLHttpRequest();
                }else if(window.ActiveXObject){
                    try{

                        httpRequest = new ActiveXObject("Msxml2.XMLHTTP");

                    }catch(e){

                        try{

                            httpRequest = new ActiveXObject("Microsoft.XMLHTTP");

                        }catch(e){

                            alert("Impossível instanciar o objeto XMLHttpRequest para esse navegador/versão");

                        }

                    }
                }

                if(!httpRequest){
                    alert("Erro ao tentar criar uma instância do objeto XMLHttpRequest");
                    return false;
                }

                httpRequest.onreadystatechange = situacaoRequisicao;

                httpRequest.open("GET", url);
                httpRequest.send();

            }

            function situacaoRequisicao(){

                if(httpRequest.readyState == 4){
                    
                    if(httpRequest.status == 200){

                        document.getElementById('conteudo').innerHTML = httpRequest.responseText;

                    }

                }

            }


            /*jQuery*/

            $('#1').click(function(){
                $('#pedra-filosofal').removeClass('hide').addClass('show')

            });