package server.repository;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.junit4.SpringRunner;
import server.models.Interest;
import server.models.User;
import server.repositories.EntityRepository;

import java.time.LocalDate;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

/**
 * This test is to test adding new users and link them with their interests, and removing them again
 * @author Lawrance Bahem
 */

@SpringBootTest
@RunWith(SpringRunner.class)
public class UserRepositoryTest {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    @Qualifier("userRepositoryJpa")
    private EntityRepository<User> userRepositoryJpa;

    @Autowired
    @Qualifier("interestRepositoryJpa")
    private EntityRepository<Interest> interestEntityRepositoryJpa;

    @Test
    @DirtiesContext
    public void testFindingUser(){
        User user = this.userRepositoryJpa.findById(1002);
        logger.info(user + "");
        assertNotNull(user);
    }

    @Test
    @DirtiesContext
    public void addingUserWithInterests(){
        User user1 = new User("Marc","Specht", LocalDate.now(), User.Gender.MAN, "/assets/Images/picProfile.png", "marcspecht@hotmail.com","12345", false,false);
        User user2 = new User("Chantal","Specht", LocalDate.now(), User.Gender.WOMAN, "/assets/Images/picProfile.png", "chantal@hotmail.com","12345", false,false);


        Interest shopping = interestEntityRepositoryJpa.findById(5);
        Interest sport = interestEntityRepositoryJpa.findById(6);
        Interest music = interestEntityRepositoryJpa.findById(1);

        //Insert first the users
        assertNotNull(this.userRepositoryJpa.saveOrUpdate(user1));
        assertNotNull(this.userRepositoryJpa.saveOrUpdate(user2));
        //link the interests with the users and vice versa
        user1.getInterests().add(music);
        music.getUsers().add(user1);
        user1.getInterests().add(sport);
        sport.getUsers().add(user1);
        user2.getInterests().add(shopping);
        shopping.getUsers().add(user2);

        //Check if the they are inserted
        assertNotNull(this.interestEntityRepositoryJpa.saveOrUpdate(shopping));
        assertNotNull(this.interestEntityRepositoryJpa.saveOrUpdate(music));
        assertNotNull(this.interestEntityRepositoryJpa.saveOrUpdate(sport));
        assertNotNull(this.userRepositoryJpa.saveOrUpdate(user1));
        assertNotNull(this.userRepositoryJpa.saveOrUpdate(user2));

    }


    @Test
    @DirtiesContext
    public void findUsersByEmailAndDeleteThemById(){

        User user1 = this.userRepositoryJpa.findByEmail("marcspecht@hotmail.com");
        User user2 = this.userRepositoryJpa.findByEmail("chantal@hotmail.com");

        assertTrue(this.userRepositoryJpa.deleteById(user1.getId()));
        assertTrue(this.userRepositoryJpa.deleteById(user2.getId()));

    }

}
