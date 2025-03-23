class user{
    constructor (name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
    }

    data(){
        return `${this.name},${this.email},${this.password}`;

    }
}
class authResponse {
    constructor(jwt) {
        this.jwt = jwt;
    }
}