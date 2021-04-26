let productos = require('../data/productsData');

let homeController = {
    show: (req, res) => {
        const products = [... productos]

        res.render('home', { products});
    }
}

module.exports = homeController;