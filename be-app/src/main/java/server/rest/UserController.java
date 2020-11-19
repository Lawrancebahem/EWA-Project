package server.rest;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import server.exception.PreConditionalFailed;
import server.exception.ResourceNotFound;
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
    public EntityRepository<User> userRepository;


    /**
     * Get all users
     * @return
     */
    @GetMapping("/all")
    public List<User> findAll(){
        return this.userRepository.findAll();
    }


    /**
     * To get a user by id
     * @param id
     * @return
     */
    @GetMapping("/{id}")
    public User findUserById(@PathVariable long id){
        User user = this.userRepository.findById(id);
        if (user == null) throw new  ResourceNotFound("The given id does not exist");
        User clonedObject = this.userRepository.getClonedObject(user);
        return user;
    }

    /**
     * To register new user, and responding with the user in the body without the password
     * @param user
     * @return
     */
    @PostMapping()
    public ResponseEntity<User> responseEntity(@RequestBody User user){
        System.out.println("The received user is " + user);
        User foundUserByEmail = this.userRepository.findByEmail(user.getEmail());
        if (foundUserByEmail != null) throw new PreConditionalFailed("This email : '" + user.getEmail() + "' is already in use");
        User savedUser = this.userRepository.saveOrUpdate(user);
        User clonedSavedUser = this.userRepository.getClonedObject(savedUser);//Get cloned user without password
        URI location = ServletUriComponentsBuilder.fromCurrentContextPath().path("/{id}").buildAndExpand(clonedSavedUser).toUri();
        return ResponseEntity.created(location).body(clonedSavedUser);
    }

    /**
     * Authenticate login
     * @param login
     * @return
     */
    @PostMapping("/login")
    public User login(@RequestBody Login login){
        return this.userRepository.authenticateLogin(login);
    }
}
