package server.repositories;

import org.springframework.stereotype.Service;
import server.exception.PreConditionalFailed;
import server.models.Login;
import server.models.User;

import java.util.ArrayList;
import java.util.List;

@Service("userRepository")
public class UserRepository implements EntityRepository<User> {

    private final List<server.models.User> users = new ArrayList<>();


    /**
     * Return all users
     * @return
     */
    @Override
    public List<User> findAll() {
        return this.users;
    }

    @Override
    public User findById(long id) {
        for (User user : this.users) {
            if (user.getId() == id) return user;
        }
        return null;
    }

    /**
     * Save or update a user
     * @param user
     * @return
     */
    @Override
    public User saveOrUpdate(User user) {
        //Check if the profile picture is empty, if yes add the default profile picture
        if (user.getProfilePicture().trim().isEmpty()){
            user.setProfilePicture("/assets/Images/picProfile.png");
        }
        if (user.getId() == 0){
            user.setId(User.uniqueId++);
            this.users.add(user);
        }else {
            int index = this.users.indexOf(findById(user.getId()));
            if (index > -1){
                this.users.set(index, user);
            }else {
                this.users.add(user);
            }
        }
        return user;
    }

    /**
     * delete by id
     * @param id
     * @return
     */
    @Override
    public boolean deleteById(long id) {
        return this.users.removeIf(user -> user.getId() == id);
    }

    /**
     * find a user by a email
     * @param email
     * @return
     */
    @Override
    public User findByEmail(String email) {
        return this.users.stream().filter(user -> user.getEmail().equalsIgnoreCase(email)).findFirst().orElse(null);
    }

    /**
     * authenticate login and give a cloned user without the hidden password
     * @param login
     * @return
     */
    @Override
    public User authenticateLogin(Login login) {
        User foundUser = this.users.stream().filter(user -> user.getEmail().equalsIgnoreCase(login.getEmail())).findFirst().orElse(null);
        if (foundUser != null) {
           if (foundUser.getPassword().equalsIgnoreCase(login.getPassword())){
               User clonedUser = this.getClonedObject(foundUser);
               return clonedUser;
           }else {
               return null;
           }
        } else {
            throw new PreConditionalFailed("This email : '" + login.getEmail() + "' does not exist");
        }
    }

    /**
     * To clone a use
     * @param savedUser
     * @return
     */
    @Override
    public User getClonedObject(User savedUser) {
        User clonedUser = new User();
        clonedUser.setId(savedUser.getId());
        clonedUser.setBirthDate(savedUser.getBirthDate());
        clonedUser.setEmail(savedUser.getEmail());
        clonedUser.setFirstName(savedUser.getFirstName());
        clonedUser.setLastName(savedUser.getLastName());
        clonedUser.setGender(savedUser.getGender());
        clonedUser.setInterests(savedUser.getInterests());
        clonedUser.setProfilePicture(savedUser.getProfilePicture());
        clonedUser.setInterests(savedUser.getInterests());
        clonedUser.setPassword("*********");
        return clonedUser;
    }

    //
//    public String hash(String password) {
//        return BCrypt.hashpw(password, BCrypt.gensalt(logRounds));
//    }
//
//    public boolean verifyHash(String password, String hash) {
//        return BCrypt.checkpw(password, hash);
//    }


}
