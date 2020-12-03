package server.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import server.repositories.Identifiable;

import javax.persistence.*;
import java.util.List;

@Entity
@NamedQueries({
        @NamedQuery(
                name = "findAllActivities",
                query = "select a from Activity a"
        ),

        @NamedQuery(
                name = "findActivityById",
                query = "select a from Activity a where a.idActivity = :id"
        )
})
public class Activity implements Identifiable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long idActivity;
    private String title;
    private String description;
    @Column(name = "activityimage", columnDefinition = "text")
    private String image;
    @Column
    private String location;

    @JsonIgnore
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "activity_category",
            joinColumns = @JoinColumn(name = "idctivity"),
            inverseJoinColumns = @JoinColumn(name = "idcategory")
    )
    private List<Category> categories;

//    @OneToMany(
//            mappedBy = "Activity",
//            cascade = CascadeType.ALL,
//            orphanRemoval = true
//    )
//    private List<Reaction> reactions;


    public Activity(long idActivity, String title, String description, String image, String location) {
        this.idActivity = idActivity;
        this.title = title;
        this.description = description;
        this.image = image;
        this.location = location;
    }

    public Activity() {

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

    @Override
    public long getId() {
        return 0;
    }

    @Override
    public void setId(long id) {

    }
}
