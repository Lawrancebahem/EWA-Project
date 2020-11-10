package server.rest;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import server.exception.ResourceNotFound;
import server.models.User;
import server.repositories.EntityRepository;
import org.springframework.http.ResponseEntity;
import java.net.URI;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:4200", "https://digital-life-frontend-staging.herokuapp.com"})
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    public EntityRepository<User> userRepository;


    @GetMapping("/all")
    public List<User> findAll(){
        return this.userRepository.findAll();
    }


    @GetMapping("/{id}")
    public User findUserById(@PathVariable long id){
        User user = this.userRepository.findById(id);
        if (user == null) throw new  ResourceNotFound("The given id does not exist");
        return user;
    }

    @PostMapping()
    public ResponseEntity<User> responseEntity(@RequestBody User user){
        System.out.println("The user is " +user.getFirstName());
        User savedUser = this.userRepository.saveOrUpdate(user);
        URI location = ServletUriComponentsBuilder.fromCurrentContextPath().path("/{id}").buildAndExpand(savedUser).toUri();
        return ResponseEntity.created(location).body(savedUser);
    }
}
