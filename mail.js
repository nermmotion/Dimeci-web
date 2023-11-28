function sendMail() {

    var templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };
    
    // var serviceID = 'service_ph5sf6j';
    // var templateID = 'template_3jexa6o';

    var nextURL = '/index.html';

    
    emailjs.send('service_ph5sf6j', 'template_3jexa6o', templateParams).then(function (res) {
            /* alert('Su mensaje ha sido enviado correctamente!' + res.status); */
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Su mensaje ha sido enviado correctamente!",
                showConfirmButton: false,
                timer: 1500
              });
            setTimeout(function(){
            window.location.reload(true);
            window.location.href = nextURL;
            }, 2000);
        })
        .catch ((err) => console.log(err));
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Su mensaje no se pudo enviar" + res.status,
            showConfirmButton: false,
            timer: 1500
          });
        setTimeout(function(){
            window.location.reload(true);
            window.location.href = nextURL;
        }, 2000);
}
