class Login {
    constructor(email = "", password = "") {
      this.email = email;
      this.password = password;
    }
  

  
    toJSON() {
      return JSON.stringify({
        email: this.email,
        password: this.password
      });
    }
  }
  
  const userLogin = new Login("test@example.com", "mypassword");
  console.log("Valid login credentials:", userLogin.toJSON());
 