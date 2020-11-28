package server.repositories;

import org.springframework.stereotype.Service;
import server.exception.PreConditionalFailed;
import server.models.Login;
import server.models.User;

import javax.persistence.Query;
import javax.transaction.Transactional;

@Service("userRepositoryJpa")
@Transactional
public class UserRepositoryJpa extends AbstractEntityRepositoryJpa<User> {


    public UserRepositoryJpa() {
        super(User.class);
    }


    /**
     * find a user by a email, if is the email does not exist return null
     * @param email
     * @return
     */
    @Override
    public User findByEmail(String email) {
        try {
            Query query = em.createNamedQuery("FindByEmail");
            query.setParameter("email", email.toLowerCase().trim());
            User user = (User) query.getSingleResult();
            return user;
        } catch (Exception x) {
            return null;
        }
    }

    /**
     * authenticate login and give a cloned user without the hidden password
     * @param login
     * @return
     */
    @Override
    public User authenticateLogin(Login login) {
        User foundUser = findByEmail(login.getEmail().trim()); // check the email
        if (foundUser == null) throw new PreConditionalFailed("The email does not exist: " + login.getEmail());// throw an error if the email is not found
        Query query = em.createNamedQuery("AuthenticateLogin");
        query.setParameter("email", login.getEmail().toLowerCase().trim());
        query.setParameter("password", login.getPassword().toLowerCase().trim());
        User user = (User) query.getSingleResult();
        if (user != null) {
            return getClonedObject(user); // return a cloned object if the email and the password meet the ones in the database
        } else {
            return null;
        }
    }

    /**
     * To clone a user object, and converting the password to stars
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
        clonedUser.setAdmin(savedUser.isAdmin());
        clonedUser.setPassword("*********");
        return clonedUser;
    }
}
