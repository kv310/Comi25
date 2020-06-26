// Las funciones ¡¡¡SON OBJETOS!!!! CHAN!!
// ES MÁS -----> TODO es un objeto "MASAKA!!"
function saludar(mensaje) {
    console.log(mensaje);
}

saludar.nombre = "fran"; // lol what?
saludar["apellido"] = "fog"; // looool

// Creo DIRECTAMENTE una instancia de mesa
var mesa0 = {
    cantidadPatas: 4,
    material: "melanina",
    altura: 90,
    color: "gris"
}


// POO(español) --> Programación Orientada a Objetos
// OOP(inglés) --> Object Oriented Programming

// IDEA Mesa o Clase Mesa
function Mesa(cantidadPatas, material, altura, color) {
    this.cantidadPatas = cantidadPatas;
    this.material = material;
    this.altura = altura;
    this.color = color;
}

// Una instancia de Mesa
var mesa1 = new Mesa(4, "roble", 100, "verde");
var mesa2 = new Mesa(4, "pino", 80, "madera");



function Gato(nombre, color, comportamiento, raza) {
    // Descripción --> Properties / Propiedades
    this.nombre = nombre;
    this.estaVivo = true;
    this.color = color;
    this.comportamiento = comportamiento; // Bueno, Malo
    this.edad = 0; // En años
    this.raza = raza;
    this.cantidadVidas = 7;

    // Acciones --> Métodos / Funciones
    this.maullar = function(tipoMaullido) {
        if(tipoMaullido == "celo") {
            console.log("MEAOOOGOOOOOHHH!!");
        }
        else if(tipoMaullido == "hambre") {
            console.log("MIAU!!");
        }
        else {
            console.log("miau");
        }
    }

    this.morir = function() {
        this.cantidadVidas--;
        if(this.cantidadVidas == 0) {
            console.log("El gatito ha muerto :(");
            this.estaVivo = false;
        }
    }

    this.crecer = function() {
        // Cumplir años cada 10 segundos;
        setInterval(cumplirAnios.bind(this), 1000 * 5);

        function cumplirAnios() {
            this.edad++;
            console.log(this.nombre + " cumplió años! Ahora tiene " + this.edad + " años :)");
        }
    }
}


var bolaDeNieve = new Gato("bola de nieve", "blanco", "bueno", "generico");
bolaDeNieve.crecer();

var bolaDeNieve2 = new Gato("bola de nieve 2", "negro", "malo", "generico");


// ¿Qué diferencia hay entre una función y una clase?
// CLASE: this + new
// FUNCIÓN: NADA

// GIT --> SUPER SUPER IMPORTANTE
// Funciones Callback
// Funciones Asincrónicas
// Intro a Clases