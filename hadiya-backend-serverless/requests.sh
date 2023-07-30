# GET Products
curl --location 'https://products-api.almikhdaam.co.in/api/v1/products'

# Get Product by Id
curl --location 'https://products-api.almikhdaam.co.in/api/v1/products?id=6b301d50-d439-4bc3-9575-0bfe93724a3e'

# Add product
curl --location 'https://products-api.almikhdaam.co.in/api/v1/products' \
--header 'Content-Type: application/json' \
--data '{
    "name": "BoAt New Headphones 255+",
    "price": 4499.00,
    "currency": "INR",
    "imageURL": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/35ca6350-d6f3-4bc2-a742-01b2c88d80c4_700x.png?v=1673005509"
}'

# Update product
curl --location --request PUT 'https://products-api.almikhdaam.co.in/api/v1/products?id=6b301d50-d439-4bc3-9575-0bfe93724a3e' \
--header 'Content-Type: application/json' \
--data '{
                "currency": "INR",
                "imageURL": "https://m.media-amazon.com/images/I/514FlU4YKBS._SL1080_.jpg",
                "id": "6b301d50-d439-4bc3-9575-0bfe93724a3e",
                "price": 71599,
                "name": "Dell Inspiron 7415 AMD R5 5500U 14 inches(35cm) FHD Touch Display 2 in 1 Business Laptop (8GB/512GB SSD/Intel Integrated Graphics/Win 10 + MSO/Backlit KB + FPR + Active Pen /Pebble Metal Color, 1.5kg)"
            }'

# Delete product
curl --location --request DELETE 'https://products-api.almikhdaam.co.in/api/v1/products?id=c961f25c-e2a6-49d3-bacb-63262febce40'