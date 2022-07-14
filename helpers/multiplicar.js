
const fs = require('fs');
const colors = require('colors');


//mi resolucion
// const createFile = (base = 5) => {
    
//   return new Promise((resolve,reject) => {
      
//       if(typeof base === 'number'){
  
      
//           console.log(`  ===============  `);
//           console.log("Tabla del:", base);
//           console.log(`  ===============  `);
          
//           let salida = '';
          
//           for (let i = 1; i <= 10; i++) {
      
//               salida += `${base} x ${i} = ${base * i}\n `;
              
//           }
      
//           console.log(salida);
      
      
//           fs.writeFileSync( `tabla-${base}.txt`, salida);
      
//           resolve(`tabla-${base}.txt`);
//       }else{
//           reject(`${base} no es un numero`);
//       }

//     } )

// }


// Fernando herrera solucion: 
const createFile = async(base = 5, hasta = 10,listar = false) => {

    try {
         
        if(typeof base === 'number'){
            let salida = '';
            let consola = '';
            
            for (let i = 1; i <= hasta; i++) {
                
                salida += `${ base } x ${i} = ${base * i}\n`;
                consola +=`${colors.magenta(base)} ${'x'.yellow} ${colors.magenta(i)} ${'='.yellow} ${colors.green(base * i)}\n`;
                
            }
              if(listar){
                  
                  console.log(`  ===============  `.rainbow);
                  console.log("Tabla del:".rainbow, colors.magenta(base));
                  console.log(`  ===============  `.rainbow);
                  console.log(consola);
              }
        
        
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
            return(`tabla-${base}.txt`);
        }else{
           throw(`${base} no es un numero`.red);
        }
    } catch (err) {
        throw(err)
    }
          

  
  }

module.exports = {
    createFile
}