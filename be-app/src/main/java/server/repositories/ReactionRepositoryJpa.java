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

}
