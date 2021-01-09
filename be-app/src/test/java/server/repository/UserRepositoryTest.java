package server.repository;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.junit4.SpringRunner;
import server.models.Interest;
import server.models.User;
import server.repositories.InterestRepositoryJpa;
import server.repositories.UserRepositoryJpa;

import java.time.LocalDate;

import static org.junit.Assert.*;

/**
 * This test is to test adding new users and link them with their interests, and removing them again
 * @author Lawrance Bahem
 */

@SpringBootTest
@RunWith(SpringRunner.class)
public class UserRepositoryTest {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
//    @Qualifier("userRepositoryJpa")
    private UserRepositoryJpa userRepositoryJpa;

    @Autowired
//    @Qualifier("interestRepositoryJpa")
    private InterestRepositoryJpa interestEntityRepositoryJpa;

    @Test
    @DirtiesContext
    public void testFindingUser(){
        User user = this.userRepositoryJpa.findById(1002);
        logger.info(user + "");
        assertNotNull(user);
    }

    /**
     * Create new users add for them some interests by getting these interests from the database,
     * after that link these interests to the users and add the users to the database
     */
    @Test
    @DirtiesContext
    public void addingUserWithInterests(){
        User user1 = new User("Marc","Specht", LocalDate.now(), User.Gender.MAN, "/assets/Images/picProfile.png", "marcspecht@hotmail.com","12345", false,false);
        User user2 = new User("Chantal","Specht", LocalDate.now(), User.Gender.WOMAN, "/assets/Images/picProfile.png", "chantal@hotmail.com","12345", false,false);

        //get interests from database
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


    /**
     * Find users by their email and delete them by their ids
     */
    @Test
    public void findUsersByEmailAndDeleteThemById(){
        //find users by email
        User user1 = this.userRepositoryJpa.findByEmail("marcspecht@hotmail.com");
        User user2 = this.userRepositoryJpa.findByEmail("chantal@hotmail.com");

        //delete them by id
        assertTrue(this.userRepositoryJpa.deleteById(user1.getId()));
        assertTrue(this.userRepositoryJpa.deleteById(user2.getId()));

    }

    /**
     * Add new user and update their names
     */
    @Test
    public void  addNewUserAndUpdateAndDelete(){
        //new user
        User user1 = new User("Marc","Specht", LocalDate.now(), User.Gender.MAN, "/assets/Images/picProfile.png", "marcspecht@gmail.com","12345", false,false);
        User savedUser = this.userRepositoryJpa.saveOrUpdate(user1);
        //Check if the user has been inserted
        assertEquals("Marc", savedUser.getFirstName());

        //Change the name and last name, set the user as admin
        savedUser.setFirstName("Marcio");
        savedUser.setLastName("De laat");
        savedUser.setBlocked(true);
        //Update the user
        savedUser = this.userRepositoryJpa.saveOrUpdate(savedUser);

        //Check if the user has been updated
        assertEquals("Marcio", savedUser.getFirstName());
        assertEquals("De laat", savedUser.getLastName());
        assertTrue(savedUser.isBlocked());

        //Delete the user
        assertTrue(this.userRepositoryJpa.deleteById(savedUser.getId()));
    }
}
