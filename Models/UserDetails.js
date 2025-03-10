class UserDetails {
    constructor({ 
        _id, 
        firstName, 
        lastName, 
        email, 
        password, 
        createdAt, 
        partitionKey, 
        publicUsername, 
        userId, 
        role , 
        gender,
        favoriteProducts = [] // Default to an empty array
    }) {
        this._id = _id;
        this.firstName = firstName || '';
        this.lastName = lastName || '';
        this.email = email || '';
        this.password = password || '';
        this.createdAt = createdAt || new Date();
        this.partitionKey = partitionKey;
        this.publicUsername = publicUsername || '';
        this.userId = userId || '';
        this.role = role;
        this.gender = gender || '';
        this.favoriteProducts = favoriteProducts;
    }
}

module.exports = UserDetails;