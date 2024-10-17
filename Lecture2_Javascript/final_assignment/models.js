
class User {
    constructor(email, password, firstName, lastName, birthday, isAdmin){
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.isAdmin = isAdmin;
    }
}

class Flat {
    constructor(city, streetName, streetNumber, floorLevel, squareMetreSize, hasAirConditioning, 
                rentalPricePerMonth, leaseDurationInMonth, petsAllowed, imgLink, DateAvailable){
        this.city = city;
        this.streetName = streetName;
        this.streetNumber = streetNumber;
        this.floorLevel = floorLevel;
        this.squareMetreSize = squareMetreSize;
        this.hasAirConditioning = hasAirConditioning;
        this.rentalPricePerMonth = rentalPricePerMonth;
        this.leaseDurationInMonth = leaseDurationInMonth;
        this.petsAllowed = petsAllowed;
        this.imgLink = imgLink;
        this.DateAvailable = DateAvailable;
    }
    makeStringKey(){
        return `${this.city}_${this.streetName}_${this.streetNumber}_${this.floorLevel}`
    }
}
const flat1 = new Flat('Vancouver', 'Granville', 2323, 4, 33, true, 1200, 12, false, './img/flat1.png', new Date(2024,10,1));
const flat2 = new Flat('Vancouver', 'Howe', 223, 13, 53, true, 1800, 17, false, './img/flat2.png', new Date(2024,11,1));
const flat3 = new Flat('Vancouver', 'Howe', 213, 1, 83, true, 1800, 5, true, './img/flat3.png', new Date(2024,11,15));
const flat4 = new Flat('Toronto', 'this', 273, 4, 75, true, 2300, 2, false, './img/flat1.png', new Date(2024,10,1));
const flat5 = new Flat('Toronto', 'that', 273, 19, 51, true, 2000, 2, false, './img/flat2.png', new Date(2024,10,1));
localStorage.setItem(flat1.makeStringKey(), JSON.stringify(flat1));
localStorage.setItem(flat2.makeStringKey(), JSON.stringify(flat2));
localStorage.setItem(flat3.makeStringKey(), JSON.stringify(flat3));
localStorage.setItem(flat4.makeStringKey(), JSON.stringify(flat4));
localStorage.setItem(flat5.makeStringKey(), JSON.stringify(flat5));



class Validator {
    isNotEmpty(v){
        const c1 = (v != null);
        const c2 = (v != undefined);
        const c3 = (v != '');
        return (c1 && c2 && c3);

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
        if (validRegex.test(input)) {
            return true;
        } else {
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
