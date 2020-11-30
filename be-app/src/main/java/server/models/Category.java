package server.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "Category")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private long idCategory;
    @Column
    private String name;
    @Column
    private String image;

    // TODO
//    @JsonIgnore
//    @ManyToMany
//    @JoinTable(
//            name = "",
//            joinColumns = @JoinColumn(name = ""),
//            inverseJoinColumns = @JoinColumn(name = "")
//    )

    public Category(long idCategory, String name, String image) {
        this.idCategory = idCategory;
        this.name = name;
        this.image = image;
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
}
