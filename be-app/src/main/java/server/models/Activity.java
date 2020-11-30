package server.models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "Acitivity")
public class Activity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private long idActivity;
    @Column
    private String title;
    @Column
    private String description;
    @Column
    private String image;
    @Column
    private String location;



    public Activity(long idActivity, String title, String description, String image, String location) {
        this.idActivity = idActivity;
        this.title = title;
        this.description = description;
        this.image = image;
        this.location = location;
    }


    /**
     * Getters and Setters
     */
    public long getIdActivity() {
        return idActivity;
    }

    public void setIdActivity(long idActivity) {
        this.idActivity = idActivity;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
