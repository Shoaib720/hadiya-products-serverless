import { APIResponse, Product } from "../models/product.model";

export function GetProductsAPIResponseMapper(responseData: APIResponse): Product[] | null{
    if (responseData.data)
        return responseData.data.data;
    return null;
}

export function GetProductAPIResponseMapper(responseData: APIResponse): Product | null{
    if (responseData.data)
        return responseData.data.data[0] || null;
    return null;
}