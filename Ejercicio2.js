//mensaje en log
console.log("Esto es un mensaje en el log");
//error
console.error("Esto es un error");
//Añadir informacion
console.info("Añade informacion a la consola");
//Warning
console.warn("Envia un aviso");


const gente = [
    {nombre: 'Diego', edad: 21},
    {nombre: 'Toni', edad: 30},
    {nombre: 'Johana', edad: 20},
];

console.table(gente);
gente.forEach((persona,index) => {
    console.groupCollapsed(`${persona.nombre}`);
    console.log(persona.edad);
    console.log("hola");
    console.groupEnd(`${persona.nombre}`);
});

