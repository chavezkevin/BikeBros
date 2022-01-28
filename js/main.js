/* ---BUCLE---*/

/* let kilometros = prompt ("cuantos kilometros diarios se necesian para estar saludable y tener una buena condicion fisica?");

while (kilometros != "10") {

    alert ("con eso no es suficiente");

    kilometros = prompt ("incrementa quilometros a tu rutina");

}

alert ("con esos kilometros tu salud y condicion fisica sera optima"); */


/* ----ARRAYS---- */

const bicicletas = [
    {tipo:"bmx", precio:"3000"},
    {tipo:"kids", precio:"2000"},
    {tipo:"mtb", precio:"5000"},
    {tipo:"ruta", precio:"9000"}
];

function cadaBici (arr, fn) {
    for (const el of arr) {
        fn(el)
    }
}

cadaBici (bicicletas, console.log)

const accesorios = [
    {tipo:"asiento", precio:"300"},
    {tipo:"baliza", precio:"100"},
    {tipo:"freno", precio:"200"},
    {tipo:"inflador", precio:"250"},
    {tipo:"kitPurgado", precio:"350"},
    {tipo:"linga", precio:"150"},
    {tipo:"liquidoPPinchaduras", precio:"500"},
    {tipo:"luzDelantera", precio:"150"},
    {tipo:"monoplato", precio:"600"},
    {tipo:"pedalBMX", precio:"400"},
    {tipo:"pedalSportrace", precio:"450"},
    {tipo:"pedalMtbSportrace", precio:"500"},
    {tipo:"pedalSportace2", precio:"400"},
    {tipo:"pedalTopmega", precio:"800"},
    {tipo:"plataformaBloqueo", precio:"480"},
    {tipo:"portaBicicleta", precio:"1000"},
    {tipo:"portaCaramañola", precio:"340"},
    {tipo:"portaCelular", precio:"480"},
    {tipo:"protector", precio:"300"},
    {tipo:"puñoRanser", precio:"200"},
    {tipo:"ruedaCambio", precio:"650"},
    {tipo:"sensorVelocidad", precio:"1050"},
    {tipo:"sillaPortaMuñeca", precio:"800"},
    {tipo:"soporte", precio:"850"},
    {tipo:"soporteFrontal", precio:"880"},
    {tipo:"valvula", precio:"500"}
]

function cadaAccesorio (arr, fn) {
    for (const el of arr) {
        fn(el)
    }
}

cadaAccesorio (accesorios, console.log)


/* ---DISPOSITIVO INTERACTIVO--- */
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

alert ("tu compra a sido exitosa, en brebedad enviaremos tu codigo")