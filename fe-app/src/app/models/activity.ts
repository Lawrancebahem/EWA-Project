
export class Activity {

    private _id;
    private _title;
    private _description;
    private _image;
    private _location;
    private _show;

    public static trueCopy(activity: Activity): Activity {
        // @ts-ignore
        return Object.assign(new Activity(0,"","","","",true), activity)
    }


    constructor(id, title, description, image, location, show) {
        this._id = id;
        this._title = title;
        this._description = description;
        this._image = image;
        this._location = location;
        this._show = show;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get image() {
        return this._image;
    }

    set image(value) {
        this._image = value;
    }

    get location() {
        return this._location;
    }

    set location(value) {
        this._location = value;
    }

    get show() {
        return this._show;
    }

    set show(value) {
        this._show = value;
    }
}
