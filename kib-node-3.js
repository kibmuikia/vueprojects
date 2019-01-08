// lesson-3 : function expression

// 1st: the normal function statement syntax
function hello(){
  console.log('hi there, from normal function statement');
}
hello();

// 2nd: using function expression
var habari = function( time, name ){
  console.log( 'Good '+time+', '+name );
};
habari( 'morning', 'kibCode' );

// using a function as a parameter of another functions
function root( fun ){
  fun();
}
root( hello );// habari('evening', 'Chun li')
