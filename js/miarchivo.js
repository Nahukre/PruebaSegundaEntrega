let miFormulario = document.getElementById("myForm");

class persona {
    constructor(nombre, mail, sueldo, ahorro, extra, objetivo, valorBien) {
        this.nombre = nombre;
        this.mail = mail;
        this.sueldo = sueldo;
        this.ahorro = ahorro;
        this.extra = extra;
        this.objetivo = objetivo;
        this.valorBien = valorBien;
    }
    toString() {
        return `Nombre: ${this.nombre} \nMail: ${this.mail} \nSueldo: ${this.sueldo} \nAhorro: ${this.ahorro} \nIngreso extra anual: ${this.extra} \nBien a adquirir: ${this.objetivo} \nValor del Bien: ${this.valorBien}`;
    }
}

let arrayUsuarios = [];

let buttonSubmit = document.getElementById('submitButton');
miFormulario.addEventListener("submit", crearUsuario);

const multiplicacion = (a, b) => a * b;
const division = (a, b) => a / b;
const suma = (a, b) => a + b;

function crearUsuario(e) {

    e.preventDefault();
    let formulario = e.target;

    let nombreIngresado = document.getElementById('nombre').value;
    let emailIngresado = document.getElementById('email').value;
    let sueldoIngresado = document.getElementById('sueldo').value;
    let ahorroIngresado = parseInt(document.getElementById('ahorro').value);
    let extraIngresado = parseInt(document.getElementById('extra').value);
    let objetivoIngresado = document.getElementById('objetivo').value;
    let valorBienIngresado = document.getElementById('valorBien').value;

    let usuario = new persona(nombreIngresado, emailIngresado, sueldoIngresado, ahorroIngresado, extraIngresado, objetivoIngresado, valorBienIngresado);

    arrayUsuarios.push(usuario);
    // localStorage.setItem(1, JSON.stringify(arrayUsuarios));


    console.log(usuario)

    //mostrarNuevaPersona =>


    const multiplicacion = (a, b) => a * b;
    const division = (a, b) => a / b;
    const suma = (a, b) => a + b;

    let ahorroPorcentaje = division((multiplicacion(100, ahorroIngresado)), sueldoIngresado);
    let ahorroAnual = suma((multiplicacion(ahorroIngresado, 12)), extraIngresado);
    let mesesDeAhorro = division(valorBienIngresado, sueldoIngresado);
    let ahorroReal = division(valorBienIngresado, ahorroIngresado);
    let sueldoA??os = division(mesesDeAhorro, 12);
    let ahorroA??os = division(ahorroReal, 12);
    let tiempoTotal = division(valorBienIngresado, (suma(extraIngresado, ahorroAnual)));
    // let tiempoPlus = division(valorBienIngresado, multiplicacion(ahorroAnual, 1.1));

    switch (true) {
        case (ahorroPorcentaje <= 5):
            let contenedorPorcentajeAhorro1 = document.createElement("div");
            contenedorPorcentajeAhorro1.classList.add('operacionOpciones');
            contenedorPorcentajeAhorro1.innerHTML = `<h5>\nSu porcentaje de ahorro es bajo.</h>`;
            document.body.appendChild(contenedorPorcentajeAhorro1);
            break;
        case ((ahorroPorcentaje > 5) && (ahorroPorcentaje <= 10)):
            let contenedorPorcentajeAhorro2 = document.createElement("div");
            contenedorPorcentajeAhorro2.classList.add('operacionOpciones');
            contenedorPorcentajeAhorro2.innerHTML = `<h5>\nSu porcentaje de ahorro podr??a ser m??s elevado.</h>`;
            document.body.appendChild(contenedorPorcentajeAhorro2);
            break;
        case ((ahorroPorcentaje > 10) && (ahorroPorcentaje <= 20)):
            let contenedorPorcentajeAhorro3 = document.createElement("div");
            contenedorPorcentajeAhorro3.classList.add('operacionOpciones');
            contenedorPorcentajeAhorro3.innerHTML = `<h5>\nSu porcentaje de ahorro es considerable.</h>`;
            document.body.appendChild(contenedorPorcentajeAhorro3);
            break;
        case ((ahorroPorcentaje > 20) && (ahorroPorcentaje <= 50)):
            let contenedorPorcentajeAhorro4 = document.createElement("div");
            contenedorPorcentajeAhorro4.classList.add('operacionOpciones');
            contenedorPorcentajeAhorro4.innerHTML = `<h5>\nSu porcentaje de ahorro es elevado.</h>`;
            document.body.appendChild(contenedorPorcentajeAhorro4);
            break;
        case (ahorroPorcentaje > 50):
            let contenedorPorcentajeAhorro5 = document.createElement("div");
            contenedorPorcentajeAhorro5.classList.add('operacionOpciones');
            contenedorPorcentajeAhorro5.innerHTML = `<h5>\nUsted tiene una gran capacidad de ahorro.</h>`;
            document.body.appendChild(contenedorPorcentajeAhorro5);
            break;
        default:
            let contenedorPorcentajeAhorro6 = document.createElement("div");
            contenedorPorcentajeAhorro6.classList.add('operacionOpciones');
            contenedorPorcentajeAhorro6.innerHTML = `<h5>\nUsted no ahorra o ingres?? un dato incorrecto.</h>`;
            document.body.appendChild(contenedorPorcentajeAhorro6);
            break;
    }

    let dolarBlueAhorro = division(document.getElementById('ahorro').value, dolarBlue.valor);
    let bitcoinAhorro = division(document.getElementById('ahorro').value, bitcoin.valor);
    let appleAhorro = division(document.getElementById('ahorro').value, cedearApple.valor);
    let amazonAhorro = division(document.getElementById('ahorro').value, cedearAmazon.valor);
    let teslaAhorro = division(document.getElementById('ahorro').value, cedearTesla.valor);
    let oroAhorro = division(document.getElementById('ahorro').value, oro.valor);

    let contenedorPersona = document.createElement("div");
    contenedorPersona.classList.add('operacionOpciones');
    contenedorPersona.innerHTML = `<h5>Hola ${usuario.nombre}!</h5>
                                        <h5>\nSu porcentaje de ahorro mensual es del ${ahorroPorcentaje.toFixed(2)}%.</h5> 
                                        <h5>\nSu ahorro anual es de $${ahorroAnual}.</h5> 
                                        <h5>\nSi destinara todo su sueldo a comprar su ${usuario.objetivo} tardar??a ${mesesDeAhorro.toFixed(2)} meses o ${sueldoA??os.toFixed(2)} a??os para comprar lo que desea.</h5> 
                                        <h5>\nSi destinara solo su ahorro mensual a comprar su ${usuario.objetivo} tardar??a ${ahorroReal.toFixed(2)} meses o ${ahorroA??os.toFixed(2)} a??os para comprar lo que desea.</h5> 
                                        <h5>\nSi destinara su ahorro anual m??s sus ingresos extra anuales a comprar su ${usuario.objetivo} tardar??a ${tiempoTotal.toFixed(2)} a??os para comprar lo que desea.</h5> 
                                        <h5>\nValor del Bien: $${usuario.valorBien}<h5>`;
    document.body.appendChild(contenedorPersona);

    for (const inversiones of nacional.activo) {
        let contenedor = document.createElement("div");
        contenedor.classList.add('operacionOpciones');
        contenedor.innerHTML = `<table class="tabla"><tr> Activo: ${inversiones.denominacion}</tr>  <tr>  Moneda: ${inversiones.moneda}</tr>  <tr> Valor: $${inversiones.valor}</tr></table>`;
        document.body.appendChild(contenedor);
    }

    let contenedorActivos = document.createElement("div");
    contenedorActivos.classList.add('operacionOpciones');
    contenedorActivos.innerHTML = `<h5 class="opciones">Sus opciones de inversi??n inmediata son:</h5>
                                            <h5 class="opciones">\nUsted podr??a comprar con su ahorro mensual ${dolarBlueAhorro.toFixed(2)} d??lares blue.</h5> 
                                            <h5 class="opciones">\nUsted podr??a comprar con su ahorro mensual ${bitcoinAhorro.toFixed(2)} bitcoins.</h5> 
                                            <h5 class="opciones">\nUsted podr??a comprar con su ahorro mensual ${appleAhorro.toFixed(2)} cedears de Apple.</h5> 
                                            <h5 class="opciones">\nUsted podr??a comprar con su ahorro mensual ${amazonAhorro.toFixed(2)} cedears de Amazon.</h5> 
                                            <h5 class="opciones">\nUsted podr??a comprar con su ahorro mensual ${teslaAhorro.toFixed(2)} cedears de Tesla.</h5>
                                            <h5 class="opciones">\nUsted podr??a comprar con su ahorro mensual ${oroAhorro.toFixed(2)} kilos de oro.</h5>`;
    document.body.appendChild(contenedorActivos);

    //trabajo eventos complementario crear cards
    let cardActivos = document.createElement("section");
    cardActivos.classList.add('activo');
    cardActivos.innerHTML = `<div id="activo__dolarBlue"><h2 class="dolarBlue__nombre">${dolarBlue.denominacion}</h2>
    <img class="activo__foto" src="img/dolar.jpg" alt="foto de dolar">
    <p class="activo__info">${dolarBlue.descripcion}</p><p class="activo__valor">Valor: $${dolarBlue.valor}</p>
    </div> <div id="activo__dolarBlue"><h2 class="dolarBlue__nombre">${bitcoin.denominacion}</h2>
    <img class="activo__foto" src="img/bitcoin.jpg" alt="foto de bitcoin">
    <p class="activo__info">${bitcoin.descripcion}</p><p class="activo__valor">Valor: U$S${bitcoin.valor}</p>
    </div> <div id="activo__dolarBlue"><h2 class="dolarBlue__nombre">${cedearAmazon.denominacion}</h2>
    <img class="activo__foto" src="img/amazon.jpg" alt="foto de amazon">
    <p class="activo__info">${cedearAmazon.descripcion}</p><p class="activo__valor">Valor: $${cedearAmazon.valor}</p>
    </div> <div id="activo__dolarBlue"><h2 class="dolarBlue__nombre">${cedearApple.denominacion}</h2>
    <img class="activo__foto" src="img/apple.jpg" alt="foto de apple">
    <p class="activo__info">${cedearApple.descripcion}</p><p class="activo__valor">Valor: $${cedearApple.valor}</p>
    </div> <div id="activo__dolarBlue"><h2 class="dolarBlue__nombre">${cedearTesla.denominacion}</h2>
    <img class="activo__foto" src="img/tesla.png" alt="foto de tesla">
    <p class="activo__info">${cedearTesla.descripcion}</p><p class="activo__valor">Valor: $${cedearTesla.valor}</p>
    </div> </div> <div id="activo__dolarBlue"><h2 class="dolarBlue__nombre">${oro.denominacion}</h2>
    <img class="activo__foto" src="img/oro.jpg" alt="foto de tesla">
    <p class="activo__info">${oro.descripcion}</p><p class="activo__valor">Valor: $${oro.valor}</p>
    </div>`;
    document.body.appendChild(cardActivos);

    for (const inversiones of nacional.activo) {
        let tarjetaActivos = document.createElement("section");
        tarjetaActivos.classList.add('activos__tarjetas');
        tarjetaActivos.innerHTML = `<div id="activo__tarjeta"><h2 class="tarjeta__nombre">${inversiones.denominacion}</h2>
        <img class="tarjeta__foto" src="" alt="foto de bitcoin">
        <p class="tarjeta__info">${inversiones.descripcion}</p>
        </div>`;
        document.body.appendChild(tarjetaActivos);
    }

};

