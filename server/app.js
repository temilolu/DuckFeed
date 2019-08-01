const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const postRoutes = require('./routes/post');
const authRoutes = require('./routes/auth');
const errorHandler = require('./middlewares/errorHandler');
const passportJWT = require('./middlewares/passportJWT')();

const app = express();

app.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect(
	'mongodb+srv://temitayo094:CatmyBeF4wRuHqtZ@duckfeed-elegv.mongodb.net/duckfeed?retryWrites=true&w=majority',
	{
		useNewUrlParser: true
	}
);
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(passportJWT.initialize());

app.use('/api/post', passportJWT.authenticate(), postRoutes);
app.use('/api/auth', authRoutes);
app.use(errorHandler);

app.get('/', (req, res) => res.send('Hello world'));
app.listen(3000, () => console.log('Server ready'));
