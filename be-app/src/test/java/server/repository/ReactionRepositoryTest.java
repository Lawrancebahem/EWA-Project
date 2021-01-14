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
    //first i make a list that retrieves the reactions by calling the findAll() function through the repository.
    List<Reaction> reactions = this.reactionEntityRepository.findAll();
    //last is expect the an size from the list so i compare the list size with a number it needs to be the same otherwise
    //the test doesn't pass
    assertEquals(4,reactions.size());
  }

  @Test
  @DirtiesContext
  @Order(2)
  public void addReaction(){

    //get the users
    User user1 = this.userRepositoryJpa.findById(1002);
    User user2 = this.userRepositoryJpa.findById(1000);

    //get the activity by the id it has
    Activity activity1 = this.activityRepositoryJpa.findById(1);


    //i make the reactions by given it an user, activity and an message
    Reaction reaction1 = new Reaction("Wat een leuke activiteit", user1, activity1);
    Reaction reaction2 = new Reaction("Ik vond deze activiteit niet zo leuk", user2, activity1);
    //Check if the they are inserted

    //it saves/updates the reactions
    Reaction savedReaction1 = this.reactionEntityRepository.saveOrUpdate(reaction1);
    Reaction savedReaction2 = this.reactionEntityRepository.saveOrUpdate(reaction2);


    // this checks if the reactions aren't null
    assertNotNull(savedReaction1);
    assertNotNull(savedReaction2);

    //i also have to check if the activity and users aren't null otherwise it wil thrown an assertion error
    assertNotNull(this.activityRepositoryJpa.saveOrUpdate(activity1));
    assertNotNull(this.userRepositoryJpa.saveOrUpdate(user1));
    assertNotNull(this.userRepositoryJpa.saveOrUpdate(user2));


    //last i delete the reaction by the id they have
    //if they're deleted the test is passed
    assertTrue(this.reactionEntityRepository.deleteById(reaction1.getId()));
    assertTrue(this.reactionEntityRepository.deleteById(reaction2.getId()));
  }

  @Test
  @DirtiesContext
  @Order(3)
  public void findReactions(){
    //finds the reaction by calling the the methode findById from the reaction Repo en inserting an existing id
    Reaction reaction1 = reactionEntityRepository.findById(170);
    Reaction reaction2 = reactionEntityRepository.findById(195);

    //this checks if the message of the reaction is the same as the string parameter
    assertEquals(reaction1.getMessage(), "oud");
    assertEquals(reaction2.getMessage(), "Wat een leuke activiteit");
  }



  @Test
  @Order(4)
  public void findUsersReactionsByIdAndDeleteThemById(){

    //I find users by the id they have
    User user1 = this.userRepositoryJpa.findById(1002);
    User user2 = this.userRepositoryJpa.findById(1000);

    //find the activity
    Activity activity1 = this.activityRepositoryJpa.findById(1);

    //i make the reactions by given it an user, activity and an message
    Reaction reaction1 = new Reaction("Wat een leuke activiteit", user1, activity1);
    Reaction reaction2 = new Reaction("Ik vond deze activiteit niet zo leuk", user2, activity1);

    //it saves/updates the reactions
    Reaction savedReaction1 = this.reactionEntityRepository.saveOrUpdate(reaction1);
    Reaction savedReaction2 = this.reactionEntityRepository.saveOrUpdate(reaction2);

    // this checks if the reactions aren't null
    assertNotNull(savedReaction1);
    assertNotNull(savedReaction2);

    //i also have to check if the activity and users aren't null otherwise it wil thrown an assertion error
    assertNotNull(this.activityRepositoryJpa.saveOrUpdate(activity1));
    assertNotNull(this.userRepositoryJpa.saveOrUpdate(user1));
    assertNotNull(this.userRepositoryJpa.saveOrUpdate(user2));


    //last i delete the reaction by the id they have
    //if they're deleted the test is passed
    assertTrue(this.reactionEntityRepository.deleteById(reaction1.getId()));
    assertTrue(this.reactionEntityRepository.deleteById(reaction2.getId()));

  }

  @Test
  @Order(5)
  public void findUserFromReaction(){
    //i have to find the user by getting the reaction first.
    //that is why get made an object and got the reaction by the id it has
    Reaction reaction = this.reactionEntityRepository.findById(170);
    //to make sure it is the right user i compare the firstname of the user with the string i put in the parameter.
    assertEquals("Tico",reaction.getUser().getFirstName());
  }

}