// console.log(localStorage.getItem(1));



// array
class Inversion {
    constructor(denominacion, moneda, valor, descripcion) {
        this.denominacion = denominacion;
        this.moneda = moneda;
        this.valor = valor;
        this.descripcion = descripcion;
    }
}
class activoDeInversion {
    constructor() {
        this.activo = [];
    }
    agregarInversion(inversion) {
        this.activo.push(inversion);
    }
}

let nacional = new activoDeInversion("Activos dentro del mercado local con los cuales poder ahorrar");
let dolarBlue = new Inversion("Dolar blue", "peso", 170, "El D??lar Blue es el d??lar que se consigue en el mercado negro o mercado paralelo. La cotizaci??n o valor del D??lar Blue hoy generalmente es superior a la cotizaci??n del d??lar oficial y suele aumentar a medida que aumenta el control de cambios o se incrementan las restricciones para la compra de d??lares al precio oficial.");
let bitcoin = new Inversion("Bitcoin", "dolar", 35000, "Bitcoin es una moneda virtual o criptomoneda que se utiliza como medio de intercambio electr??nico que sirve para adquirir productos y servicios como cualquier otra moneda. Pero esta moneda es descentralizada, es decir que no existe una autoridad o ente de control que sea responsable de su emisi??n y registro de sus movimientos.");
let cedearTesla = new Inversion("Testa cedear", "peso", 7500, "Cedears  (Certificados de Dep??sito Argentinos) de la compa??ia Tesla. Activo financiero atado al dolar y a la valuaci??n de la empresa en el mercado.");
let cedearApple = new Inversion("Apple cedear", "peso", 3500, "Cedears  (Certificados de Dep??sito Argentinos) de la compa??ia Apple. Activo financiero atado al dolar y a la valuaci??n de la empresa en el mercado.");
let cedearAmazon = new Inversion("Amazon cedear", "peso", 4500, "Cedears  (Certificados de Dep??sito Argentinos) de la compa??ia Amazon. Activo financiero atado al dolar y a la valuaci??n de la empresa en el mercado.");
let oro = new Inversion("oro", "peso", 5570000, "El oro es un metal precioso utilizado como reserva de valor. Se caracteriza por tener poca variaci??n en su cotizaci??n y ser resguardo de valor en epocas de inflaci??n.");

