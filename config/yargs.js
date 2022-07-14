const argv = require('yargs')
                      .option({
                        'b':{
                          alias: 'base',
                          type: 'number',
                          demandOption: true,
                          describe:'es la base de la tabla de multiplicar'
            
                        },
                        'h':{
                            alias: 'hasta',
                            type: 'number',
                            demandOption: true,
                            describe:'Hasta es el numero limite al cual quiero multiplicar la tabla'
              
                          },
                        'l':{
                          alias: 'listar',
                          type: 'boolean',
                          default: false,
                          describe: 'Show the table in console'
              
                        }
                      })
                      .check( (argv,option) =>{
                        if(isNaN(argv.b)){
                          throw 'La base tiene que ser un number'
                        }
                        if(isNaN(argv.h)){
                            throw 'El Hasta debe ser un numero'
                        }
                        return true;
                      })
                      .argv
    module.exports = argv;
