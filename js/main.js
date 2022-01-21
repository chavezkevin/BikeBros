let kilometros = prompt ("cuantos kilometros diarios se necesian para estar saludable y tener una buena condicion fisica?");

while (kilometros != "10") {

    alert ("con eso no es suficiente");

    kilometros = prompt ("incrementa quilometros a tu rutina");

}

alert ("con esos kilometros tu salud y condicion fisica sera optima");





function apellidoNombre (){

    let nombreYapellido = prompt ("ingrsa tu nombre y apellido");

    alert ("su nombre y apellido es " + nombreYapellido);

}
pedirInfo();



alert ("a continuacion solicitaremos algunos datos para realizar su compra");

function datosCompra() {

    let DNI = prompt ("igrisa tu D.N.I");

    let cobro = prompt ("ingresa tu tarjeta de devito o credito");

    alert ("te enviaremos un codigo a tu e-mail para que puedas recivir tu comprovante");

    let Email = prompt ("ingresa tu e-mail");
    
}
datosCompra();

alert ("tu compra a sido exitosa, en brebedad enviaremos tu codigo")

