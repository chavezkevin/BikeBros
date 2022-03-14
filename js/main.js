document.addEventListener('DOMContentLoaded', () => {

    // Variables
    let baseDeDatos = [
        {
            id: 1,
            nombre: 'BICICLETA BMX DIOMENES',
            precio: 49759,
            imagen: './img/img-BMX/bmxDiomenes.png',
            descripcion: 'Una bicicleta para los que viven buscando nuevos desafíos, andar con estilo disfrutando al extremo. Ágil y resistente para que puedas realizar maniobras y saltos, demostrándote que podes superarte cada día.'
        },
        {
            id: 2,
            nombre: 'BICICLETA CROSSBOY-R20',
            precio: 32495,
            imagen: './img/img-KIDS/crossboy.png',
            descripcion: 'pensada y diseñada para los niños con mucha energia y preparados para la aventura.'
        },
        {
            id: 3,
            nombre: 'BICICLETA CROSSBOY-R16',
            precio: 25915,
            imagen: './img/img-KIDS/crossboyR16.png',
            descripcion: 'bicicleta para esos niños dispuestor a ganar.'
        },
        {
            id: 4,
            nombre: 'BICICLETA FLEXYGIRL-R20',
            precio: 32495,
            imagen: './img/img-KIDS/flexygirl.png',
            descripcion: 'bicicleta para esas niñas aventureras, incorporado con un cesto para pasear a sus juguetes.'
        },
        {
            id: 5,
            nombre: 'BICICLETA MTB FlAMINGO',
            precio: 55099,
            imagen: './img/img-MTB/mtbflamingo.png',
            descripcion: 'Esta bicicleta se adapta a vos, pensada en tu comodidad. Con un diseño y una geometría que te dará mayor confort y maniobrabilidad. Los frenos a disco te brindan esa seguridad y precisión que necesitas en tus recorridos.'
        },
        {
            id: 6,
            nombre: 'BICICLETA MTB NEPTUNE-R26',
            precio: 53690,
            imagen: './img/img-MTB/mtbneptune.png',
            descripcion: 'Esta bicicleta es para los que se divierten viviendo nuevas aventuras. Versátil y estable, tu compañera para moverte en la ciudad y llevar una vida más deportiva.'
        },
        {
            id: 7,
            nombre: 'BICICLETA MTB REGAL',
            precio: 58957,
            imagen: './img/img-MTB/mtbregal.png',
            descripcion: 'Esta bicicleta se adapta a cualquier situacion, con sus 21 velocidades no tendras problemas de surcar cualquier obstaculo.'
        },
        {
            id: 8,
            nombre: 'BICICLETA MTB SUNSHINE-R29',
            precio: 73605,
            imagen: './img/img-MTB/mtbsunshine.png',
            descripcion: 'Esta bicicleta fue diseñada para circular en cualquier clase de terreno, gracias a su talle S no habra problemas de crusar del asfalto a la tierra.'
        },
        {
            id: 9,
            nombre: 'BICICLETA MTB THOR LITE-R29',
            precio: 83837,
            imagen: './img/img-MTB/mtbthor.png',
            descripcion: 'Esta bicicleta es la mas completa del mercado, incluye 24 velocidades y su talle S genera mucha mas comodidad al circular, podes encontrarla en colores negro o amarillo.'
        },
        {
            id: 10,
            nombre: 'Bicicleta RUTA Harrier',
            precio: 189265,
            imagen: './img/img-RUTA/rutaharrier.png',
            descripcion: 'Tecnología pensada en tu necesidad de llegar más lejos y de superarte en cada salida. Con la comodidad que buscas para alargar tus recorridos y alcanzar nuevas metas. Más rápida y ligera para que vivas la velocidad con todos tus sentidos.'
        }
    ]

    let carrito = [];
    const divisa = '$';
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');
    const miLocalStorage = window.localStorage;

    // Funciones

    /**
    * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
    */


function renderizarProductos() {
    baseDeDatos.forEach((info)=>{


        // Estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4', 'm-1', 'text-white', 'bg-secondary');


        // Body
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body', 'd-flex', 'flex-column', 'justify-content-between');


        // Titulo
        const miNodoTitle = document.createElement('h3');

        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.nombre;

        const miNododescripcion = document.createElement('p')
        miNododescripcion.classList.add('card-text')
        miNododescripcion.textContent = info.descripcion


        // Imagen
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid', 'rounded-3');
        miNodoImagen.setAttribute('src', info.imagen);


        // Precio
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `${info.precio}${divisa}`;


        // Boton 
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = 'INCLUIR EN LA COMPRA';
        miNodoBoton.setAttribute('marcador', info.id);

        miNodoBoton.addEventListener('click', anyadirProductoAlCarrito)
        miNodoBoton.addEventListener('click', () => {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'success',
                title: 'producto agregado en el carrito'
            })
        });



        // Insertamos
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNododescripcion);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
    });
}

