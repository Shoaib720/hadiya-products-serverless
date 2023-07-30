const { ProductRepository } = require('../repositories/product.repository');
const { BadRequestError } = require('../utils/error.js');
const { DDB_PRODUCTS_TABLE_NAME, AWS_REGION } = require('../config/index')

class ProductService {

    constructor() {
        this.repository = new ProductRepository(DDB_PRODUCTS_TABLE_NAME, AWS_REGION);
    }

    async AddProduct (productData) {
        if(!productData){
            throw new BadRequestError('Request missing product data!')
        }
        const { name, price, currency, imageURL } = productData;
        if(!name || !price || !currency || !imageURL){
            throw new BadRequestError('Required fields in product data missing!');
        }
        await this.repository.SaveItem({
            name,
            price,
            currency,
            imageURL
        });
    }

    async GetProducts (pagination) {
        const {Items, LastEvaluatedKey} = await this.repository.GetItems(pagination);
        return {Items, LastEvaluatedKey}
    }

    async GetProductById (itemId) {
        if(!itemId){
            throw new BadRequestError('Request is missing product ID!');
        }
        const {Item} = await this.repository.GetItemById(itemId);
        return {Item}
    }

    async UpdateProduct(productData){
        if(!productData){
            throw new BadRequestError('Request missing product data!')
        }
        await this.repository.UpdateItemById(productData.id, productData);
    }

    async DeleteProduct(itemId){
        if(!itemId){
            throw new BadRequestError('Request is missing product ID!');
        }
        await this.repository.DeleteItemById(itemId);
    }

}

module.exports = {
    ProductService
}