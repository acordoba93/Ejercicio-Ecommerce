window.addEventListener("load", () => {

    let formCrearProducto = document.querySelector(".formCrearProducto");
    formCrearProducto.nombre.focus();

    formCrearProducto.addEventListener("submit", (event) => {

//Creamos un array de errores vacios para ir agregando los errores

     let errors =[];
     
     let nombre = document.querySelector("#nombre");
     let descripcion = document.querySelector("#descripcion");
     let talle = document.querySelector("#talle");
     let precio = document.querySelector("#precio");
     let categoria = document.querySelector("#categoria");
     let imagenProducto = document.querySelector("#imagenProducto");

     //-------nombre-----------
     if(nombre.value.trim == ""){
        errors.push("El campo Nombre del Producto no puede estar vacío");
        nombre.classList.remove("is-valid");
        nombre.classList.add("is-invalid");
     }else if(productName.value.length < 5) {
        errors.push("El campo Nombre del Producto debe tener al menos 5 caracteres");
        nombre.classList.remove("is-valid");
        nombre.classList.add("is-invalid");
     }else {
      nombre.classList.add("is-valid");
      nombre.classList.remove("is-invalid");
      formCrearProducto.descripcion.focus()
     }

     //-------descripcion-----------
     if(descripcion.value == ""){
      errors.push("El campo Descripción no puede estar vacío");
      descripcion.classList.remove("is-valid");
      descripcion.classList.add("is-invalid");
     }else if(descripcion.value.length < 20) {
      errors.push("El campo Descripción debe tener al menos 20 caracteres");
      descripcion.classList.remove("is-valid");
      descripcion.classList.add("is-invalid");
     }else {
      descripcion.classList.add("is-valid");
      descripcion.classList.remove("is-invalid");
      formCrearProducto.talle.focus()
     }

     //-------talle-----------
     if(talle.value == ""){
        errors.push("El campo Talle del Producto no puede estar vacío");
        talle.classList.remove("is-valid");
        talle.classList.add("is-invalid");
       }else {
         talle.classList.add("is-valid");
         talle.classList.remove("is-invalid");
         formCrearProducto.precio.focus()
       }   

       //-------precio-----------
       if(precio.value == ""){
        errors.push("El campo Precio del Producto no puede estar vacío");
        precio.classList.remove("is-valid");
        precio.classList.add("is-invalid");
       }else {
         precio.classList.add("is-valid");
         precio.classList.remove("is-invalid");
         formCrearProducto.categoria.focus()
       }   

        //-------categoria-----------
        if(categoria.value == ""){
            errors.push("El campo Categoria del Producto no puede estar vacío");
            categoria.classList.remove("is-valid");
            categoria.classList.add("is-invalid");
           }else {
            categoria.classList.add("is-valid");
            categoria.classList.remove("is-invalid");
            formCrearProducto.imagenProducto.focus()
           }      

               //-------imagenProducto-----------
          if(imagenProducto.value == ""){
            errors.push("El campo Imagen del Producto no puede estar vacío");
            imagenProducto.classList.remove("is-valid");
            imagenProducto.classList.add("is-invalid");
           }else {
            imagenProducto.classList.add("is-valid");
            imagenProducto.classList.remove("is-invalid");
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
      formCrearProducto.submit();
   }
 })   
})