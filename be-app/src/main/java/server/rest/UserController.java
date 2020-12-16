package server.rest;


import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import server.exception.AuthorizationException;
import server.exception.PreConditionalFailed;
import server.exception.ResourceNotFound;
import server.models.Activity;
import server.models.Interest;
import server.models.User;
import server.repositories.EntityRepository;
import server.service.APIConfiguration;
import server.utilities.JWToken;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.naming.AuthenticationException;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.net.URI;
import java.util.List;

//@CrossOrigin(origins = {"http://localhost:4200", "https://digital-life-frontend-staging.herokuapp.com"})
@RestController
@RequestMapping("/user")
public class UserController {


    @Autowired
    private JavaMailSender javaMailSender;



    @Autowired
    @Qualifier("userRepositoryJpa")
    public EntityRepository<User> userRepositoryJpa;

    @Autowired
    @Qualifier("interestRepositoryJpa")
    public EntityRepository<Interest> interestEntityRepositoryJpa;

    @Autowired
    @Qualifier("activityRepositoryJpa")
    private EntityRepository<Activity> activityRepositoryJpa;

    @Autowired
    private APIConfiguration api;

    /**
     * Get all users
     * @return
     */
//    @JsonView(User.ShowInfoAdmin.class)
    @GetMapping("/all")
    public List<User> findAll(HttpServletRequest request) {
        JWToken userJwToken = this.api.getUserJWTokenDecoded(request);
        boolean isAdmin = this.userRepositoryJpa.findById(userJwToken.getId()).isAdmin();
        if (!isAdmin) throw new AuthorizationException("Je bent geen geautoriseerde gebruiker");
        return this.userRepositoryJpa.findAll();
    }


    /**
     * To get a user by id
     *
     * @return
     */
    @GetMapping()
    public User findUserById(HttpServletRequest request) throws AuthenticationException {

        JWToken userJwToken = this.api.getUserJWTokenDecoded(request);
        long userId = userJwToken.getId();
        System.out.println("The user is " + userId + " name " + userJwToken.getEmail());
        User user = this.userRepositoryJpa.findById(userId);
        if (user == null) throw new ResourceNotFound("De gebruiker is gevonden");
        return this.userRepositoryJpa.getClonedObject(user);
    }

    /**
     * To register new user, and responding with the user in the body without the password
     * @param user
     * @return
     */
    @PostMapping()
    public ResponseEntity<User> registerNewUser(@RequestBody User user) {

        User foundUserByEmail = this.userRepositoryJpa.findByEmail(user.getEmail());
        if (foundUserByEmail != null)
            throw new PreConditionalFailed("De email : '" + user.getEmail() + "' is al in gebruik");
        User savedUser = this.userRepositoryJpa.saveOrUpdate(user);
        User clonedSavedUser = this.userRepositoryJpa.getClonedObject(savedUser);//Get cloned user without password
        URI location = ServletUriComponentsBuilder.fromCurrentContextPath().path("/{id}").buildAndExpand(clonedSavedUser).toUri();
        return ResponseEntity.created(location).body(clonedSavedUser);
    }

