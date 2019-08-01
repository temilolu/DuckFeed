const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const errorHandler = require('./middlewares/errorHandler');
const postRoutes = require('./routes/post');
const app = express();

app.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://temitayo094:JJbgvWPGqs8cara7@cluster0-hwbmq.mongodb.net/duckfeed', {
	useNewUrlParser: true
});
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/post', postRoutes);
app.use(errorHandler);

app.get('/', (req, res) => res.send('Hello world'));
app.listen(3000, () => console.log('Server ready'));
