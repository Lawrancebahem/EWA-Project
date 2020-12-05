export class Interest {

    constructor(private _name:string, private _id:number) {

    }

    public static trueCopy(interest: Interest): Interest {

        return Object.assign(new Interest("****",0), interest)
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }
}
