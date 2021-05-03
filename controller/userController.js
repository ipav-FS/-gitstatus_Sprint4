
const jsonDB = require('../model/jsonDatabase');

const productModel = jsonDB('users');
let userController = {
    register: (req, res) => {
        res.render('register');
    },

    login: (req, res) => {
        res.render('login')
    },

    find: (req, res) => {
        const users = req.body;
        productModel.find(users);
        res.redirect('/');
    },

    store: (req, res) => {
        console.log('entre al storess')
        console.log(req.body)


        const users = req.body;
        productModel.create(users);
        res.redirect('/')
    }

}

module.exports = userController