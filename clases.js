class usuario {

constructor(nombre, apellido, libros = [], mascotas = []) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;}

getfullName() {
    console.log(`El nombre y apellido del usuario es: ${this.nombre} ${this.apellido}`);}

addMascota(nombreMascota) {
    this.mascotas.push(nombreMascota);
    console.log(`${nombreMascota} ha sido agregado con exito`);}

countMascotas() {
    console.log(`Este usuario tiene ${this.mascotas.length} mascotas`);}

addBook(nombreLibro, autorLibro) {
    this.libros.push({ nombre: nombreLibro, autor: autorLibro });
    console.log(`Se ha agregado corrctamente el libro: '${nombreLibro}' de  ${autorLibro}`);}

getBookNames() {
    const arrayBooksName = this.libros.map((book) => book.nombre);
    console.log(arrayBooksName);}
}

const user1 = new usuario("valentin", "ruggieri");

user1.getfullName();
user1.addMascota("ciro");
user1.addMascota("kira");
user1.countMascotas();
user1.addBook("Libre para elegir", "Milton Friedman");
user1.addBook("la riqueza de las naciones", "Adam Smith");
user1.getBookNames();
