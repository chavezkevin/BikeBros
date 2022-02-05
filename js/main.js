/* ---BUCLE---*/

/* let kilometros = prompt ("cuantos kilometros diarios se necesian para estar saludable y tener una buena condicion fisica?");

while (kilometros != "10") {

    alert ("con eso no es suficiente");

    kilometros = prompt ("incrementa quilometros a tu rutina");

}

alert ("con esos kilometros tu salud y condicion fisica sera optima"); */


/* ----ARRAYS---- */

/*const productos = [
    {tipo:"bmx", precio: 3000},
    {tipo:"kids", precio: 2000},
    {tipo:"mtb", precio: 5000},
    {tipo:"ruta", precio: 9000},
    {tipo:"asiento", precio: 300},
    {tipo:"baliza", precio: 100},
    {tipo:"freno", precio: 200},
    {tipo:"inflador", precio: 250}
];

function cadaProducto (arr, fn) {
    for (const el of arr) {
        fn(el)
    }
}

cadaProducto (productos, console.log)

const compra = [];
let cantidad = prompt("ingresa la cantidad depruductos ");

do {
    let nombre = prompt("ingresa el nombre del producto"),
    precio = parseInt (prompt ("ingresa el precio"));

    const producto = {
        nombre : nombre,
        precio : precio
    }

    compra.push(producto);
    console.log(compra.length);

} while (compra.length != cantidad);

const total = compra.reduce ((acc, el) => acc + el.precio, 0)
alert ("el total de tu compra es " + total )


/* ---DISPOSITIVO INTERACTIVO--- */

/*alert ("a continuacion continuaremos con el pago de tu compra")

function apellidoNombre (){

    let nombreYapellido = prompt ("ingrsa tu nombre y apellido");

    alert ("su nombre y apellido es " + nombreYapellido);

}
apellidoNombre();



alert ("a continuacion solicitaremos algunos datos para realizar su compra");

function datosCompra() {

    let DNI = prompt ("igrisa tu D.N.I");

    let cobro = prompt ("ingresa tu tarjeta de devito o credito");

    alert ("te enviaremos un codigo a tu e-mail para que puedas recivir tu comprovante");

    let Email = prompt ("ingresa tu e-mail");
    
}
datosCompra();

alert ("tu compra a sido exitosa, en brebedad enviaremos tu codigo")*/