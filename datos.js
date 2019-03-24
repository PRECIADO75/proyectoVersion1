const opciones={
    matematicas:{ default:0,alias:'m'},
    ingles:{default:0,alias:'i'}
};
const argv = require('yargs').command('promedio','calcular promedio',opciones).argv;
var obtenerPromedio=(argv.matematicas + argv.ingles + argv.programacion)/3;

module.exports ={argv,obtenerPromedio};