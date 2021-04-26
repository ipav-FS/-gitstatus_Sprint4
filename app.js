const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

const publicPath = path.resolve(__dirname, './public') ;
const puerto= process.env.PORT;

app.use(express.static(publicPath));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(methodOverride('_method'));

const homeRouter = require('./routes/homeRouter');
const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');

app.use('/', homeRouter);

app.use('/', userRouter);

app.use('/products', productRouter);






app.listen(puerto || 3000, function() {
    console.log("Servidor corriendo en el puerto 3000");
});
