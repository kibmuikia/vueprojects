// lesson 2 : Global Object
/*
- Node.js global objects are global in nature and they are available in all modules.
- We do not need to include these objects in our application, rather we can use them directly.
- These objects are modules, functions, strings and object itself

*/

console.log( 'Welcome to lesson-2, Global Object' );

setTimeout( () => {
	console.log( '4 seconds have passed' );
}, 4000 );

var time = 0;
var timer = setInterval( () => {
	time += 3;
	console.log( time + ' seconds have passed!!.' );
	if( time > 10 ){
		clearInterval( timer );
		console.log('\tTime is up!');
	}
}, 3000 );

// knowing current directory
console.log( 'You are currently in :: \n\t[ '+ __dirname +' ].\n' );
// knowing current filename
console.log( 'You are currently in file :: \n\t[ '+ __filename +' ].\n' );
