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
        tipo: "diomenes 2",
        precio: "$49.750",
        img: './img/img-BMX/bmxdiomenes2.png',
        cantidad:1
    },

    {
        id: 2,
        tipo: "diomenes",
        precio: "$49.750",
        img: './img/img-BMX/bmxDiomenes.png',
        cantidad:1
    },

    {
        id: 3,
        tipo: "crossboy",
        precio: "$32.495",
        img: './img/img-KIDS/crossboy.png',
        cantidad:1
    },

    {
        id: 4,
        tipo: "crossboy r12",
        precio: "$24.915",
        img: './img/img-KIDS/crossboyR12.png',
        cantidad:1
    },

    {
        id: 5,
        tipo: "flamingo",
        precio: "$55.099",
        img: './img/img-MTB/mtbflamingo.png',
        cantidad:1
    },

    {
        id: 6,
        tipo: "neptune",
        precio: "$50.852",
        img: './img/img-MTB/mtbneptune.png',
        cantidad:1
    },

    {
        id: 7,
        tipo: "harrier",
        precio: "$189.265",
        img: './img/img-RUTA/rutaharrier.png',
        cantidad:1
    }
];
const carritoDeCompras = [];

let contenedor = document.getElementById('contenedor')
let contenedorCarrito = document.getElementById('contenedorCarrito')
let precioFinal = document.getElementById('total')
let cantidad = document.getElementById('contador')




for (const producto of productos) {
    let contenedorProducto = document.createElement("div");
    contenedorProducto.innerHTML = `
    <div class=" card text-dark bg-info mb-3" style="width: 30rem; margin: 0;">
        <img src=${producto.img} class="card-img-top" alt="...">
        <div class="card-body">
            <h3 class="card-title">${producto.tipo}</h3>
            <p class="card-text">${producto.precio}</p>
            <a href="#" class="btn btn-primary" id="agregar${producto.id}">agregar al carrito</a>
        </div>
    </div>`;

    contenedor.appendChild(contenedorProducto);

    let botonAgregar = document.getElementById(`agregar${producto.id}`)

    botonAgregar.addEventListener('click', () => {
        agregarCarrito(producto.id)
    })
}


/*carrito de compras*/
function agregarCarrito(id) {
    let repetido = carritoDeCompras.find(ver => ver.id == id)
    if (repetido){
        repetido.cantidad = repetido.cantidad + 1

        document.getElementById(`cantidad${repetido.id}`), innerHTML = `<p>CANTIDAD:<span id="contador${productorepetido.id}"></span></p>`
    }

    else{
    let productoAgregar = productos.find(elemento => elemento.id == id)
    carritoDeCompras.push(productoAgregar)
    actualizarCarrito()

    let div = document.createElement('div')
    div.className = 'productoEnCarrito'
    div.innerHTML = `
                    <div class="card" style="width: 18rem;">
                        <div id="productoEnCarrito" class="card-body">
                        <img src="${productoAgregar.img}" class="card-img-top" alt="...">
                            <h3 class="card-title">${productoAgregar.tipo}</h3>
                            <p class="card-text">${productoAgregar.precio}</p>
                            <button id="eliminar${productoAgregar.id}" type="button" class="btn btn-warning">ELIMINAR DEL CARRITO</button>
                        </div>
                    </div>
    `;
    contenedorCarrito.appendChild(div)

    let eliminar = document.getElementById(`eliminar${productoAgregar.id}`);
    eliminar.addEventListener('click',() => {
        eliminar.parentElement.remove()

        carritoDeCompras = carritoDeCompras.filter(item => item.id != productoAgregar.id)
    })
    }
}


function actualizarCarrito() {
    cantidad.innerText = carritoDeCompras.reduce((acc,el)=> acc + el.cantidad, 0)
    total.innerText = carritoDeCompras.reduce((acc,el)=> acc + (el.precio * el.cantidad), 0)
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
