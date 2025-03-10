class RegisterInteraction {
    constructor(firstName = '', lastName = '', email = '', password = '', gender = null) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.gender = gender;
    }

    toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            gender: this.gender
        };
    }
}

module.exports = RegisterInteraction;