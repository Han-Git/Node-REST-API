var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/lol-shop');

var Product = require('./model/product.js');
var WishList = require('./model/wishList.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/product', function (request, response) {
    Product.find({}, function (err, resultProducts) {
        if (err) {
            response.status(500).send('Could not find product.');
        } else {
            response.send(resultProducts);
        }
    });
});

app.post('/product', function (request, response) {
    var product = new Product();
    product.title = request.body.title;
    product.price = request.body.price;
    product.save(function (err, savedProduct) {
        if (err) {
            response.status(500).send('Could not save product.');
        } else {
            response.send(savedProduct);
        }
    });
});

app.get('/wishlist', function (request, response) {
    WishList.find({}, function (err, resultWishLists) {
        if (err) {
            response.status(500).send({
                error: 'Could not get wishlists'
            });
        } else {
            response.send(resultWishLists);
        }
    });
});

app.post('/wishlist', function (request, response) {
    var newWishList = new WishList();
    newWishList.title = request.body.title;
    newWishList.save(function (err, savedWishList) {
        if (err) {
            response.status(500).send({
                error: 'Could not add item to wishlist'
            });
        } else {
            response.send(savedWishList);
        }
    });
});

app.put('/wishlist/product', function (request, response) {
    var targetWishList;
    Product.findOne({
        "_id": request.body.productId
    }, function (err, resultProduct) {
        if (err) {
            response.status(500).send({
                error: 'Cound not get your Product'
            });
        } else {
            WishList.findOne({
                "_id": request.body.wishListId
            }, function (err, resultWishList) {
                if (err) {
                    response.status(500).send({
                        error: 'Cound not get your wish list'
                    });
                } else {
                    WishList.update({
                        _id: resultWishList._id
                    }, {
                        $addToSet: {
                            products: resultProduct._id
                        }
                    }, function (err, wishList) {
                        if (err) {
                            response.status(500).send({
                                error: 'Could not add item to wish list'
                            });
                        } else {
                            WishList.find({}, function (err, totalList) {
                                if (err) {
                                    response.status(500).send({
                                        error: 'Cound not get your wish list'
                                    });
                                } else {
                                    response.send(totalList);
                                }
                            });
                        }
                    });
                }
            });
        }
    });
});

app.listen(3000, function () {
    console.log('LOL shop api is running on port 3000')
});
