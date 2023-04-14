// ** Create a Username and Password
// Write a program that creates two functions (createUsername() and createPassword()) that do the following):
// Prompts the user to create a username using prompt() and stores it in the already declared variable called username.
// Prompts the user to create a password using prompt() and stores it in the already declared variable called password.

// Username criteria:
// Must be at least 6 characters long

//Password criteria:
// Must be at least 8 characters long


let username;
let password;

function createUsername() {
    username = prompt("Please enter a username");
    
    if (username.length < 6) {
        alert("Username must be at least 6 characters long");
        createUsername();
    }
    console.log(username);
    return username;
    
}

createUsername();


function createPassword() {
    password = prompt("Please enter a password");
    if(password.length < 8) {
        alert("Password must be at least 8 characters long");
        createPassword();
    }
    console.log(password)
    return password;
}

createPassword()

// ** Login 
// Write a program that does the following:
// Prompts the user to enter their username using prompt() function and stores it in a variable called validatedUsername.
// Prompts the user to enter their password using prompt() function and stores it in a variable called validatedPassword.
// If the username and password match the username and password created in the first program, alert the user “Login Successful”.
// If the username and password do not match, alert the user “Login Failed”.

let validatedUsername;
let validatedPassword;

function login() {
    validatedUsername = prompt("Please enter your username");
    validatedPassword = prompt("Please enter your password");

    if (validatedUsername === username && validatedPassword === password) {
        alert("Login Successful");
    } else {
        alert("Login Failed");
    }
}

login()

// ** Greet the User with their name
// Write a program that does the following:
// Using the username variable from the first program, alert the user “Welcome back, username”.
// This should only happen if the username and password match the username and password created in the first program.






