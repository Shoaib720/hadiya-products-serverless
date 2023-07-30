export class Product{
    id: string;
    name: string;
    price: number;
    currency: string;
    imageURL: string;

    constructor(id: string, name: string, price: number, currency: string, imageURL: string){
        this.name = name;
        this.price = price;
        this.currency = currency;
        this.imageURL = imageURL;
        this.id = id;
    }

}

export class Pagination{
    data: Product[];
    lastEvaluatedKey: string | null;
    constructor(data: Product[], lastEvaluatedKey: string | null) {
        this.data = data;
        this.lastEvaluatedKey = lastEvaluatedKey;
    }
}

export class APIResponse {
    status: string;
    data: {
        data: Product[],
        lastEvaluatedKey: { id: string } | null
    };
    error: string | null;

    constructor (
        status: string,
        data: {
            data: Product[],
            lastEvaluatedKey: { id: string } | null
        },
        error: string | null
    ) {
        this.status = status;
        this.data = data;
        this.error = error;
    }
}