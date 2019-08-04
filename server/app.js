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

const app = express();
const port = process.env.PORT;

app.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoURI, {
	useNewUrlParser: true
});
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(passportJWT.initialize());

app.use('/api/post', passportJWT.authenticate(), postRoutes);
app.use('/api/auth', authRoutes);
app.use(errorHandler);

app.get('/api', (req, res) => res.send('Hello world'));
app.listen(port, () => console.log('Server ready'));
