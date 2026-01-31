/////////////////////////////////
    // Registro de Usuario //
/////////////////////////////////

function RegistrarUser()
{

    var correo = document.getElementById("correo").value;
    var password = document.getElementById("contraseña").value;
    
    firebase.auth().createUserWithEmailAndPassword(correo, password)
    
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
    document.write("Perfecto, te hemos registrado","<br>")

    //Enviar Confirmación
    EmviarConfirmacion()
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    document.write(errorCode);
    document.write(errorMessage);
    // ..

  });
}

/////////////////////////////////
  // Correo de confirmación //
/////////////////////////////////

function EmviarConfirmacion()
{
  firebase.auth().currentUser.sendEmailVerification()
  .then(() => {
    document.write("Se le ha enviado un correo de verificación")
    // Email verification sent!
    // ...
  });
}


/////////////////////////////////
    // Inicio de Sesión //
/////////////////////////////////

function IngresoUser()
{
  var correo2 = document.getElementById("correo2").value;
  var password2 = document.getElementById("contraseña2").value;

  firebase.auth().signInWithEmailAndPassword(correo2, password2)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
    document.write("Gracias por iniciar sesión")
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    document.write(errorCode);
    document.write(errorMessage);

  });
}