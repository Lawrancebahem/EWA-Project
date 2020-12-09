export class Category {
    private _idCategory: number;
    private _name: string;
    private _image: string;
    private _description: string;

    public static trueCopy(category: Category): Category {
        return Object.assign(new Category(), category);
    }

    get idCategory(): number {
        return this._idCategory;
    }

    set idCategory(value: number) {
        this._idCategory = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get image(): string {
        return this._image;
    }

    set image(value: string) {
        this._image = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }
}
