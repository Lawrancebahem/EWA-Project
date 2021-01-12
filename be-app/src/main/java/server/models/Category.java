package server.models;

import server.repositories.Identifiable;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "\"category\"")
@NamedQueries({
        @NamedQuery(
                name = "findCategoryById",
                query = "select a from Category a where a.idCategory = :id"
        )
})
public class Category implements Identifiable {

    @Id
    @GeneratedValue
    private long idCategory;
    private String name;
    @Column(name = "categoryImage", columnDefinition = "text")
    private String image;
    private String description;

    @ManyToMany(mappedBy = "categories", fetch = FetchType.EAGER)
    List<Activity> activities;

    public Category(long idCategory, String name, String image, String description) {
        this.idCategory = idCategory;
        this.name = name;
        this.image = image;
        this.description = description;
    }

    public Category() {

    }


    /**
     * Getters and Setters
     *
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

    public String getDescription() {
        return description;
    }

    public List<Activity> getActivities() {
        return activities;
    }

    public void setActivities(List<Activity> activities) {
        this.activities = activities;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public long getId() {
        return this.idCategory;
    }

    @Override
    public void setId(long id) {
        this.idCategory = id;
    }

    @Override
    public boolean equals(Object o) {
        Category category = (Category) o;
        return idCategory == category.idCategory && Objects.equals(name, category.name) && Objects.equals(image, category.image) && Objects.equals(description, category.description) && Objects.equals(activities, category.activities);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idCategory, name, image, description, activities);
    }
}
