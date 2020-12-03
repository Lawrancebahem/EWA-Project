
export class Activity {

    private _idActivity;
    private _title;
    private _description;
    private _image;
    private _location;

    public static trueCopy(activity: Activity): Activity {
        return Object.assign(new Activity(), activity)
    }


    get idActivity() {
        return this._idActivity;
    }

    set idActivity(value) {
        this._idActivity = value;
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
}
