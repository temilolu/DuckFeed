const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const postRoutes = require('./routes/post');
const authRoutes = require('./routes/auth');
const errorHandler = require('./middlewares/errorHandler');
const passportJWT = require('./middlewares/passportJWT')();
const config = require('./config');
const rateLimit = require('express-rate-limit');

const app = express();

app.use(cors());

const limiter = rateLimit({
	windowMs: 10 * 1000, // 10 seconds
	max: 100 // limit each IP to 100 requests per windowMs
});

//  apply to all requests
app.use(limiter);

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoURI, {
	useNewUrlParser: true
});
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(passportJWT.initialize());

app.use('/api/post', postRoutes);
app.use('/api/auth', authRoutes);
app.use(errorHandler);

app.get('/api', (req, res) => res.send('Hello world'));

module.exports = app;
