export class Persona {
    public id: number;
    public nombre: string;
    public edad: string;
    constructor(id: number, nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.id = id;
    }
}