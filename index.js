//funcion saludo
function saludo() {
  alert("Bienvenido nuevo usuario");
  console.log(`saludo de inicio`)
}
saludo();


// función constructora usuario
function newUser(nombre, ubicacion, edad) {
  this.nombre = nombre;
  this.ubicacion = ubicacion;
  this.edad = edad;
}

// Creación de un nuevo usuario
let nombre = prompt("Ingrese su nombre");
let ubicacion = prompt("Ingrese su ubicación");
let edad;

while (true) {
  edad = parseInt(prompt("Ingrese su edad"));
  if (!isNaN(edad)) {
    break;
  } else {
    alert("Respuesta incorrecta, ingrese su edad nuevamente.");
  }
}

let nuevoUsuario = new newUser(nombre, ubicacion, edad);

// Mostrar información del nuevo usuario en la consola
console.log("Nuevo usuario creado:");
console.log("Nombre:", nuevoUsuario.nombre);
console.log("Ubicación:", nuevoUsuario.ubicacion);
console.log("Edad:", nuevoUsuario.edad);


// Arreglo para almacenar usuarios
let usuarios = [];




// Agregar el nuevo usuario al arreglo de usuarios
agregarUsuario(nuevoUsuario);




// Función para agregar un usuario al arreglo
function agregarUsuario(usuario) {
  usuarios.push(usuario);

}



// Mostrar todos los usuarios almacenados
console.log("--------------Usuarios almacenados:-----------");
for (let i = 0; i < usuarios.length; i++) {
  console.log(`Usuario ${i + 1}: `);
  console.log("Nombre:", usuarios[i].nombre);
  console.log("Ubicación:", usuarios[i].ubicacion);
  console.log("Edad:", usuarios[i].edad);
}

  


// Función de búsqueda de usuarios por nombre
function buscarUsuariosPorNombre(nombreABuscar) {
  const resultados = [];
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].nombre.toLowerCase() === nombreABuscar.toLowerCase()) {
      resultados.push(usuarios[i]);
    }
  }
  return resultados;
}
const nombreABuscar = prompt("Ingrese el nombre del usuario que desea buscar");
const usuariosEncontrados = buscarUsuariosPorNombre(nombreABuscar);
if (usuariosEncontrados.length === 0) {
  console.log("No se encontraron usuarios con ese nombre.");
} else {
  console.log(`Usuarios encontrados con el nombre "${nombreABuscar}":`);
  for (let i = 0; i < usuariosEncontrados.length; i++) {
    console.log(`Usuario ${i + 1}:`);
    console.log("Nombre:", usuariosEncontrados[i].nombre);
    console.log("Ubicación:", usuariosEncontrados[i].ubicación);
    console.log("Edad:", usuariosEncontrados[i].edad);
  }
}



// Función de filtrado de usuarios por edad
function filtrarUsuariosPorEdad(edadMinima, edadMaxima) {
  const resultados = [];

  for (let i = 0; i < usuarios.length; i++) {
    const edadUsuario = usuarios[i].edad;
    if (edadUsuario >= edadMinima && edadUsuario <= edadMaxima) {
      resultados.push(usuarios[i]);
    }
  }

  return resultados;
}
const edadMinima = parseInt(prompt("Ingrese la edad mínima para el filtro"));
const edadMaxima = parseInt(prompt("Ingrese la edad máxima para el filtro"));
const usuariosFiltrados = filtrarUsuariosPorEdad(edadMinima, edadMaxima);
if (usuariosFiltrados.length === 0) {
  console.log("No se encontraron usuarios que cumplan con el filtro de edad.");
  
} else {
  console.log(`Usuarios encontrados dentro del rango de edad ${edadMinima}-${edadMaxima}:`);
  for (let i = 0; i < usuariosFiltrados.length; i++) {
    console.log(`Usuario ${i + 1}:`);
    console.log("Nombre:", usuariosFiltrados[i].nombre);
    console.log("Ubicación:", usuariosFiltrados[i].ubicación);
    console.log("Edad:", usuariosFiltrados[i].edad);

  }
}


// Maquina constructora de productos
class Producto {
  constructor(id, nombre, precio, cantidad) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  vender() {
    if (this.cantidad > 0) {
      this.cantidad -= 1;
      return `Venta de ${this.nombre} exitosa. Quedan ${this.cantidad} disponibles.`;
    } else {
      return `${this.nombre} está agotado.`;
    }
  }
}

