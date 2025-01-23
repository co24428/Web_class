export class User {
    uid: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    birthDate: Date;
    isAdmin: boolean;
    favouriteFlats: string[];

    constructor(
        uid: string,
        email: string,
        password: string,
        firstName: string,
        lastName: string,
        birthDate: Date,
        isAdmin: boolean,
        favouriteFlats: string[] = []
    ) {
        this.uid = uid;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.isAdmin = isAdmin;
        this.favouriteFlats = favouriteFlats;
    }
}