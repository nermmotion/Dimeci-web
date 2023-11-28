<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['username'];
    $email = $_POST['useremail'];
    $mensaje = $_POST['usermessage'];
    
    $destinatario = "nerm.animator@gmail.com"; // Cambia esto por tu dirección de correo electrónico
    
    $asunto = "Mensaje de contacto de $nombre";
    
    $contenido = "Nombre: $nombre\n";
    $contenido .= "Email: $email\n";
    $contenido .= "Mensaje:\n$mensaje";
    
    // Envío del correo
    if (mail($destinatario, $asunto, $contenido)) {
        echo "¡El correo se envió correctamente!";
    } else {
        echo "Hubo un error al enviar el correo.";
    }
}
?>