window.addEventListener("load", () => {

    let formLogin = document.querySelector("form");
    formLogin.email.focus();

    formLogin.addEventListener("submit", (event) => {

//Creamos un array de errores vacios para ir agregando los errores

     let errors =[];
     console.log(errors);
     
     let email = document.querySelector("#emailLogin");
     let password = document.querySelector("#passwordLogin");

    //-------Email-----------
    let regEmail = /\S+@\S+\.+\S+/;
    if(!regEmail.test(email.value)){          //.test "testea que ese email contenga @ y ."
      errors.push("Debe ingresar un email válido");
      email.classList.add("is-invalid");
      email.classList.remove("is-valid");     
   }else {
      email.classList.add("is-valid");
      email.classList.remove("is-invalid");
   }

     //-------Password-----------
     if(password.value == ""){
      errors.push("El campo Contraseña no puede estar vacío");
      password.classList.remove("is-valid");
      password.classList.add("is-invalid");
   }else if(password.value.length < 8) {
      errors.push("El campo Contraseña debe tener al menos 8 caracteres");
      password.classList.remove("is-valid");
      password.classList.add("is-invalid");
   }else {
      password.classList.add("is-valid");
      password.classList.remove("is-invalid");
   }

   //------Controlamos si hay errores------

   console.log(errors);
   if(errors.length > 0){
      //El event del submit esta declarado en la linea 6
      event.preventDefault()
      let ulErrors = document.querySelector(".erroresLogin");
      ulErrors.classList.add("alert-warning");
      ulErrors.innerHTML ="";  //Se borra toda la etiqueta Ul para vaciarla de errores
      for(let i = 0; i < errors.length; i++){
         ulErrors.innerHTML += "<li>" + errors[i] + "</li>"; //Agregamos los errores en una lista
      }
   }else{
      formLogin.submit();
   }
 })   
})