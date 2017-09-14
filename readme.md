# Node REST API

REST API using Node.js and Express.js framework with Mongoose.js for working with MongoDB.

## Running project

You need to have installed Node.js and MongoDB

### Install dependencies

To install dependencies enter project folder and run following command:
```
npm install
```

### Run server

To run server execute:
```
mongod
node server.js
```

### Make Requests
Creating product:
sending body with JSON i.e) {"title": "YOUR_TITLE", "price": 12.34}
```
POST http://localhost:3000/api/products
```

Creating your wishlist:
sending body with JSON {"title": "YOUR_TITLE"}
```
POST http://localhost:3000/api/wishlists
```

Updating your product:
sending body with JSON i.e) {"title": "YOUR_TITLE", "price": 12.34}
```
PUT http://localhost:3000/api/products/:product_id
```

Updating your wishlist:
sending body with JSON i.e) {"title": "YOUR_TITLE"}
```
PUT http://localhost:3000/api/wishlists/:wishlist_id
```

Adding a product to wishlist:
```
PUT http://localhost:3000/api/wishlists/:wishlist_id/products/:product_id
```

Deleting your product:
```
DELETE http://localhost:3000/api/products/:product_id
```

Deleting your wishlist:

```
DELETE http://localhost:3000/api/wishlists/:wishlist_id
```

Deleting a product from wishlist:

```
DELETE http://localhost:3000/api/wishlists/:wishlist_id/products/:product_id
```

Deleting all products from wishlist:

```
DELETE http://localhost:3000/api/wishlists/:wishlist_id/products
```

Getting your data
```
GET http://localhost:3000/api/products
GET http://localhost:3000/api/products/:product_id
GET http://localhost:3000/api/wishlists
GET http://localhost:3000/api/wishlists/:wishlist_id
```

## Modules used

* [express](https://www.npmjs.com/package/express)
* [mongoose](https://www.npmjs.com/package/mongoose)
* [body-parser](https://www.npmjs.com/package/body-parser)
* [nodemon](https://www.npmjs.com/package/nodemon)

## Author

This example was created by [Han Jung](http://mhanjung.github.io).
