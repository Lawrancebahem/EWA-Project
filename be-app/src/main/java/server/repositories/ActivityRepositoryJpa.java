package server.repositories;

import org.springframework.stereotype.Service;
import server.models.Activity;

import javax.persistence.Query;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import java.math.BigInteger;
import java.util.List;

@Service("activityRepositoryJpa")
@Transactional
public class ActivityRepositoryJpa extends AbstractEntityRepositoryJpa<Activity> {

    public ActivityRepositoryJpa() {
        super(Activity.class);
    }

    /**
     * returns the categories belonged to an activity
     * @param idActivity
     * @return
     */
    @Override
    public int[] getActivityCategories(long idActivity) {
        Query query = em.createNamedQuery("GetActivityCategory");
        query.setParameter("idActivity",idActivity);
        List<BigInteger>interests = query.getResultList();
        int []arrayOfCategories = new int[interests.size()];
        for (int i  =0; i<interests.size();i++){
            arrayOfCategories[i] =  interests.get(i).intValue();
        }
        return arrayOfCategories;
    }
}