nacional.agregarInversion(dolarBlue);
nacional.agregarInversion(bitcoin);
nacional.agregarInversion(cedearTesla);
nacional.agregarInversion(cedearApple);
nacional.agregarInversion(cedearAmazon);
nacional.agregarInversion(oro);

const ordenarActivos = () => {
    nacional.activo.sort((a, b) => {
        if (a.valor < b.valor) {
            return -1;
        }
        if (a.valor > b.valor) {
            return 1;
        }
        return 0;
    });
    console.log(nacional.activo);
}
ordenarActivos();

// const opcionesDeInversion = [
//     { nombre: "Dolar blue", valor: 170, descripcion: "moneda norteamericana en el mercado informal" },
//     { nombre: "Bitcoin", valor: 7000000, descripcion: "Criptomoneda" },
//     { nombre: "Testa cedear", valor: 7500, descripcion: "Cedear de la compa??ia Tesla. Activo financiero atado al dolar y a la valuaci??n de la empresa en el mercado." },
//     { nombre: "Apple cedear", valor: 3500, descripcion: "Cedear de la compa??ia Tesla. Activo financiero atado al dolar y a la valuaci??n de la empresa en el mercado." },
//     { nombre: "Disney cedear", valor: 4500, descripcion: "Cedear de la compa??ia Tesla. Activo financiero atado al dolar y a la valuaci??n de la empresa en el mercado." },


