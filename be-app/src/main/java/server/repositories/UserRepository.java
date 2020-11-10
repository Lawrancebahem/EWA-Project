package server.repositories;

import org.springframework.stereotype.Service;
import server.models.User;

import java.util.ArrayList;
import java.util.List;

@Service("userRepository")
public class UserRepository implements EntityRepository<User> {

    private final List<server.models.User> users = new ArrayList<>();


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

    @Override
    public User saveOrUpdate(User user) {
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

    @Override
    public boolean deleteById(long id) {
        return this.users.removeIf(user -> user.getId() == id);
    }
}
