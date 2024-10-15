
class User {
    constructor(email, password, firstName, lastName, birthday){
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
    }
}
class Flat {
    constructor(city, streetName, streetNumber, floorLevel, squareMetreSize, hasAirConditioning, 
                rentalPricePerMonth, leaseDurationInMonth, petsAllowed, DateAvailable){
        this.city = city;
        this.streetName = streetName;
        this.streetNumber = streetNumber;
        this.floorLevel = floorLevel;
        this.squareMetreSize = squareMetreSize;
        this.hasAirConditioning = hasAirConditioning;
        this.rentalPricePerMonth = rentalPricePerMonth;
        this.leaseDurationInMonth = leaseDurationInMonth;
        this.petsAllowed = petsAllowed;
        this.DateAvailable = DateAvailable;
    }
    makeStringId(){
        return `${this.streetName}_${this.streetNumber}_${this.floorLevel}`
    }
}
class Validator {
    isNotEmpty(v){
        const c1 = v != null;
        const c2 = v != undefined;
        return (c1 && c2);

    }
    areNotEmpty(...v){
        for(const value of v){
            if (!this.isNotEmpty(value)){
                return false;
            }
        }
        return true;
    }

    // for Object
    // ian.birthday instanceof Date -> return true
    // ian instanceof Date -> return false
    // ian instanceof User -> return true
    isMatchingType(v, type){
        if (type == 'date'){
            return v instanceof Date;
        } else {
            return (typeof(v) === type);
        }
    }
    areMatchingType(mapObj){
        for(const [v,type] of mapObj){
            if (!this.isMatchingType(v, type)){
                return false;
            }
        }
        return true;
    }
    validateEmail(input) {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (input.match(validRegex)) {
            console.log("Valid email address!");
            // document.form1.text1.focus();
            return true;
        } else {
            console.log("Invalid email address!");
            // document.form1.text1.focus();
            return false;
        }
    }
    checkLength(v, len){
        if (v.length <len) {
            return false;
        } else {
            return true;
        }
    }
    checkAge(birthday, min, max){
        const today = new Date();
        const age = today.getFullYear() - birthday.getFullYear();
        if ((age <= min) || (age >= max)){
            return false;
        } else {
            return true;
        }
    }
    checkPassword(password){
        // condition 1) Letters
        // condition 2) Numbers
        // condition 3) character that is neither a letter nor a number
        const c1 = /\d+/.test(password);
        const c2 = /[a-zA-Z]/.test(password);
        const c3 = /[?=.*[!@#$%^&*]/.test(password);
        return c1 && c2 && c3;
    }
}

// const ian = new User('ian@gmail.com', 'pwd', 'ian', 'kim', null);
const ian = new User('ian@gmail.com', 
                        'pwdpwdpwd', 
                        'ian', 
                        'kim', 
                        new Date('2000/03/14'));
const wrongUser1 = new User('iangmail', 
                        'pwd', 
                        null, 
                        12.1, 
                        new Date('2010/03/14'));
const wrongUser2 = new User('iangmail', 
                        'pwd', 
                        'i', 
                        12.1, 
                        new Date('2010/03/14'));
const validation = new Validator();

console.log('--- areNotEmpty');
const result11 = validation.areNotEmpty(ian.email, 
                                        ian.password, 
                                        ian.firstName, 
                                        ian.lastName, 
                                        ian.birthday);
console.log(result11);
const result12 = validation.areNotEmpty(wrongUser1.email, 
                                        wrongUser1.password, 
                                        wrongUser1.firstName, 
                                        wrongUser1.lastName, 
                                        wrongUser1.birthday);
console.log(result12);
console.log('--- areMatchingType');
const result21 = validation.areMatchingType(
    new Map([
        [ian.email,'string'], 
        [ian.password,'string'], 
        [ian.firstName,'string'], 
        [ian.lastName,'string'], 
        [ian.birthday,'date']
    ])
);
console.log(result21);
const result22 = validation.areMatchingType(
    new Map([
        [wrongUser1.email,'string'], 
        [wrongUser1.password,'string'], 
        [wrongUser1.firstName,'string'], 
        [wrongUser1.lastName,'string'], 
        [wrongUser1.birthday,'date']
    ])
);
console.log(result22);
console.log('--- checkLength');

const result31 = validation.checkLength(ian.firstName,2);
const result32 = validation.checkLength(ian.lastName,2);
const result33 = validation.checkLength(ian.password,6);
console.log(result31);
console.log(result32);
console.log(result33);
const result34 = validation.checkLength(wrongUser2.firstName,2);
const result35 = validation.checkLength(wrongUser2.lastName,2);
const result36 = validation.checkLength(wrongUser2.password,6);
console.log(result34);
console.log(result35);
console.log(result36);

console.log('--- checkAge');
const result5 = validation.checkAge(ian.birthday, 18, 120);
console.log(result5);
const result6 = validation.checkAge(wrongUser1.birthday, 18, 120);
console.log(result6);
console.log('--- validateEmail');

validation.validateEmail(ian.email);
validation.validateEmail(wrongUser1.email);