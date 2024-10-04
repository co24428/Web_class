class User {
    constructor(email, password, firstName, lastName, birthday){
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
    }
}
const ian = new User('ian@gmail.com', 
                        'pwd', 
                        'ian', 
                        'kim', 
                        new Date('2000/03/14'));

console.log(ian);
// string to JSON
const userJson = JSON.stringify(ian);
console.log(userJson);
console.log(typeof(userJson)); // 'string'
// both are not work... JSON is just 'string'
// console.log(userJson['email']);
// console.log(userJson.email);

// JSON to string
console.log(JSON.parse(userJson));

// JSON has only two function!!
// string to JSON: stringify(object)
// JSON to string: parse(json string)