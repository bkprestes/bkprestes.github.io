<!DOCTYPE html>
<html lang="pt-br">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<title>Rebeca Prestes</title>
		<!--bootstrap css-->
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">

		<!--icon font-->
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

		<!--css personalizado-->
		<link rel="stylesheet" type="text/css" href="./css/mystyle.css">



		

	</head>
	<body>

		<div id="main" class="container-fluid">
			<div class="row">
				<div class="col-12 col-md-2">
					<div id="menu">
						<ul id="lista-menu">
							<li><a href="#sobre-mim" data-traducao="Sobre mim" data-original="About">About</a></li>
							<li><a href="#portfolio" data-traducao="Portfólio" data-original="Portfolio">Portfolio</a></li>
							<li><a href="#contato" data-traducao="Contato" data-original="Contact">Contact</a></li>
							<li><a href="#links" class="show" id="menu-network">Network</a></li>
						</ul>
					</div>
				</div>
				<div class="col-12 col-md-8">
					<div>
						<div id="imagem">
							<img class="img-fluid" src="./imagens/sunset-3416768_960_720.jpg">
						</div>
						<div id="sobre-mim">
							<h1>Rebeca Prestes</h1>
							<p>Olá! Meu nome é Rebeca Prestes de Andrade, tenho 25 anos, sou natural de Porto Alegre-RS e resido em Florianópolis há mais de 10 anos.
					  		<br>Sou formada em Técnico em Informática, com ênfase em Desenvolvimento de Sistemas, pelo Instituto Federal de Santa Catarina (IFSC).
					  		<br> Sou apaixonada por programação. Atualmente, o meu foco é o desenvolvimento web. Alguns de meus projetos, como desenvolvedora front-end jr, podem ser visualizados na seção <a href="#portfolio">Portfólio</a>. Esses projetos foram desenvolvidos com HTML, CSS, Bootstrap, Javascript e jQuery.</p>
						</div>
					</div>
					<div id="portfolio">
						<h2>Portfólio</h2>
						<div class="row">
							<div class="col-12 col-md-6">
								<a href='./convite' target="_blank"><img src="imagens/conviteEvento.png" class="d-block mx-auto img-fluid" alt="portfolio convite evento" title="Convite Evento"></a>
								<a href="./celular-alcatel" target="_blank"><img src="imagens/siteProduto.png" class="d-block mx-auto img-fluid" alt="portfolio site produto" title="Site Produto"></a>
								<a href="./autora-harryPotter" target="_blank"><img src="imagens/bookAuthor.png" class="d-block mx-auto img-fluid" alt="portfolio book author" title="Book/Author"></a>

							</div>
							<div class="col-12 col-md-6">
								<a href="./festa-junina" target="_blank"><img src="imagens/atracaoTuristica.png" class="d-block mx-auto img-fluid" alt="portfolio atração turística" title="Atração Turística"></a>
								<a href="./menu-restaurante" target="_blank"><img src="imagens/menuRestaurante.png" class="d-block mx-auto img-fluid" alt="portfolio menu restaurante" title="Menu Restaurante"></a>
							</div>
						</div>
					</div>
					<div id="contato">
						<h2>Contato</h2>
						<div class="row">
							<div class="col-12 col-md-6">
								<p>Escreva a sua mensagem. Assim que puder, entrarei em contato com você! ;)</p>
							</div>
							<div class="col-12 col-md-6">
								<form method="post">
									<input type="text" name="nome" placeholder="Seu nome"><br>
									<input type="text" name="email" placeholder="Seu e-mail"><br>
									<textarea name="mensagem" placeholder="Sua mensagem"></textarea><br>
									<button type="submit" name="enviar">Enviar</button>
								</form>
							</div>
						</div>
						
					</div>
				</div>
				<div id="network" class="col-md-2">
					
				</div>
				
			</div>
			<div id="links" class="col-12">
				<h2>Redes Sociais</h2>
				<ul>
					<li><a class="fa fa-linkedin-square" href="https://www.linkedin.com/in/rebecaprestes/" target="_blank" title="Linkedin"></a></li>
	  				<li><a class="fa fa-github" href="https://github.com/bkprestes" target="_blank" title="Github"></a></li>
				</ul>
			</div>
		</div>

		<?php
			if(isset($_POST['enviar']))
				{
				//acessar a include, fora do diretório da nossa aplicação, que armazenma os dados de e-mail do remetente - nós, os desenvolvedores
				require_once "../../../dados-email/acessa-email.inc.php";
				
				//chamar a include que conecta o nosso PHP à classe PHPMailer
				require_once "./phpmailer/PHPMailerAutoload.php";
				
				//receber os dados do formulário
				$emailDoDestinatario = $_POST['email'];
				$nomeDoDestinatario = $_POST['nome'];
				$msgDoDestinatario = $_POST['mensagem'];
				
				
				$mail = new PHPMailer(); //instancia um objeto email a partir da classe PHPMailer
				
				//definir o conjunto de caracteres para não termos problemas de acentuação no e-mail
				$mail->CharSet = "UTF-8";
				$mail->setLanguage("pt-br"); //idioma das mensagens de erro
				
				//configuração dos dados do servidor de e-mail
				$mail->Host = "smtp.gmail.com"; //endereço do servidor de e-mail do rementente - nós, os desenvolvedores
				
				$mail->Username = $usuario;
				
				$mail->Password = $senha;
				
				$mail->Port = 587; //465
				
				$mail->SMTPSecure = "tls"; //ssl
				
				$mail->isSMTP(); //aciona o serviço de envio de e-mails seguro
				
				$mail->SMTPAuth = true; //certifica para o Google que o nosso script trabalhará com autenticação segura
				
				//configurar os dados que serão enviados na mensagem ao usuário, o destinatário do e-mail
				$mail->IsHTML(true);
				
				$mail->Subject = "Teste de e-mail com PHP";
				
				//nossos dados - do remetente
				$mail->AddReplyTo($usuario, "Administrador do Sistema"); //nome e e-mail nossos, que iremos receber a resposta da dona Maria
				
				$mail->SetFrom($usuario, "Administrador do Sistema"); //para a dona Maria identificar os nossos dados, os remetentes do e-mail
				
				//alguns dados do destinatário
				$mail->AddAddress($emailDoDestinatario, $nomeDoDestinatario); //email e nome do destinatário - posso chamar este método quantas vezes quiser, para e-mails diferentes
				
				/*definindo a mensagem do e-mail*/
				$mail->Body = "<h1> Você registro em nossa aplicação, com os seguintes: </h1>
																		<p> Nome: $nomeDoDestinatario </p>
																		<p> Idade: $idadeDoDestinatario </p>
																		<p> E-mail: $emailDoDestinatario </p>
																		<p> Login: $loginDoDestinatario </p>";
																		
				$mail->AltBody = "Mesma mensagem anterior, mas somente com texto puro";/* no caso do e-mail do destinatário não aceitar HTML na mensagem*/
				
				/*CUIDADO: se você for enviar uma página HTML completa no corpo da mensagem, você deve desabilitar o uso das propriedades $mail->Body e $mail->AltBody. Outra coisa é que a página completa pode conter tags HTML, propriedades CSS e comandos JavaScript, mas não deve conter comandos em PHP*/
				/*$mail->MsgHTML(file_get_contents("lancamentos.html"));
				
			
				//anexos
				//$mail->AddAttachment("anexo1.pdf"); //anexo1
				//$mail->AddAttachment("anexo2.doc"); //anexo2
				
				//testar se o envio do e-mail foi enviado
				/*if($mail->Send())
					echo "<p> Cadastro em nossa aplicação efetuado com sucesso. Abra o seu e-mail e confira os dados fornecidos. Qualquer problema, entre em contato. </p>";
				else
					echo "<p> Erro no envio do e-mail. Código do erro: $mail->ErrorInfo </p>";			
				}*/
		?>


		<!--bootstrap js -->
		<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
		<!--js personalizado-->
		<script type="text/javascript" src="./js/myscript.js"></script>
	</body>
</html>