GET all products:
http://localhost:3000/products

------------------------
create a product: POST to http://localhost:3000/products
{
	"name": "Ferrari",
	"price": 2000,
	"country": "Italy"
}

------------------------
GET product by ID:
http://localhost:3000/products/ID

------------------------
DELETE product by ID:
http://localhost:3000/products/ID

------------------------
PATCH product by ID:
http://localhost:3000/products/ID
{
	"name": "Ferrari patched",
	"price": 100000,
	"country": "Italy patched"
}