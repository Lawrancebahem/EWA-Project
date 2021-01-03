package server.repository;

import org.junit.Test;
import org.junit.jupiter.api.Order;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.junit4.SpringRunner;
import server.models.Activity;
import server.models.Reaction;
import server.models.User;
import server.repositories.ActivityRepositoryJpa;
import server.repositories.ReactionRepositoryJpa;
import server.repositories.UserRepositoryJpa;

import java.util.List;

import static org.junit.Assert.*;

//@Transactional
@SpringBootTest
@RunWith(SpringRunner.class)
public class ReactionRepositoryTest {

    @Autowired
    @Qualifier("reactionRepositoryJpa")
    private ReactionRepositoryJpa reactionEntityRepository;

    @Autowired
    @Qualifier("userRepositoryJpa")
    private UserRepositoryJpa userRepositoryJpa;

    @Autowired
    private ActivityRepositoryJpa activityRepositoryJpa;


    @Test
    @Order(1)
    public void totalReactions(){
    List<Reaction> reactions = this.reactionEntityRepository.findAll();
    assertEquals(3,reactions.size());
        System.out.println(this.reactionEntityRepository.findAll());
    }

    @Test
    @DirtiesContext
    @Order(2)
    public void addReaction(){

        //get the users
        User user1 = this.userRepositoryJpa.findById(1002);
        User user2 = this.userRepositoryJpa.findById(1000);

        //find the activity
        Activity activity1 = this.activityRepositoryJpa.findById(1);


        //makes the reactions in the activity
        Reaction reaction1 = new Reaction("Wat een leuke activiteit", user1, activity1);
        Reaction reaction2 = new Reaction("Ik vond deze activiteit niet zo leuk", user2, activity1);
        //Check if the they are inserted

        Reaction savedReaction1 = this.reactionEntityRepository.saveOrUpdate(reaction1);
        Reaction savedReaction2 = this.reactionEntityRepository.saveOrUpdate(reaction2);

//        this.reactionId1 = savedReaction1.getId();
//        this.reactionId2= savedReaction2.getId();

        assertNotNull(savedReaction1);
        assertNotNull(savedReaction2);

        assertNotNull(this.activityRepositoryJpa.saveOrUpdate(activity1));
        assertNotNull(this.userRepositoryJpa.saveOrUpdate(user1));
        assertNotNull(this.userRepositoryJpa.saveOrUpdate(user2));


        assertTrue(this.reactionEntityRepository.deleteById(reaction1.getId()));
        assertTrue(this.reactionEntityRepository.deleteById(reaction2.getId()));
    }

    @Test
    @DirtiesContext
    @Order(3)
    public void findReactions(){
        Reaction reaction1 = reactionEntityRepository.findById(170);
        Reaction reaction2 = reactionEntityRepository.findById(195);

        assertEquals(reaction1.getMessage(), "oud");
        assertEquals(reaction2.getMessage(), "Wat een leuke activiteit");
    }


    @Test
    @Order(4)
    public void findUsersReactionsByIdAndDeleteThemById(){

        User user1 = this.userRepositoryJpa.findById(1002);
        User user2 = this.userRepositoryJpa.findById(1000);

        //find the activity
        Activity activity1 = this.activityRepositoryJpa.findById(1);

        //makes the reactions in the activity
        Reaction reaction1 = new Reaction("Wat een leuke activiteit", user1, activity1);
        Reaction reaction2 = new Reaction("Ik vond deze activiteit niet zo leuk", user2, activity1);

        Reaction savedReaction1 = this.reactionEntityRepository.saveOrUpdate(reaction1);
        Reaction savedReaction2 = this.reactionEntityRepository.saveOrUpdate(reaction2);

        assertNotNull(savedReaction1);
        assertNotNull(savedReaction2);

        assertNotNull(this.activityRepositoryJpa.saveOrUpdate(activity1));
        assertNotNull(this.userRepositoryJpa.saveOrUpdate(user1));
        assertNotNull(this.userRepositoryJpa.saveOrUpdate(user2));


        assertTrue(this.reactionEntityRepository.deleteById(reaction1.getId()));
        assertTrue(this.reactionEntityRepository.deleteById(reaction2.getId()));

    }

    @Test
    @Order(5)
    public void findUserFromReaction(){
        Reaction reaction = this.reactionEntityRepository.findById(170);
        assertEquals("Tico",reaction.getUser().getFirstName());
    }

}
