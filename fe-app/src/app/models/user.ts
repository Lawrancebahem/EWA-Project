/**
 * User class that holds the informations of a user
 */
import {Gender} from "./gender";
// @ts-ignore
import {Interest} from "./Interest";


export class User {

    constructor(private _id: number, private _firstName, private _lastName: string,
                private _birthDate: Date, private _gender: Gender,
                private _profilePicture: string, private _email: string,
                private _password,
                private _interests: number[], private _admin:boolean, private _blocked:boolean) {
    }

    static makeTrueCopy(user): User {
        // @ts-ignore
        return user != null ? Object.assign(new User(), user) : null;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }


    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
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


    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }


    get interests(): number[] {
        return this._interests;
    }

    set interests(value: number[]) {
        this._interests = value;
    }


    get admin(): boolean {
        return this._admin;
    }

    set admin(value: boolean) {
        this._admin = value;
    }


    get blocked(): boolean {
        return this._blocked;
    }

    set blocked(value: boolean) {
        this._blocked = value;
    }
}
