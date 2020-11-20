package server.repositories;

import org.springframework.stereotype.Service;
import server.models.Interest;

import javax.persistence.Query;
import javax.transaction.Transactional;
import java.math.BigInteger;
import java.util.List;


@Service("interestRepositoryJpa")
@Transactional
public class InterestRepositoryJpa extends AbstractEntityRepositoryJpa<Interest> {


    public InterestRepositoryJpa() {
        super(Interest.class);
    }

    /**
     * Get the user's interests
     * @param userId
     * @return
     */
    @Override
    public int[] getUsersInterests(long userId) {
        Query query = em.createNamedQuery("GetUserInterests");
        query.setParameter("userId", userId);
        List<BigInteger>interests = query.getResultList();
        int []arrayOfInterests = new int[interests.size()];
        for (int i  =0; i<interests.size();i++){
            arrayOfInterests[i] =  interests.get(i).intValue();
        }
        return arrayOfInterests;
    }
}
