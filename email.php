<?php
	$destino = "keni360@gmail.com, maurosilva.aj@gmail.com, maurin182@hotmail.com, contato@mauroweb.com.br";
	$remetente = $_POST['email'];
	$nome = $_POST['nome'];
	$telefone = $_POST['telefone'];
	$msg = $_POST['msg'];
	$assunto = "Contato através do site (mauroweb.com.br)";
	
	$headers  = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1" . "\r\n";
    $headers .= "From: $nome <$remetente>";
		
		$enviaremail = mail($destino, $assunto, $msg, $headers);
		
	if($enviaremail){
		echo("email enviado com sucesso");
		
		echo("<script> 
						
						document.onload = window.history.back();
			</script>");
		
	}else{
		echo("Erro");
		echo("<script> 
						
						document.onload = window.history.back();
			</script>");
		
	}
?>