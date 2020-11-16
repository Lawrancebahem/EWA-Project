export class Category {
    id;
    image;
    categorytitle;
    description;
    location;
    date;

    public static trueCopy(category: Category): Category {
        return Object.assign(new Category(), category);
    }

}
