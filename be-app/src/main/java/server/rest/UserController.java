package server.rest;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import server.exception.PreConditionalFailed;
import server.exception.ResourceNotFound;
import server.models.Interest;
import server.models.Login;
import server.models.User;
import server.repositories.EntityRepository;
import server.service.APIConfiguration;
import server.utilities.JWToken;

import javax.servlet.http.HttpServletRequest;
import java.net.URI;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:4200", "https://digital-life-frontend-staging.herokuapp.com"})
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    @Qualifier("userRepositoryJpa")
    public EntityRepository<User> userRepositoryJpa;

    @Autowired
    @Qualifier("interestRepositoryJpa")
    public EntityRepository<Interest> interestEntityRepositoryJpa;

    @Autowired
    private APIConfiguration api;

    /**
     * Get all users
     * @return
     */
    @GetMapping("/all")
    public List<User> findAll(){
        return this.userRepositoryJpa.findAll();
    }


    /**
     * To get a user by id
     * @return
     */
    @GetMapping()
    public User findUserById(HttpServletRequest request){
        JWToken userJwToken = this.api.getUserJWTokenDecoded(request);
        long userId = userJwToken.getId();
        System.out.println("The user is " + userId + " name " + userJwToken.getEmail());
        User user = this.userRepositoryJpa.findById(userId);
        if (user == null) throw new ResourceNotFound("The user not found");
        return this.userRepositoryJpa.getClonedObject(user);
    }

    /**
     * To register new user, and responding with the user in the body without the password
     * @param user
     * @return
     */
    @PostMapping()
    public ResponseEntity<User> registerNewUser(@RequestBody User user){

        User foundUserByEmail = this.userRepositoryJpa.findByEmail(user.getEmail());
        if (foundUserByEmail != null) throw new PreConditionalFailed("This email : '" + user.getEmail() + "' is already in use");
        User savedUser = this.userRepositoryJpa.saveOrUpdate(user);
        User clonedSavedUser = this.userRepositoryJpa.getClonedObject(savedUser);//Get cloned user without password
        URI location = ServletUriComponentsBuilder.fromCurrentContextPath().path("/{id}").buildAndExpand(clonedSavedUser).toUri();
        return ResponseEntity.created(location).body(clonedSavedUser);
    }



    @PutMapping("/update")
    public User updateUser(@RequestBody User updatedUser, HttpServletRequest request){
        JWToken userJwToken = this.api.getUserJWTokenDecoded(request);
        long userId = userJwToken.getId();
        updatedUser.setId(userId);
        User user = this.userRepositoryJpa.saveOrUpdate(updatedUser);
        return this.userRepositoryJpa.getClonedObject(user);
    }


    /**
     * Get the interests of a certain user based on the JWToken
     * @return user's interests in an array
     */
    @GetMapping("/my-interests")
    public int[]getUserInterests(HttpServletRequest request){
        JWToken userJwToken = this.api.getUserJWTokenDecoded(request);
        if (userJwToken != null){
            return this.interestEntityRepositoryJpa.getUsersInterests(userJwToken.getId());
        }else {
            return null;
        }
    }

    /**
     * To insert/update the user's interests, if there are any
     * @param interestsIds
     * @return
     */
    @PostMapping("/interests")
    public boolean responseEntityInterests(@RequestBody int [] interestsIds, HttpServletRequest request){

        JWToken userJWToken = this.api.getUserJWTokenDecoded(request);
        long userId = userJWToken.getId();
        User foundUser = this.userRepositoryJpa.findById(userId); // get the user
        for (int interestId : interestsIds){// loop through the interests id's
            Interest interest = this.interestEntityRepositoryJpa.findById(interestId); // get the interest
            foundUser.getInterests().add(interest); //add the interest to the user
            interest.getUsers().add(foundUser); // add the user to the interest
            this.interestEntityRepositoryJpa.saveOrUpdate(interest); // add/,merge the interest
        }
        this.userRepositoryJpa.saveOrUpdate(foundUser);// add/merge the user
        return true;
    }

    /**
     * Authenticate login
     * @param login
     * @return
     */
    @PostMapping("/login")
    public User login(@RequestBody Login login){
        return this.userRepositoryJpa.authenticateLogin(login);
    }
}
