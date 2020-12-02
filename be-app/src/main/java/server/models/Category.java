package server.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import server.repositories.Identifiable;

import javax.persistence.*;
import java.util.List;

@Entity
//@Table(name = "Category")
@NamedQueries({
        @NamedQuery(
                name = "findAllReactions",
                query = "select r from Reaction r"
        ),

        @NamedQuery(
                name = "findActivityById",
                query = "select a from Activity a where a.idActivity = :id"
        )
})
public class Category implements Identifiable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private long idCategory;
    @Column
    private String name;
    @Column(name = "categoryImage", columnDefinition = "text")
    private String image;

    @ManyToMany(mappedBy = "categories", fetch = FetchType.EAGER)
    List<Activity> activities;

    public Category(long idCategory, String name, String image) {
        this.idCategory = idCategory;
        this.name = name;
        this.image = image;
    }

    public Category() {

    }


    /**
     * Getters and Setters
     * @return Getters and Setters
     */
    public long getIdCategory() {
        return idCategory;
    }

    public void setIdCategory(long idCategory) {
        this.idCategory = idCategory;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    @Override
    public long getId() {
        return 0;
    }

    @Override
    public void setId(long id) {

    }
}
