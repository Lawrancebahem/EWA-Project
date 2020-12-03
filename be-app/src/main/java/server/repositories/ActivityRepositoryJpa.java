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

    @Override
    public List<Activity> findByQuery(String queryName, Object... params) {
        TypedQuery<Activity> namedQuery = em.createNamedQuery(queryName, Activity.class);
        namedQuery.setParameter(1, params[0]);
        return namedQuery.getResultList();
    }

    @Override
    public List<Activity> findAll() {
        return super.findAll();
    }

    @Override
    public Activity findById(long id) {
        return super.findById(id);
    }

    @Override
    public Activity saveOrUpdate(Activity activity) {
        return super.saveOrUpdate(activity);
    }

    @Override
    public boolean deleteById(long id) {
        return super.deleteById(id);
    }
}
