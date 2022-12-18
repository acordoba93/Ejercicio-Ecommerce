window.addEventListener("load", () => {

    let formRegister = document.querySelector(".formRegister");
    formRegister.nombre.focus();

    formRegister.addEventListener("submit", (event) => {

//Creamos un array de errores vacios para ir agregando los errores

     let errors =[];
     
     let nombre = document.querySelector("#nombre");
     let nacimiento = document.querySelector("#nacimiento");
     let pais = document.querySelector("#pais");
     let celular = document.querySelector("#celular");
     let email = document.querySelector("#email");
     let contrasena = document.querySelector("#contrasena");
     let repetir = document.querySelector("#repetir");
     let foto = document.querySelector("#foto");
    
     //-------nombre-----------
     if(nombre.value == ""){
        errors.push("El campo Nombre Completo no puede estar vacío");
        nombre.classList.remove("is-valid");
        nombre.classList.add("is-invalid");
     }else {
      nombre.classList.add("is-valid");
      nombre.classList.remove("is-invalid");
      formRegister.nacimiento.focus()
     }
     //-------Fecha de Nacimiento-----------
     if(nacimiento.value == ""){
      errors.push("El campo Fecha de Nacimiento no puede estar vacío");
      nacimiento.classList.remove("is-valid");
      nacimiento.classList.add("is-invalid");
     }else {
      nacimiento.classList.add("is-valid");
      nacimiento.classList.remove("is-invalid");
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

    //-------celular-----------
    if(celular.value == ""){
      errors.push("El campo Número de Celular no puede estar vacío");
      celular.classList.remove("is-valid");
      celular.classList.add("is-invalid");
   }else {
      celular.classList.add("is-valid");
      celular.classList.remove("is-invalid");
      formRegister.email.focus()
   }
    //-------Correo Electrónico-----------
    if(email.value == ""){
      errors.push("El campo Correo Electrónico no puede estar vacío");
      email.classList.remove("is-valid");
      email.classList.add("is-invalid");   
   }else {
      email.classList.add("is-valid");
      email.classList.remove("is-invalid");
      formRegister.contrasena.focus()
   }

    //-------Contraseña-----------
    if(contrasena.value == ""){
      errors.push("El campo Contraseña no puede estar vacío");
      contrasena.classList.remove("is-valid");
      contrasena.classList.add("is-invalid");
   }else {
      contrasena.classList.add("is-valid");
      contrasena.classList.remove("is-invalid");
      formRegister.foto.focus()
   }

   //-------Repetir la Contraseña-----------
   if(repetir.value == ""){
    errors.push("El campo Repetir Contraseña no puede estar vacío");
    repetir.classList.remove("is-valid");
    repetir.classList.add("is-invalid");
 }else {
   repetir.classList.add("is-valid");
   repetir.classList.remove("is-invalid");
 }
 
    //-------Avatar del Usuario-----------
    if(foto.value == ""){
      errors.push("Debe seleccionar una Imagen en formato JPG - PNG ó JPEG");
      foto.classList.remove("is-valid");
      foto.classList.add("is-invalid");
   }else {
      foto.classList.add("is-valid");
      foto.classList.remove("is-invalid");
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