var request = require('request');

var routes = {
    init: function(app) {

        // set up landing page
        app.get('/', function (req, res, next) {

            request('http://127.0.0.1:3000/api/products', function(error, response, body) {
                res.render('index', {
                    metadata: {
                        title: 'TON Content Tech Test'
                    },
                    title: 'TON Content Tech Test',
                    layout: 'layouts/default',
                    template: 'index',
                    products: body
                });
            });
        });

    }
};



module.exports = {
    routes: routes
};
