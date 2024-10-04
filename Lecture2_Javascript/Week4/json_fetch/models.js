class User {
  constructor(email, password, firstName, lastName, birthdate, traveller) {
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthdate = birthdate;
    this.traveller = traveller;
  }
}
class Validation {
  // 1.a. all fields are required
  isNotEmpty(v) {
    const c1 = v != null;
    const c2 = v != undefined;
    return c1 && c2;
  }
  // 1.b. all fields are required
  areNotEmpty(...v) {
    for (const value of v) {
      if (!this.isNotEmpty(value)) return false;
    }
    return true;
  }
  // 2.a. fields have matching type
  isMatchingType(v, type) {
    if (type === "date") {
      return v instanceof Date;
    } else {
      return typeof v === type;
    }
  }
  // 2.b. fields have matching type
  areMatchingType(mapObj) {
    for (const [v, type] of mapObj) {
      if (!this.isMatchingType(v, type)) return false;
    }
    return true;
  }
}
let steve = new User(
  "steve@gmail.com",
  "pwd",
  "steve",
  "greystone",
  new Date("2000/15/04"),
  true
);
let validation = new Validation();
let areNotEmpty = validation.areNotEmpty(
  steve.email,
  steve.password,
  steve.firstName,
  steve.lastName,
  steve.birthdate,
  steve.traveller
);
console.log(areNotEmpty);
let areMatchingType = validation.areMatchingType(
  new Map([
    [steve.email, "string"],
    [steve.password, "string"],
    [steve.firstName, "string"],
    [steve.lastName, "string"],
    [steve.birthdate, "date"],
    [steve.traveller, "boolean"],
  ])
);
console.log(areMatchingType);
