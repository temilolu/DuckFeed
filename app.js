const path = require('path');
const express = require('./node_modules/express');
const cors = require('./node_modules/cors/lib');
const bodyParser = require('./node_modules/body-parser');
const mongoose = require('mongoose');
const postRoutes = require('./routes/post');
const authRoutes = require('./routes/auth');
const errorHandler = require('./middlewares/errorHandler');
const passportJWT = require('./middlewares/passportJWT')();
const config = require('./config');
const rateLimit = require('./node_modules/express-rate-limit/lib/express-rate-limit');

const app = express();

app.use(cors());

const limiter = rateLimit({
	windowMs: 10 * 1000, // 10 seconds
	max: 100 // limit each IP to 100 requests per windowMs
});

//  apply to all requests
app.use(limiter);

// Serve up static assets
// app.use(express.static("client/build"));

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoURI, {
	useNewUrlParser: true
});
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client", "build", "index.html")));

app.use(passportJWT.initialize());

app.use('/api/post', postRoutes);
app.use('/api/auth', authRoutes);
app.use(errorHandler);

app.get('/api', (req, res) => res.send('Welcome to duckfeed api'));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

module.exports = app;
