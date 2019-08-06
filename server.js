//server.js
const app = require( './app' );

app.set('port', (process.env.PORT || 5000));

app.listen( app.get('port'), () => console.log( 'Server ready' + app.get('port') ) );