    /**
     * Tp update a user
     * @param updatedUser
     * @param request
     * @return
     */
    @PutMapping("/update")
    public User updateUser(@RequestBody User updatedUser, HttpServletRequest request) {
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
    public int[] getUserInterests(HttpServletRequest request) {
        JWToken userJwToken = this.api.getUserJWTokenDecoded(request);
        if (userJwToken != null) {
            return this.interestEntityRepositoryJpa.getUsersInterests(userJwToken.getId());
        } else {
            return null;
        }
    }

    /**
     * To insert/update the user's interests, if there are any
     * @param interestsIds
     * @return
     */
    @PostMapping("/interests")
    public boolean responseEntityInterests(@RequestBody int[] interestsIds, HttpServletRequest request) {

        JWToken userJWToken = this.api.getUserJWTokenDecoded(request);
        long userId = userJWToken.getId();
        User foundUser = this.userRepositoryJpa.findById(userId); // get the user
        for (int interestId : interestsIds) {// loop through the interests id's
            Interest interest = this.interestEntityRepositoryJpa.findById(interestId); // get the interest
            foundUser.getInterests().add(interest); //add the interest to the user
            interest.getUsers().add(foundUser); // add the user to the interest
            this.interestEntityRepositoryJpa.saveOrUpdate(interest); // add/,merge the interest
        }
        this.userRepositoryJpa.saveOrUpdate(foundUser);// add/merge the user
        return true;
    }


    /**
     * to block a user
     * @param email
     * @return
     */
    @GetMapping(value = "/block/{email}/", produces = "application/json")
    public boolean blockUser(@PathVariable String email){
        User foundUser = this.userRepositoryJpa.findByEmail(email);
        foundUser.setBlocked(true);
        this.userRepositoryJpa.saveOrUpdate(foundUser);
        return true;
    }


    /**
     * to unblock a user
     * @param email
     * @return
     */
    @GetMapping(value = "/unblock/{email}/", produces = "application/json")
    public boolean unblockUser(@PathVariable String email){
        User foundUser = this.userRepositoryJpa.findByEmail(email);
        foundUser.setBlocked(false);
        this.userRepositoryJpa.saveOrUpdate(foundUser);
        return true;
    }


    /**
     * to make a user as an admin
     * @param email
     * @return
     */
    @GetMapping(value = "/make-admin/{email}/", produces = "application/json")
    public boolean makeUserAsAnAdmin(@PathVariable String email){
        User foundUser = this.userRepositoryJpa.findByEmail(email);
        foundUser.setAdmin(true);
        this.userRepositoryJpa.saveOrUpdate(foundUser);
        return true;
    }

    /**
     * to unblock a user
     * @param email
     * @return
     */
    @GetMapping(value = "/make-not-admin/{email}/", produces = "application/json")
    public boolean makeUserNotAdmin(@PathVariable String email){
        User foundUser = this.userRepositoryJpa.findByEmail(email);
        foundUser.setAdmin(false);
        this.userRepositoryJpa.saveOrUpdate(foundUser);
        return true;
    }

    /**
     * To get the user's activity matches
     * @return
     */
    @GetMapping("/activity-match")
    public List<Activity> getMatchesActivity(HttpServletRequest request){
        JWToken jwToken = api.getUserJWTokenDecoded(request);
        long userId = jwToken.getId();
        return this.activityRepositoryJpa.getActivityMatches(userId);
    }

    @PostMapping("/reset-password")
    public boolean sendEmailTo(@RequestBody ObjectNode objectNode){
        String email = objectNode.get("email").asText();
        User foundUser = this.userRepositoryJpa.findByEmail(email);
        if (foundUser != null){
            String lastName = foundUser.getLastName();
            String userPassword = foundUser.getPassword();
            this.sendEmail(lastName,email ,userPassword);
            return true;
        }else {
            throw new ResourceNotFound("De volgende email + <" + email + "> is niet bekened!");
        }
    }


    /**
     * To send the password via an email for the user, if the user has forgotten the password
     * @param lastName
     * @param toEmail
     * @param password
     */
    public void sendEmail(String lastName,String toEmail,String password) {
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo(toEmail);
        msg.setSubject("Herstellen wachtwoord");
        msg.setText("Geachte heer/mevrouw " + lastName +",\n\n"
                + "Uw password is: " + password+ "\n\n" +
                "Met vriendelijke groet,\n"+
                "Digital Life team 5");
        javaMailSender.send(msg);
    }



    void sendEmailWithAttachment() throws MessagingException, IOException {

        MimeMessage msg = javaMailSender.createMimeMessage();

        // true = multipart message
        MimeMessageHelper helper = new MimeMessageHelper(msg, true);

        helper.setTo("to_@email");

        helper.setSubject("Testing from Spring Boot");

        // default = text/plain
        //helper.setText("Check attachment for image!");

        // true = text/html
        helper.setText("<h1>Check attachment for image!</h1>", true);

        // hard coded a file path
        //FileSystemResource file = new FileSystemResource(new File("path/android.png"));

        helper.addAttachment("my_photo.png", new ClassPathResource("android.png"));

        javaMailSender.send(msg);

    }

}
