// Objetos
// Objetos son colecciones de claves - valor
// funciones dentro de un objeto son llamados 'métodos'
// variables dentro de un objeto son llamados 'propiedades'

const person = {
	name: 'Daniel', // PROPIEDAD
	// walk: function () {
	// 	console.log('Estoy caminando');
	// }, // METODO
	walk() {
		console.log('I am walking!');
	},
	talk() {
		console.log('Hola! estoy hablando desde el objeto!');
	},
};

// // Para acceder a estos metodos y propiedades usamos la sintaxis de punto
person.walk();
