// lesson-23 introduction to expression
var express = require('express'),
app = express();

app.get( '/', (req,res) => {
  console.log('route[ / ] has been requested');
  res.send('hii ndio mtaa');
} );
app.get( '/hi', (req,res) => {
  console.log('route[ /hi ] has been requested');
  res.end('this is route hi, salamz');
} );

app.listen(3000);
