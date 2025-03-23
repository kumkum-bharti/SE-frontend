class ProductResponse {
    constructor(title, price, rating, url, imageUrl) {
        this.title = title; // Product title
        this.price = price; // Product price
        this.rating = rating; // Product rating
        this.url = url; // Product URL
        this.imageUrl = imageUrl; // Product photo URL
    }

    static fromJson(json) {
        return new ProductResponse(
            json.title,
            json.price,
            json.rating,
            json.url,
            json.imageUrl
        );
    }
}

module.exports = ProductResponse;