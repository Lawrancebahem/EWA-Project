package server.models;

import server.repositories.Identifiable;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "\"interest\"")
//@SqlResultSetMapping(name = "interestId",
//        entities = {
//                @EntityResult(entityClass = Interest.class, fields = {
//                        @FieldResult(name = "interestId", column = "INTEREST_ID"),
//                })}
//)
//
@NamedNativeQueries({

        @NamedNativeQuery(
                name = "GetUserInterests",
                query = "SELECT ui.INTEREST_ID  FROM USER_INTEREST ui WHERE ui.id =:userId"
        )
})
public class Interest implements Identifiable {

    @Id
    @GeneratedValue
    private long interestId;
    private String name;
    
    @ManyToMany(mappedBy = "interests", fetch = FetchType.EAGER)
    List<User> users;

    public Interest() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> userUSES) {
        this.users = userUSES;
    }

    @Override
    public long getId() {
        return this.interestId;
    }

    @Override
    public void setId(long id) {
        this.interestId = id;
    }
}
