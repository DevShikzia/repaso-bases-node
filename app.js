const {createFile} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');


 createFile(argv.b,argv.h,argv.l)
        .then(nombreArchivo=> console.log(nombreArchivo.rainbow, 'creado'.rainbow))
        .catch(err => console.log(err));
          


