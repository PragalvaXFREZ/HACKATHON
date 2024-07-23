function generateUsername(email) {
    let username = email.split('@')[0];
    return username;
}
let email = "hitman.frez@gmail.com";
let username = generateUsername(email);
console.log("username is: " + username); 