// Arreglo para almacenar productos
let productos = [];

// Función para agregar un producto
function agregarProducto(id, nombre, precio, cantidad) {
  let producto = new Producto(id, nombre, precio, cantidad);
  productos.push(producto);
}

// Función para mostrar los productos por consola y alert
function mostrarProductos() {
  if (productos.length === 0) {
    alert("No hay productos para mostrar.");
  } else {
    console.log("Productos almacenados:");
    for (let i = 0; i < productos.length; i++) {
      console.log(`ID: ${productos[i].id}`);
      console.log(`Nombre: ${productos[i].nombre}`);
      console.log(`Precio: ${productos[i].precio}`);
      console.log(`Disponibles: ${productos[i].cantidad}`);
      console.log("-------------------------");
    }
  }

  let listaProductos = "Lista de Productos disponibles:\n";

  for (let i = 0; i < productos.length; i++) {
    listaProductos += `${productos[i].nombre} ${productos[i].precio} \n`;
  }

  alert(listaProductos);
}

// Agregar productos
agregarProducto(1, "Producto 1", 10.99, 10,);
agregarProducto(2, "Producto 2", 19.99, 5,);
agregarProducto(3, "Producto 3", 5.99, 15,);

// Vender un producto (ejemplo)
const productoAVender = productos[0];
const mensajeVenta = productoAVender.vender();
//console.log(mensajeVenta);


 // Mostrar productos
mostrarProductos();

///////////////////////......................................................


let totalComprados = 0;
let costoTotal = 0;


// Preguntar al usuario si desea comprar un producto
while (true) {
  const comprar = prompt("¿Desea comprar un producto? (Si/No)").toLowerCase();

  if (comprar === "si") {
    const idProductoComprar = parseInt(prompt("Ingrese el ID del producto que desea comprar:"));

    const productoAComprar = productos.find((producto) => producto.id === idProductoComprar);

    if (productoAComprar) {
      const mensajeVenta = productoAComprar.vender();
      console.log(mensajeVenta);

      if (mensajeVenta.startsWith("Venta de")) {
        totalComprados++;
        costoTotal += productoAComprar.precio;
      }
    } else {
      alert("ID de producto no válido. Intente de nuevo.");
    }
  } else if (comprar === "no") {
    break; // Salir del bucle si el usuario no quiere comprar más productos
  } else {
    alert("Respuesta no válida. Por favor, ingrese 'Si' o 'No'.");
  }
}


// Mostrar el total de productos comprados y el costo total
console.log(`Total de productos comprados: ${totalComprados}`);
alert(`Total de productos comprados: ${totalComprados}`);
console.log(`Costo total: $${costoTotal.toFixed(2)}`);
alert(`Costo total: $${costoTotal.toFixed(2)}`);



/////-------------------------------------
while (true) {
  const opcion = prompt("¿Desea salir o ingresar un nuevo usuario? (Salir/Nuevo)").toLowerCase();

  if (opcion === "salir") {
    break; // Salir del bucle si el usuario elige salir
  } else if (opcion === "nuevo") {
    // Volver a la parte del código donde se solicitan los datos para un nuevo usuario
    let nombre = prompt("Ingrese su nombre");
    let ubicacion = prompt("Ingrese su ubicación");
    let edad;

    while (true) {
      edad = parseInt(prompt("Ingrese su edad"));
      if (!isNaN(edad)) {
        break;
      } else {
        alert("Respuesta incorrecta, ingrese su edad nuevamente.");
      }
    }

    let nuevoUsuario = new newUser(nombre, ubicacion, edad);

    // Agregar el nuevo usuario al arreglo de usuarios
    agregarUsuario(nuevoUsuario);

    // Mostrar información del nuevo usuario en la consola
    console.log("Nuevo usuario creado:");
    console.log("Nombre:", nuevoUsuario.nombre);
    console.log("Ubicación:", nuevoUsuario.ubicacion);
    console.log("Edad:", nuevoUsuario.edad);
  } else {
    alert("Opción no válida. Por favor, ingrese 'Salir' o 'Nuevo'.");
  }
}

function mostrarTotalUsuarios() {
  console.log(`Total de usuarios almacenados: ${usuarios.length}`);
}

// Llama a la función para mostrar el total de usuarios
mostrarTotalUsuarios();







