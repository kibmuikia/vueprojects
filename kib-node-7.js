// lesson-9 :: reading and writing files
var fs = require( 'fs' );

// using 'readFileSync' .. reads a file synchronously .. synchronous version
var readme = fs.readFileSync( 'readMe.txt', 'utf8' );
console.log( readme );
if( fs.writeFileSync( 'writeMe.txt', readme ) ){
  console.log('data written to new file');
}

// using readFile .. asynchronous method .. this allows the code to continue flowing while it's reading the file
fs.readFile( 'somaMe.txt', 'utf8', (err,data) => {
  console.log( `file has ${data.length} elements and it contains,\n\t [ ${data} ], with error[ ${err} ]` );
  fs.writeFile( 'write2.txt', data, () => {
    console.log('done writting to file.');
  } );
} );
