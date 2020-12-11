package server.repositories;

import org.springframework.stereotype.Service;
import server.models.Activity;
import server.models.User;

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


    /**
     * To get the user's matches
     * @param userId
     * @return
     */
    @Override
    public List<Activity> getActivityMatches(long userId) {

        return this.em.createNativeQuery("select a.* from activity a " +
                "join interests_activity ia on a.idactivity = ia.idactivity" +
                " join user_interest ua on ia.interestid = ua.interest_id where ua.id = ?1")
                .setParameter(1, userId)
                .getResultList();
    }
}
