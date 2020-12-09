package server.rest;


import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;
import server.models.Activity;
import server.models.Reaction;
import server.models.User;
import server.repositories.AbstractEntityRepositoryJpa;
import server.repositories.ReactionRepositoryJpa;
import server.service.APIConfiguration;
import server.utilities.JWToken;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:4200", "https://digital-life-frontend-staging.herokuapp.com"})
@RestController
@RequestMapping("/reaction")
public class ReactionController {

    @Autowired
    @Qualifier("userRepositoryJpa")
    public AbstractEntityRepositoryJpa<User> userRepositoryJpa;

    @Autowired
    @Qualifier("activityRepositoryJpa")
    private AbstractEntityRepositoryJpa<Activity> activityRepositoryJpa;


    @Autowired
    private ReactionRepositoryJpa reactionRepositoryJpa;

    @Autowired
    private APIConfiguration api;

//    @GetMapping("/all")
//    public List<Object[]> getAllReactions(){
//        return this.reactionRepositoryJpa.findReactionForAnActivity(idActivity);
//    }

    @GetMapping("/all/{idActivity}")
    public List<Object[]> getAllReactions(@PathVariable long idActivity){
        System.out.println("THe user shit us " + idActivity);
        return this.reactionRepositoryJpa.findReactionForAnActivity(idActivity);
    }

    @PostMapping("/new-reaction")
    public boolean addNewReaction(@RequestBody ObjectNode objectNode, HttpServletRequest request){
        JWToken userJwToken = this.api.getUserJWTokenDecoded(request);

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
