//server.js
const app = require( './app' );

const port = process.env.PORT;

// Serve up static assets
if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

app.listen( port, () => console.log( 'Server ready' ) );