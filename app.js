const { argv } = require('./config/yargs.js');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);

        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado ${archivo}`.red))

        break;
    default:
        console.log('default');
        break;
}

//console.log(parametro);
//crearArchivo(parametro, 20).then(archivo => console.log(`Archivo creado ${archivo}`))