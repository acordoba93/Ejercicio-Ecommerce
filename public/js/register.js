window.addEventListener("load", () => {

    let formRegister = document.querySelector(".formRegister");
    formRegister.nombre.focus();

    formRegister.addEventListener("submit", (event) => {

//Creamos un array de errores vacios para ir agregando los errores

     let errors =[];
     
     let nombre = document.querySelector("#nombre");
     let pais = document.querySelector("#pais");
     let celular = document.querySelector("#celular");
     let usuario = document.querySelector("#usuario");
     let contrasena = document.querySelector("#contrasena");
     let repetir = document.querySelector("#repetir");
     let foto = document.querySelector("#foto");
    
     //-------nombre-----------
     if(nombre.value == ""){
        errors.push("El campo Nombre no puede estar vacío");
        nombre.classList.remove("is-valid");
        nombre.classList.add("is-invalid");
     }else if(nombre.value.length < 2) {
        errors.push("El campo Nombre debe tener al menos 2 caracteres");
        nombre.classList.remove("is-valid");
        nombre.classList.add("is-invalid");
     }else {
      nombre.classList.add("is-valid");
      nombre.classList.remove("is-invalid");
      formRegister.pais.focus()
     }

     //-------pais-----------
     if(pais.value == ""){
      errors.push("El campo Pais de Nacimiento no puede estar vacío");
      pais.classList.remove("is-valid");
      pais.classList.add("is-invalid");
     }else {
      pais.classList.add("is-valid");
      pais.classList.remove("is-invalid");
      formRegister.usuario.focus()
     }

    //-------usuario-----------
    let reglaUsuario = /\S+@\S+\.+\S+/;
    if(usuario.value == ""){
      errors.push("El campo Usuario no puede estar vacío");
      usuario.classList.remove("is-valid");
      usuario.classList.add("is-invalid");
    } else if(!usuario.test(usuario.value)){          //.test "testea que ese email contenga @ y ."
      errors.push("Debe ingresar un email válido");
      usuario.classList.add("is-invalid");
      usuario.classList.remove("is-valid");     
   }else {
      usuario.classList.add("is-valid");
      usuario.classList.remove("is-invalid");
      formRegister.celular.focus()
   }

    //-------celular-----------
    if(celular.value == ""){
      errors.push("El campo Numero de Celular no puede estar vacío");
      celular.classList.remove("is-valid");
      celular.classList.add("is-invalid");
   }else if(celular.value.length < 5) {
      errors.push("El campo Numero de Celular debe tener al menos 5 caracteres");
      celular.classList.remove("is-valid");
      celular.classList.add("is-invalid");
   }else {
      celular.classList.add("is-valid");
      celular.classList.remove("is-invalid");
      formRegister.contrasena.focus()
   }

    //-------contrasena-----------
    if(contrasena.value == ""){
      errors.push("El campo contrasena no puede estar vacío");
      contrasena.classList.remove("is-valid");
      contrasena.classList.add("is-invalid");
   }else if(contrasena.value.length < 2) {
      errors.push("El campo contrasena debe tener al menos 2 caracteres");
      contrasena.classList.remove("is-valid");
      contrasena.classList.add("is-invalid");
   }else {
      contrasena.classList.add("is-valid");
      contrasena.classList.remove("is-invalid");
      formRegister.foto.focus()
   }

    //-------foto-----------
    if(foto.value == ""){
      errors.push("Debe seleccionar una imágen en formato JPG - PNG ó JPEG");
      foto.classList.remove("is-valid");
      foto.classList.add("is-invalid");
   }else {
      foto.classList.add("is-valid");
      foto.classList.remove("is-invalid");
      formRegister.repetir.focus()
   }

   //-------repetir-----------
   if(repetir.value == ""){
    errors.push("El campo Contraseña no puede estar vacío");
    repetir.classList.remove("is-valid");
    repetir.classList.add("is-invalid");
 }else if(repetir.value.length < 8) {
    errors.push("El campo Contraseña debe tener al menos 8 caracteres");
    repetir.classList.remove("is-valid");
    repetir.classList.add("is-invalid");
 }else {
   repetir.classList.add("is-valid");
   repetir.classList.remove("is-invalid");
 }




 


   //------Controlamos si hay errores------

   console.log(errors);
   if(errors.length > 0){
      //El event del submit esta declarado en la linea 6
      event.preventDefault()
      let ulErrors = document.querySelector(".errores");
      ulErrors.classList.add("alert-warning");
      ulErrors.innerHTML ="";  //Se borra toda la etiqueta Ul para vaciarla de errores
      for(let i = 0; i < errors.length; i++){
         ulErrors.innerHTML += "<li>" + errors[i] + "</li>"; //Agregamos los errores en una lista
      }
   }else{
      formRegister.submit();
   }
 })   
})