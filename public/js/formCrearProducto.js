window.addEventListener("load", () => {

    let formCreate = document.querySelector(".form-create");
    formCreate.productName.focus();

    formCreate.addEventListener("submit", (event) => {

//Creamos un array de errores vacios para ir agregando los errores

     let errors =[];
     
     let productNombre = document.querySelector("#productName");
     let productDescripcion = document.querySelector("#productDescription");
     let productTalle = document.querySelector("#productCategory");
     let productPrecio = document.querySelector("#productPrice");
     let productCategoria = document.querySelector("#productPrice");
     let productImagen = document.querySelector("#productImage");

     //-------productName-----------
     if(productName.value == ""){
        errors.push("El campo Nombre del Producto no puede estar vacío");
        productName.classList.remove("is-valid");
        productName.classList.add("is-invalid");
     }else if(productName.value.length < 5) {
        errors.push("El campo Nombre del Producto debe tener al menos 5 caracteres");
        productName.classList.remove("is-valid");
        productName.classList.add("is-invalid");
     }else {
        productName.classList.add("is-valid");
        productName.classList.remove("is-invalid");
        formCreate.productDescription.focus()
     }

     //-------productDescription-----------
     if(productDescription.value == ""){
      errors.push("El campo Descripción no puede estar vacío");
      productDescription.classList.remove("is-valid");
      productDescription.classList.add("is-invalid");
     }else if(productDescription.value.length < 20) {
      errors.push("El campo Descripción debe tener al menos 20 caracteres");
      productDescription.classList.remove("is-valid");
      productDescription.classList.add("is-invalid");
     }else {
      productDescription.classList.add("is-valid");
      productDescription.classList.remove("is-invalid");
      formCreate.productCategory.focus()
     }

     //-------productCategory-----------
     if(productCategory.value == ""){
        errors.push("El campo Categoría no puede estar vacío");
        productCategory.classList.remove("is-valid");
        productCategory.classList.add("is-invalid");
       }else {
        productCategory.classList.add("is-valid");
        productCategory.classList.remove("is-invalid");
        formCreate.productCondition.focus()
       }   

       //-------productConditionSell-----------
       if(productConditionSell.value == ""){
        errors.push("El campo Condición de Venta no puede estar vacío");
        productConditionSell.classList.remove("is-valid");
        productConditionSell.classList.add("is-invalid");
       }else {
        productConditionSell.classList.add("is-valid");
        productConditionSell.classList.remove("is-invalid");
        formCreate.productSize.focus()
       }   

        //-------productSize-----------
        if(productSize.value == ""){
            errors.push("El campo Talle del Producto no puede estar vacío");
            productSize.classList.remove("is-valid");
            productSize.classList.add("is-invalid");
           }else {
            productSize.classList.add("is-valid");
            productSize.classList.remove("is-invalid");
            formCreate.productStatus.focus()
           }      

               //-------productStatus-----------
          if(productStatus.value == ""){
            errors.push("El campo Estado del Producto no puede estar vacío");
            productStatus.classList.remove("is-valid");
            productStatus.classList.add("is-invalid");
           }else {
            productStatus.classList.add("is-valid");
            productStatus.classList.remove("is-invalid");
            formCreate.productCondition.focus()}

              //-------productCondition-----------
          if(productCondition.value == ""){
            errors.push("El campo Condición del Producto no puede estar vacío");
            productCondition.classList.remove("is-valid");
            productCondition.classList.add("is-invalid");
           }else {
            productCondition.classList.add("is-valid");
            productCondition.classList.remove("is-invalid");
            formCreate.productPrice.focus()
           }

             //-------productPrice-----------
          if(productPrice.value == ""){
            errors.push("El campo Precio del Producto no puede estar vacío");
            productPrice.classList.remove("is-valid");
            productPrice.classList.add("is-invalid");
           }else {
            productPrice.classList.add("is-valid");
            productPrice.classList.remove("is-invalid");
            formCreate.productImage.focus()
           } 

            //-------productImage-----------
          if(productImage.value == ""){
            errors.push("El campo Imagen del Producto no puede estar vacío");
            productImage.classList.remove("is-valid");
            productImage.classList.add("is-invalid");
           }else {
            productImage.classList.add("is-valid");
            productImage.classList.remove("is-invalid");
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
      formCreate.submit();
   }
 })   
})