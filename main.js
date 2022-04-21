
//declaro la funcion saludar
function saludar() {
    alert(
      "Bienvenido a Franchesca's Fast Food! " +
        nombre +
        " a continuacion podra escojer su comida"
    );
  }
  //  funcion comprar producto
  function comprarProducto() {
    producto = prompt(
      "Elija uno de nuestros productos \n 1: Hamburguesa doble con chedar y bacon \n 2: Pizza de la casa \n 3: Super lomo completo "
    );
  
    if (producto === "1") {
      alert(" elegiste Hamburguesa con chedar para tu compra");
    } else if (producto === "2") {
      alert(" elegiste Pizza de la casa para tu compra");
    } else if (producto === "3") {
      alert(" elegiste Super lomo completo  para tu compra");
    } 
    // vuelvo a preguntar por el prompt  para terminar el proceso
    opcion = prompt(
      "vuelva a ingresar una opcion  \n 2: mostrar precios finales  \n 3: terminar"
    );
  }
  // declaro la funcion finalizar compra
  function finalizarCompra() {
    if (producto === "1") {
      alert(
        "usted eligio Hamburguesa doble con chedar y bacon por un monto  final de " +
          Hamburguesadobleconchedarybacon * 1.21
      );
    } else if (producto === "2") {
      alert(
        "usted eligio Pizza de la casa  por un monto  final de " +
          Pizzadelacasa * 1.21
      );
    } else if (producto === "3") {
      alert(
        "usted eligio Super lomo completo por un monto  final de " +
          superlomocompleto * 1.21
      );
    } 
  }
  
  // main
  //declaro variables
  let producto;
  let Hamburguesadobleconchedarybacon = 500;
  let Pizzadelacasa = 950;
  let superlomocompleto = 1300;
  let nombre = prompt("ingrese su nombre");
  //llamo a la funcion saludar
  saludar();
  let opcion = prompt(
    "ingrese una opcion: \n 1: comprar comida \n 2: finalizar compra   "
  );
  //agrego bucle while, mientras la opcion no sea 3...
  while (opcion !== "3") {
    if (opcion === "1") {
      comprarProducto();
    }
    if (opcion === "2") {
      //si ingreso la opcion dos, llamo a la funcion finalizarCompra
      //y le asigno el "3" a opcion para que corte el bucle
      finalizarCompra();
      opcion = "3";
    }
  }
  
  alert("gracias por su compra");
  