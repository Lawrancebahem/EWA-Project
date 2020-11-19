package server.models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.List;

@Entity
public class Interest {

    @Id
    private String name;

    @ManyToMany(mappedBy = "interests")
    List<User> users;

    public Interest() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
