package server.repositories;

import org.springframework.stereotype.Service;
import server.models.Activity;
import server.models.Reaction;

import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import java.util.List;

@Service("reactionRepositoryJpa")
@Transactional
public class ReactionRepositoryJpa extends AbstractEntityRepositoryJpa<Reaction> {

    public ReactionRepositoryJpa() {
        super(Reaction.class);
    }

    @Override
    public List<Reaction> findByQuery(String queryName, Object... params) {
        TypedQuery<Reaction> namedQuery = em.createNamedQuery(queryName, Reaction.class);
        namedQuery.setParameter(1, params[0]);
        return namedQuery.getResultList();
    }
}