/**
* Evento para añadir un producto al carrito de la compra
*/
function anyadirProductoAlCarrito(evento) {

    // Anyadimos el Nodo a nuestro carrito
    carrito.push(evento.target.getAttribute('marcador'))
    // Actualizamos el carrito 
    renderizarCarrito();
    // Actualizamos el LocalStorage
    guardarCarritoEnLocalStorage();
}

/**
* Dibuja todos los productos guardados en el carrito
*/
function renderizarCarrito() {
    // Vaciamos todo el html
    DOMcarrito.textContent = '';
    // Quitamos los duplicados
    const carritoSinDuplicados = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
        // Obtenemos el item que necesitamos de la variable base de datos
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            // ¿Coincide las id? Solo puede existir un caso
            return itemBaseDatos.id === parseInt(item);
        });
        // Cuenta el número de veces que se repite el producto
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
            return itemId === item ? total += 1 : total;
        }, 0);
        // Creamos el nodo del item del carrito
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2', 'item', 'bg-secondary', 'text-white');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
        // Boton de borrar
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito,)
        miBoton.addEventListener('click', () => {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'error',
                title: 'producto eliminado'
            })
        })


        // Mezclamos nodos
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
    });
    // Renderizamos el precio total en el HTML
    DOMtotal.textContent = calcularTotal();
}

/**
* Evento para borrar un elemento del carrito
*/
function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = evento.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    // volvemos a renderizar
    renderizarCarrito();
    // Actualizamos el LocalStorage
    guardarCarritoEnLocalStorage();

}

/**
 * Calcula el precio total teniendo en cuenta los productos repetidos
 */
function calcularTotal() {
    // Recorremos el array del carrito 
    return carrito.reduce((total, item) => {
        // De cada elemento obtenemos su precio
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        // Los sumamos al total
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}


/**
* Varia el carrito y vuelve a dibujarlo
*/
function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    renderizarCarrito();
    // Borra LocalStorage
    localStorage.clear();

}




function guardarCarritoEnLocalStorage() {
    miLocalStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarritoDeLocalStorage() {
    // ¿Existe un carrito previo guardado en LocalStorage?
    if (miLocalStorage.getItem('carrito') !== null) {
        // Carga la información
        carrito = JSON.parse(miLocalStorage.getItem('carrito'));
    }
}

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);

// Inicio
cargarCarritoDeLocalStorage();
renderizarProductos();
renderizarCarrito();
});





const lista = document.getElementById("lista")

const url = "../js/galeria.json"


fetch(url)

    .then(respuesta => respuesta.json())
    .then(producto => {
        producto.forEach(elemento => {
            const li = document.createElement("li");

            li.innerHTML = `
        <div class="card border-dark imgMultimedia">
            <img src="${elemento.imagen}" class="" alt="...">
        </div>
        `
            lista.append(li)
        })
    })


    const botonFinlizarCompra = document.querySelector('#boton-compra-finalizada')

// comprar
botonFinlizarCompra.addEventListener('click', () => {
    Swal.fire({
        icon: 'success',
        title: 'COMPRA REALIZADA CON EXITO!',
        text: 'En la brebedad enviaremos un codigo a tu correo para que puedas verificar el estado de tu compra.'
    })
})
