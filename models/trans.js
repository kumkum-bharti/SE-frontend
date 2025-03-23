class Transport {
    constructor(transportId = "", type = "", provider = "", departure = "", arrival = "", price = 0, availability = 0) {
      this.transportId = transportId;
      this.type = type;
      this.provider = provider;
      this.departure = departure;
      this.arrival = arrival;
      this.price = price;
      this.availability = availability; 
    }
  
    toJSON() {
      return JSON.stringify({
        transportId: this.transportId,
        type: this.type,
        provider: this.provider,
        departure: this.departure,
        arrival: this.arrival,
        price: this.price,
        availability: this.availability
      });
    }
  }
  