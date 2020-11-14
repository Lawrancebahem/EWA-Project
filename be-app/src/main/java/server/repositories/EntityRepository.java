package server.repositories;

import server.models.Login;

import java.util.List;

public interface EntityRepository<T> {


    List<T> findAll();

    T findById(long id);

    default T saveOrUpdate(T t) {
        return null;
    }

    default T findByEmail(String email) {
        return null;
    }

    T authenticateLogin(Login login);

    default boolean deleteById(long id) {
        return false;
    }

    default T getClonedObject(T savedUser){
        return null;
    };
}
