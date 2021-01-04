package server.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import server.repositories.Identifiable;

import javax.persistence.*;

@Entity
@NamedQueries({
        @NamedQuery(
                name = "findAllReactions",
                query = "select r from Reaction r"
        ),
        @NamedQuery(
                name = "findAllReactionsForAnActivity",
                query = "select r.idReaction, r.activity, r.message, r.user.firstName  from Reaction r where r.activity =:activityId"
        ),
})


//Mapping the attributes
@SqlResultSetMapping(name = "reactionsInfo",
        entities = {
                @EntityResult(entityClass = Object.class, fields = {
                        @FieldResult(name = "idreaction", column = "idreaction"),
                        @FieldResult(name = "message", column = "message"),
                        @FieldResult(name = "activity_idactivity", column = "activity_idactivity"),
                        @FieldResult(name = "firstName", column = "firstname"),
                })}
)

//@NamedNativeQueries({
//        @NamedNativeQuery(
//                name = "findAllReactionsForAnActivity",
//                query = "select r.idReaction, r.activity, r.message, r.user.firstName  from Reaction r where r.activity =:activityId",
//                resultSetMapping = "reactionsInfo"
//        )
//})

public class Reaction implements Identifiable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private long idReaction;
    @Column(name = "message", columnDefinition = "text")
    private String message;

//    @JsonIgnore
    //    @JsonIgnoreProperties("reactions")
    @ManyToOne(fetch = FetchType.EAGER)
    private User user;

    @JsonIgnore
    //    @JsonIgnoreProperties("reactions")
    @ManyToOne(fetch = FetchType.LAZY)
    private Activity activity;


    public Reaction() {

    }

    public Reaction(String message, User user, Activity activity) {

        this.message = message;
        this.user = user;
        this.activity = activity;
    }

    @Override
    public long getId() {
       return this.idReaction;
    }

    @Override
    public void setId(long id) {
        this.idReaction = id;
    }

    /**
     * Getters and Setters
     *
     * @return Getters and Setters
     */


    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Activity getActivity() {
        return activity;
    }

    public void setActivity(Activity activity) {
        this.activity = activity;
    }
}
