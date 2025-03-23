class Hotel {
    constructor(hotelId = "", name = "", location = "", roomsAvailable = 0, pricePerNight = 0, amenities = []) {
      this.hotelId = hotelId;
      this.name = name;
      this.location = location;
      this.roomsAvailable = roomsAvailable;
      this.pricePerNight = pricePerNight;
      this.amenities = amenities; 
    }
  
    toJSON() {
      return JSON.stringify({
        hotelId: this.hotelId,
        name: this.name,
        location: this.location,
        roomsAvailable: this.roomsAvailable,
        pricePerNight: this.pricePerNight,
        amenities: this.amenities
      });
    }
  }
  