//quizz

let miFormulario2 = document.getElementById("formulario2")

let buttonSubmitQuizz = document.getElementById('submitButtonQuizz');
miFormulario2.addEventListener("submit", definirInversor);

function definirInversor(f) {
    f.preventDefault();
    let formulario = f.target;

    //Preguntas que ya no se usan prompt
    // let cuantoInvierte = parseInt(prompt("Qu?? porcentaje de sus ahorros invertir??a? \n1- Hasta un 10% \n2- Hasta un 20% \n3- M??s de un 20 %"));
    // let queHar??a = parseInt(prompt("Si un activo que posee se reduce en su valor drasticamente, usted: \n1- Vende el activo \n2- Espera a que suba su precio nuevamente \n3- Compra m??s aprovechando su menor valor"));
    // let porcentajePerdida = parseInt(prompt("Qu?? porcentaje de su inversi??n estar??a disp??esto a perder con tal de obtener ganancias? \n1- No est?? dispuesto a arriesgar sus ahorros \n2- Est?? dispuesto a arriezgar algo de sus ahorros \n3- Arriezgar??a un porcentaje considerable de sus ahorros con miras a obtener ganancias futuras"));
    // let activoConPotencial = parseInt(prompt("Si surge un nuevo activo, con gran potencial de crecimiento, pero con gran riezgo, usted: \n1- No invertir??a en ese activo \n2- Invertir??a una parte peque??a de su capital en ese activo \n3- Si conf??a en el activo invertir??a sin dudarlo"));
    // let tipoDeInversor = cuantoInvierte + queHar??a + porcentajePerdida + activoConPotencial

    let porcentajeDeAhorro = parseInt(document.querySelector('input[name="porcentajeDeAhorro"]:checked').value);
    let reduccionDeActivo = parseInt(document.querySelector('input[name="reduccionDeActivo"]:checked').value);
    let gananciaEsperada = parseInt(document.querySelector('input[name="gananciaEsperada"]:checked').value);
    let nuevoActivo = parseInt(document.querySelector('input[name="nuevoActivo"]:checked').value);
    let SumaQuizz = porcentajeDeAhorro + reduccionDeActivo + gananciaEsperada + nuevoActivo;
    console.log(SumaQuizz);
    switch (true) {
        case (SumaQuizz <= 4 || SumaQuizz <= 6):
            let contenedorTipoInversorConservador = document.createElement("div");
            contenedorTipoInversorConservador.innerHTML = `<h5 class="operacionOpcion">\nUsted es un inversor conservador.</h>`;
            document.body.appendChild(contenedorTipoInversorConservador);
            break;
        case (SumaQuizz <= 7 || SumaQuizz <= 9):
            let contenedorTipoInversorModerado = document.createElement("div");
            contenedorTipoInversorModerado.innerHTML = `<h5 class="operacionOpcion">\nUsted es un inversor Moderado.</h>`;
            document.body.appendChild(contenedorTipoInversorModerado);
            break;
        case (SumaQuizz >= 10 || SumaQuizz <= 12):
            let contenedorTipoInversorAgresivo = document.createElement("div");
            contenedorTipoInversorAgresivo.innerHTML = `<h5 class="operacionOpcion">\nUsted es un inversor agresivo.</h>`;
            document.body.appendChild(contenedorTipoInversorAgresivo);
            break;
    }
}
definirInversor();

function abrir() {
    document.getElementById("formId").style.display = "block";
}

function abrirFormulario() {
    document.getElementById("formIdBis").style.display = "block";
}

function cerrar() {
    document.getElementById("formId").style.display = "none";
}

function cerrarFormulario() {
    document.getElementById("formIdBis").style.display = "none";
}