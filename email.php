<?php
	$destino = "keni360@gmail.com, maurosilva.aj@gmail.com, maurin182@hotmail.com, contato@mauroweb.com.br";
	$remetente = isset($_POST['email'])?$_POST['email']:null;
	$nome = isset($_POST['nome'])?$_POST['nome']:null;
	$telefone = isset($_POST['telefone'])?$_POST['telefone']:null;
	$msg = isset($_POST['msg'])?$_POST['msg']." $telefone, $nome":null;
	$assunto = "Contato através do site (mauroweb.com.br)";
	
	$headers  = "MIME-Version: 1.0" . "\r\n";
    	$headers .= "Content-type: text/html; charset=iso-8859-1" . "\r\n";
   	$headers .= "From: $nome <$remetente>";
		
		if($nome != null && $email != null && $msg != null){
                mail($destino, $assunto, $msg, $headers);
                $nome = null;
                $email = null;
                $msg = null;
		echo("<script> 
			document.onload = window.history.back();
		</script>");
            }else{
		echo("<script> 
			document.onload = window.history.back();
		</script>");
		}

?>

