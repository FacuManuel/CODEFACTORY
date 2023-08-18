
// primera pre entrega! 
/*

let saludo = "Bienvenido";
let persona2 = prompt(`Ingrese su nombre`);
console.log("nuevos datos almacenados");


alert(`${saludo} ${persona2}`);


let ciudad = prompt("Ingrese una ciudad");
let codigoPostal = prompt("Ingrese un código postal");
alert(`${ciudad} ${codigoPostal} compras disponibles!`);
console.log(`nuevos datos geograficos; ${ciudad} ${codigoPostal}`);

let numeroif = parseInt(prompt("ingrese su edad"));
if (numeroif < 18) { alert("Eres menor de edad y nuestro contenido es no apto para ti! te recomendamos que abandones la pagina!") }
else if (numeroif > 18) { alert("Se a concedido el acceso a la web") }
else { alert("respuesta incorrecta, ingrese su edad!") };

let entrada = prompt("ingresa usuario");
while (entrada !== "ESC") {
    switch (entrada) {
        case "usuario1":
            alert("Bienvenido al panel de usuario");
            entrada = "ESC"
            console.log("usuario1 a iniciado sesion!")
            break;
        case "usuario2":
            alert("Que bueno verte de vuelta!");
            entrada = "ESC"
            console.log("usuario2 a iniciado sesion!")
            break;
        default:
            alert("¿Quién eres?");
            entrada = prompt("ingresa usuario");
            console.log("usuario desconocido")
            break;
    }

}


let metodo = "tarjeta"
switch (metodo) {
    case "tarjeta":
        console.log(`pago con tarjeta habilitado`);
        break;
    case "efectivo":
        console.log(`pago en efectivo habilitado`);
        break;
    default:
        console.log(`no se ha seleccionado ningún método de pago`);
        break;
}


let numero = parseInt(prompt("ingrese un numero"));
for (let i = 2; i <= 4; i++) {
    let resultado = numero + i;
    alert(`${numero} + ${i} = ${resultado}`);
}
alert("GRACIAS!");



function goodbye() {
    alert("Disfruta de la pagina !!!");
}
goodbye(); 

const array ["coctelera", "barspoon", "gigger", "delantal", "strainer", "swizzle"];
for (let index = 0; index < array.length;index++){console.log(array[index])};


*/

//---------------------------------segunda pre entrega---------------------------


// Saludo inicial
let saludo = "Bienvenido";
let persona2 = prompt(`Ingrese su nombre`);
console.log("nuevos datos almacenados");
alert(`${saludo} ${persona2}`);

//informacion de Envios
let ciudad = prompt("Ingrese una ciudad");
let codigoPostal = prompt("Ingrese un código postal");
alert(`${ciudad} ${codigoPostal} compras disponibles!`);
console.log(`nuevos datos geograficos; ${ciudad} ${codigoPostal}`);


// maquina constructora de productos
class Producto {
    constructor(id, nombre, precio) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
    }
  }
  
  // Función para mostrar el carrito
  function mostrarCarrito(carrito) {
    let mensaje = "Carrito de compras:\n\n";
    let total = 0;
    
    carrito.forEach(item => {
      mensaje += `${item.nombre} - Precio: $${item.precio}\n`;
      total += item.precio;
    });
    
    mensaje += `\nTotal: $${total}`;
    alert(mensaje);
  }
  
  // Función para buscar un producto por nombre
  function buscarProductoPorNombre(productos, nombre) {
    return productos.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());
  }
  
  // Función para filtrar productos por precio máximo
  //function filtrarProductosPorPrecioMax(productos, precioMax) {
    //return productos.filter(producto => producto.precio <= precioMax); }
  
  //Productos disponibles!
  function simularPlataforma() {
    const productosDisponibles = [
      new Producto(1, "Coctelera", 100),
      new Producto(2, "barspoon", 20),
      new Producto(3, "delantal", 150),
      new Producto(4, "gigger", 50),
      new Producto(5, "strainer", 35),
      new Producto(6, "swizzle", 60),
      
    ];
    
    const carrito = [];
    
    while (true) {
      const opcion = prompt(
        "Elije una opción:\n" +
        "1. Ver productos disponibles\n" +
        "2. Agregar producto al carrito\n" +
        "3. Eliminar producto del carrito\n" +
        "4. Mostrar carrito\n" +
        "5. Salir"
      );
      
      switch (opcion) {
        case "1":
          alert("Productos disponibles:\n" + productosDisponibles.map(p => p.nombre).join("\n"));
          break;
          
        case "2":
          const nombreProducto = prompt("Ingrese el nombre del producto a agregar:");
          const productoEncontrado = buscarProductoPorNombre(productosDisponibles, nombreProducto);
          if (productoEncontrado) {
            carrito.push(productoEncontrado);
            alert(`${productoEncontrado.nombre} ha sido agregado al carrito.`);
          } else {
            alert("Producto no encontrado.");
          }
          break;
          
        case "3":
          const nombreProductoEliminar = prompt("Ingrese el nombre del producto a eliminar:");
          const indexProductoEliminar = carrito.findIndex(item => item.nombre.toLowerCase() === nombreProductoEliminar.toLowerCase());
          if (indexProductoEliminar !== -1) {
            carrito.splice(indexProductoEliminar, 1);
            alert(`${nombreProductoEliminar} ha sido eliminado del carrito.`);
          } else {
            alert("Producto no encontrado en el carrito.");
          }
          break;
          
        case "4":
          mostrarCarrito(carrito);
          break;
          
        case "5":
          alert("Gracias por usar la plataforma de simulación.");
          return;
          
        default:
          alert("Opción no válida.");
      }
    }
  }
  
  // Iniciar la simulación
  simularPlataforma();