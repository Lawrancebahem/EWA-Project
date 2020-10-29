/**
 * User class that holds the informations of a user
 */
import {Gender} from "./gender";


export class User {

    constructor(private _firstName, private _lastName: number,
                private _birthDate: Date, private _gender: Gender,
                private _profilePicture: string, email: string,
                private _password,
                private _interests: any[]) {
    }


    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName(): number {
        return this._lastName;
    }

    set lastName(value: number) {
        this._lastName = value;
    }

    get birthDate(): Date {
        return this._birthDate;
    }

    set birthDate(value: Date) {
        this._birthDate = value;
    }

    get gender(): Gender {
        return this._gender;
    }

    set gender(value: Gender) {
        this._gender = value;
    }

    get profilePicture(): string {
        return this._profilePicture;
    }

    set profilePicture(value: string) {
        this._profilePicture = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }

    get interests(): string[] {
        return this._interests;
    }

    set interests(value: string[]) {
        this._interests = value;
    }

}
