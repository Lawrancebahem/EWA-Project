package server.repositories;

import org.springframework.stereotype.Service;
import server.models.Activity;

import javax.persistence.Query;
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
   *
   * @param idActivity
   * @return
   */

  public int[] getActivityCategories(long idActivity) {
    Query query = em.createNamedQuery("GetActivityCategory");
    query.setParameter("idActivity", idActivity);
    List<BigInteger> interests = query.getResultList();
    int[] arrayOfCategories = new int[interests.size()];
    for (int i = 0; i < interests.size(); i++) {
      arrayOfCategories[i] = interests.get(i).intValue();
    }
    return arrayOfCategories;
  }


  /**
   * To get the user's matches
   *
   * @param userId
   * @return
   */
  public List<Activity> getActivityMatches(long userId) {
    //First of all we have know what we need to get from the quury and that are the activities.
    //second of all we need to know from what tables we need to get the activities that matches with the interest.
    // Last we have to inner join the user table otherwise we don't get the right acivities assigned to the user.
    // We have to inner join the interest table and user table and use the id's because there the foreign keys and primary keys
    // First we inner join the intermediate table named interest_activity with by and
    return this.em.createNativeQuery("select a.* from activity a " +
      "join interests_activity ia on a.idactivity = ia.idactivity" +
      " join user_interest ua on ia.interestid = ua.interest_id where ua.id = ?1")
      .setParameter(1, userId)
      .getResultList();
  }

  public List<Object[]> getActivitiesForCategory() {
    return this.em.createNativeQuery("select a.* , ac.idcategory from activity a  " +
      "join activity_category ac on a.idactivity = ac.idactivity")
      .getResultList();
  }
}
