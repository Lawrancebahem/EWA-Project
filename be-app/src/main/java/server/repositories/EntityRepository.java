package server.repositories;

import server.models.Login;

import java.util.List;

public interface EntityRepository<T extends Identifiable> {

    List<T> findAll();

    T findById(long id);

    T saveOrUpdate(T t);

    boolean deleteById(long id);

    default T getClonedObject(T savedUser) {
        return null;
    }

    default T authenticateLogin(Login login){
        return null;
    };

    default T findByEmail(String email) {
        return null;
    }

    default int[]getUsersInterests(long userId){
        return new int[]{};
    }

    default List<T> findByQuery(String queryName, Object... params) {
        return null;
    }
}
