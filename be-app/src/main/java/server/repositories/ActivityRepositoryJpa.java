package server.repositories;

import org.springframework.stereotype.Service;
import server.models.Activity;

import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import java.util.List;

@Service("activityRepositoryJpa")
@Transactional
public class ActivityRepositoryJpa extends AbstractEntityRepositoryJpa<Activity> {

    public ActivityRepositoryJpa() {
        super(Activity.class);
    }

}
