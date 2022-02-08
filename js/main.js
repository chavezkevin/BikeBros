/* ---BUCLE---*/

/* let kilometros = prompt ("cuantos kilometros diarios se necesian para estar saludable y tener una buena condicion fisica?");

while (kilometros != "10") {

    alert ("con eso no es suficiente");

    kilometros = prompt ("incrementa quilometros a tu rutina");

}

alert ("con esos kilometros tu salud y condicion fisica sera optima"); */


/* ----ARRAYS---- */

const productos = [
    {
    id: 1,
    tipo:"diomenes 2",
    precio: "$49.750",
    img : './img/img-BMX/bmxdiomenes2.png'
    },

    {
    i: 2,
    tipo:"diomenes",
    precio: "$49.750",
    img: './img/img-BMX/bmxDiomenes.png'},

    {
    id: 3,
    tipo:"crossboy",
    precio: "$32.495",
    img: './img/img-KIDS/crossboy.png'},

    {
    id: 4,
    tipo:"crossboy r12",
    precio: "$24.915",
    img: './img/img-KIDS/crossboyR12.png'},

    {
    id: 5,
    tipo:"flamingo",
    precio: "$55.099",
    img:'./img/img-MTB/mtbflamingo.png'},

    {
    id: 6,
    tipo:"neptune",
    precio: "$50.852",
    img: './img/img-MTB/mtbneptune.png'},

    {
    id: 7,
    tipo:"harrier",
    precio: "$189.265",
    img: './img/img-RUTA/rutaharrier.png'},
];

const bicis = document.querySelector(".bicis")
const compra = document.querySelector(".compra")

mostrandoProductos()

function mostrandoProductos () {
    productos.forEach(function(producto){
        const divBici = document.createElement('div');
        divBici.classList.add('cardBici');

        const imagenBici = document.createElement('img');
        imagenBici.src = producto.img;
        imagenBici.classList.add('imagenBici');

        const tituloBici = document.createElement('h3');
        tituloBici.textContent = producto.tipo;

        const precioBici = document.createElement('p');
        precioBici.textContent = producto.precio;
        
        const boton = document.createElement('button')
        boton.classList.add('botonCompra')
        boton.textContent = "carrito de compra"

        divBici.appendChild(imagenBici);
        divBici.appendChild(tituloBici);
        divBici.appendChild(precioBici);
        divBici.appendChild(boton)

        bicis.appendChild(divBici);

    })
}

/*function cadaProducto (arr, fn) {
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