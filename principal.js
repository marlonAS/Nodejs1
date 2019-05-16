const opciones={
    id: {demand:true,
    alias:'i'},
    nombre: {demand:true,
    alias: 'n'},
    cedula: {demand:true,
    alias:'c'}
};
const fs=require('fs');
const argv = require('yargs')
.command('inscribir','Inscribirse a un curso',opciones).argv
let cursos = [
    {
        id: 1,
        nombre: 'javascript',
        duracion: 20,
        valor: 50000
    },
    {
        id: 2,
        nombre: 'ingles',
        duracion: 10,
        valor: 80000
    },
    {
        id: 3,
        nombre: 'psicologia',
        duracion: 15,
        valor: 10000
    },
]

let mostrar=(id,nombre,duracion,valor)=> console.log('el id del curso es '+id+', se llama '+nombre+', tiene una duracion de '+duracion+' horas y un valor de '+valor)
let cursoins = cursos.find(curso=>curso.id==argv.id)
let crearArchivo=(argv,cursoins)=>{
    texto='el estudiante '+argv.nombre+' con cedula '+argv.cedula+' se ha matriculado en el curso llamado '+cursoins.nombre+' de una duracion de '+cursoins.duracion+' horas y un valor de '+cursoins.valor;
fs.writeFile('informacion.txt',texto,(err)=>{
    if(err)throw(err);console.log('se ha creado el archivo')
});
}
if(argv.id!=undefined){if(argv.id<1 || argv.id>3)console.log('el id ingresado no corresponde a ningun grupo');else crearArchivo(argv,cursoins);}

setTimeout(function(){mostrar(cursos[0].id,cursos[0].nombre,cursos[0].duracion,cursos[0].valor);},2000);
setTimeout(function(){mostrar(cursos[1].id,cursos[1].nombre,cursos[1].duracion,cursos[1].valor);},4000);
setTimeout(function(){mostrar(cursos[2].id,cursos[2].nombre,cursos[2].duracion,cursos[2].valor);},6000);