package server.repository;


import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import server.models.Interest;
import server.repositories.EntityRepository;

import java.util.List;

import static org.junit.Assert.assertEquals;

/**
 * This test is to test finding interests based on their ids, and checking the interests size in the database
 * @author Lawrnace Bahem
 */
@SpringBootTest
@RunWith(SpringRunner.class)
public class InterestRepositoryTest {

    @Autowired
    @Qualifier("interestRepositoryJpa")
    private EntityRepository<Interest> interestEntityRepositoryJpa;


    /**
     * Find interests by their id
     */
    @Test
    public void findInterests(){

        //Get interest by id
        Interest interest1 = interestEntityRepositoryJpa.findById(1);
        Interest interest2 = interestEntityRepositoryJpa.findById(2);
        Interest interest3 = interestEntityRepositoryJpa.findById(3);
        //Check the names of the interests
        assertEquals(interest1.getName(), "muziek");
        assertEquals(interest2.getName(), "strand");
        assertEquals(interest3.getName(), "avontuur");
    }

    /**
     * Get all interests and check their size
     */
    @Test
    public void totalInterest(){
        List<Interest> interests = this.interestEntityRepositoryJpa.findAll();
        assertEquals(9,interests.size());
    }
}
