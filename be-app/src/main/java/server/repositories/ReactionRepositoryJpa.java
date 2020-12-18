package server.repositories;

import org.springframework.stereotype.Service;
import server.models.Activity;
import server.models.Reaction;

import javax.persistence.Query;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import java.util.List;

@Service("reactionRepositoryJpa")
@Transactional
public class ReactionRepositoryJpa extends AbstractEntityRepositoryJpa<Reaction> {

    public ReactionRepositoryJpa() {
        super(Reaction.class);
    }


    public List<Object[]> findReactionForAnActivity(long idActivity){
        System.out.println("The id activity is " + idActivity);
        return this.em.createQuery("select r.idReaction," +
                " r.message," +
                " r.activity.idActivity," +
                " u.firstName from Reaction r " +
                "JOIN User u  ON r.user.id = u.id WHERE r.activity.idActivity = ?1")
                .setParameter(1, idActivity)
                .getResultList();
    }
}
