export class Activity {
    id;
    image;
    activityTitle;
    categories;
    location;
    reactions;

    public static trueCopy(activity: Activity): Activity {
        return Object.assign(new Activity(), activity)
    }
}
