class Product {
    constructor(productId = "", name = "", category = "", price = 0, description = "", stock = 0, seller = "", imageUrl = "") {
      this.productId = productId;
      this.name = name;
      this.category = category; 
      this.price = price;
      this.description = description;
      this.stock = stock; 
      this.seller = seller; 
      this.imageUrl = imageUrl; 
    }
  
    toJSON() {
      return JSON.stringify({
        productId: this.productId,
        name: this.name,
        category: this.category,
        price: this.price,
        description: this.description,
        stock: this.stock,
        seller: this.seller,
        imageUrl: this.imageUrl
      });
    }
  }
  