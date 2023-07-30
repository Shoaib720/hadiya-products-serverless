const { ProductService } = require('../services/product.service');
const { Logger } = require('../utils/logger');
const { sendAPIResponse } = require('../utils/api-responses');
const { StatusCodes } = require('../utils/status-code.js')

const ProductAPI = async (app) => {

    const productService = new ProductService();

    app.post('/api/v1/products', async (req, res, next) => {
        try{
            const productData = {
                name: req.body.name,
                price: req.body.price,
                currency: req.body.currency,
                imageURL: req.body.imageURL
            }
            await productService.AddProduct(productData);
            sendAPIResponse(res, StatusCodes.CREATED);
        }
        catch(err) {
            next(err);
        }
    });

    app.get('/api/v1/products', async (req, res, next) => {
        try{
            if(req.query.id){
                const {Item} = await productService.GetProductById(req.query.id);
                const Items = [];
                if (Item)
                    Items.push(Item)
                sendAPIResponse(res, StatusCodes.OK, {data: Items, lastEvaluatedKey: null});
            }
            else{
                const {limit, startKey} = req.query;
                const {Items, LastEvaluatedKey} = await productService.GetProducts({limit, startKey});
                sendAPIResponse(res, StatusCodes.OK, {data: Items, lastEvaluatedKey: LastEvaluatedKey || null});
            }
        }
        catch(err){
            next(err);
        }
    });

    app.put('/api/v1/products', async (req, res, next) => {
        try{
            const data = {
                id: req.query.id,
                name: req.body.name,
                price: req.body.price,
                currency: req.body.currency,
                imageURL: req.body.imageURL
            }
            await productService.UpdateProduct(data);
            sendAPIResponse(res, StatusCodes.OK);
        }
        catch(err){
            next(err);
        }
    })

    app.delete('/api/v1/products', async (req, res, next) => {
        try{
            await productService.DeleteProduct(req.query.id);
            sendAPIResponse(res, StatusCodes.OK);
        }
        catch(err){
            next(err);
        }
    })

    app.use('*', (req, res, next) => {
        sendAPIResponse(res, StatusCodes.NOT_FOUND);
    })

}

module.exports = {
    ProductAPI
}