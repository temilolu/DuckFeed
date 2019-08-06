//server.js
const app = require( './app' );
const config = require('./config');

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen( config.port, () => console.log( 'Server ready' ) );