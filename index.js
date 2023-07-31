
{

    let saludo = "Bienvenido";
    let persona2 = prompt(`Ingrese su nombre`);

    
    alert(`${saludo} ${persona2}`);


    let ciudad = prompt("Ingrese una ciudad");
    let codigoPostal = prompt("Ingrese un código postal");
    alert(`${ciudad} ${codigoPostal} compras disponibles!`);

    let numeroif = parseInt(prompt("ingrese su edad"));
    if (numeroif < 18) { alert("Eres menor de edad y nuestro contenido es no apto para ti! te recomendamos que abandones la pagina!") }
    else if (numeroif > 18) { alert("Se a concedido el acceso a la web") }
    else { alert("respuesta incorrecta, ingrese su edad!") };

    let entrada = prompt("ingresa usuario");
    while (entrada !== "ESC") {
        switch (entrada) {
            case "usuario1":
                alert("Bienvenido al panel de usuario");
                break;
            case "usuario2":
                alert("Que bueno verte de vuelta!");
                break;
            default:
                alert("¿Quién eres?");
                break;
        }
        entrada = prompt("ingresa usuario");
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
