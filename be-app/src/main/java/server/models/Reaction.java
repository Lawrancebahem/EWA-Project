package server.models;

import server.repositories.Identifiable;

import javax.persistence.*;

@Entity
@Table
public class Reaction implements Identifiable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private long idReaction;
    @Column(name = "message", columnDefinition = "text")
    private String message;

    @ManyToOne(fetch = FetchType.LAZY)
    private User user;


    public Reaction(long idReaction, String message) {
        this.idReaction = idReaction;
        this.message = message;
    }

    public Reaction() {

    }

    @Override
    public long getId() {
        return 0;
    }

    @Override
    public void setId(long id) {

    }

    /**
     * Getters and Setters
     * @return Getters and Setters
     */

    public long getIdReaction() {
        return idReaction;
    }

    public void setIdReaction(long idReaction) {
        this.idReaction = idReaction;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
