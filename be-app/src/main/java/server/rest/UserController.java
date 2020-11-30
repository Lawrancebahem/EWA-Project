package server.rest;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import server.exception.PreConditionalFailed;
import server.exception.ResourceNotFound;
import server.models.Interest;
import server.models.Login;
import server.models.User;
import server.repositories.EntityRepository;

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
     * @param id
     * @return
     */
    @GetMapping("/{id}")
    public User findUserById(@PathVariable long id){
        User user = this.userRepositoryJpa.findById(id);
        if (user == null) throw new  ResourceNotFound("The given id does not exist");
        User clonedObject = this.userRepositoryJpa.getClonedObject(user);
        return clonedObject;
    }

    /**
     * To register new user, and responding with the user in the body without the password
     * @param user
     * @return
     */
    @PostMapping()
    public ResponseEntity<User> responseEntity(@RequestBody User user){
        System.out.println("The received user is " + user);
        User foundUserByEmail = this.userRepositoryJpa.findByEmail(user.getEmail());
        if (foundUserByEmail != null) throw new PreConditionalFailed("This email : '" + user.getEmail() + "' is already in use");
        User savedUser = this.userRepositoryJpa.saveOrUpdate(user);
        User clonedSavedUser = this.userRepositoryJpa.getClonedObject(savedUser);//Get cloned user without password
        URI location = ServletUriComponentsBuilder.fromCurrentContextPath().path("/{id}").buildAndExpand(clonedSavedUser).toUri();
        return ResponseEntity.created(location).body(clonedSavedUser);
    }

    /**
     * To insert the user's interests if theres any
     * @param interestsIds
     * @param userId
     * @return
     */
    @PostMapping("/interests/{userId}")
    public boolean responseEntityInterests(@RequestBody int [] interestsIds, @PathVariable long userId){
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
     * Get the interests of a certain user based on the given id
     * @param id
     * @return
     */
    @GetMapping("/interests/{id}")
    public int[]getUserInterests(@PathVariable long id){
       return this.interestEntityRepositoryJpa.getUsersInterests(id);
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
