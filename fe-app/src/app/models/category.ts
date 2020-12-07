export class Category {
    private _id;
    private _image;
    private _categorytitle;
    private _description;
    private _location;
    private _date;

    public static trueCopy(category: Category): Category {
        return Object.assign(new Category(), category);
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get image() {
        return this._image;
    }

    set image(value) {
        this._image = value;
    }

    get categorytitle() {
        return this._categorytitle;
    }

    set categorytitle(value) {
        this._categorytitle = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get location() {
        return this._location;
    }

    set location(value) {
        this._location = value;
    }

    get date() {
        return this._date;
    }

    set date(value) {
        this._date = value;
    }
}
