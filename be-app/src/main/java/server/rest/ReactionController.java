package server.rest;


import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import server.models.Activity;
import server.models.Reaction;
import server.models.User;
import server.repositories.ActivityRepositoryJpa;
import server.repositories.ReactionRepositoryJpa;
import server.repositories.UserRepositoryJpa;
import server.utilities.JWToken;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:9876" ,  "https://digital-life-frontend-staging.herokuapp.com","https://digital-life-frontend-prod.herokuapp.com"})
@RestController
@RequestMapping("/reaction")
public class ReactionController {

    @Autowired
//    @Qualifier("userRepositoryJpa")
    public UserRepositoryJpa userRepositoryJpa;

    @Autowired
//    @Qualifier("activityRepositoryJpa")
    private ActivityRepositoryJpa activityRepositoryJpa;


    @Autowired
    private ReactionRepositoryJpa reactionRepositoryJpa;


    @GetMapping("/all/{idActivity}")
    public List<Object[]> getAllReactions(@PathVariable long idActivity){
        return this.reactionRepositoryJpa.findReactionForAnActivity(idActivity);
    }

    @PostMapping("/new-reaction")
    public boolean addNewReaction(@RequestBody ObjectNode objectNode,
                                  @RequestAttribute(value = JWToken.JWT_ATTRIBUTE_NAME) JWToken userJwToken){

        int idActivity = objectNode.get("idActivity").asInt();
        String reactionText = objectNode.get("textReaction").asText();
        Activity foundActivity = this.activityRepositoryJpa.findById(idActivity);
        User foundUser = this.userRepositoryJpa.findById(userJwToken.getId());

        Reaction newReaction = new Reaction(reactionText, foundUser, foundActivity);

        this.reactionRepositoryJpa.saveOrUpdate(newReaction);

        foundActivity.getReactions().add(newReaction);
        foundUser.getReactions().add(newReaction);

        this.userRepositoryJpa.saveOrUpdate(foundUser); //to update the list of the reactions
        this.activityRepositoryJpa.saveOrUpdate(foundActivity); // to update the reactions of this activity

        return true;
    }
}
