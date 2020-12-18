package server.repositories;

import java.util.List;

public interface EntityRepository<T extends Identifiable> {

    List<T> findAll();

    T findById(long id);

    T saveOrUpdate(T t);

    boolean deleteById(long id);

//    default T getClonedObject(T savedUser) {
//        return null;
//    }
//
//    default T authenticateLogin(Login login) throws AccountLockedException {
//        return null;
//    };
//
//    default T findByEmail(String email) {
//        return null;
//    }
//
//    default int[]getUsersInterests(long userId){
//        return new int[]{};
//    }
//
    List<T> findByQuery(String queryName, Object... params);

//
//    default int[]getActivityInterests(long idActivity){
//        return null;
//    }
//
//    default int[]getActivityCategories(long idActivity){
//        return null;
//    }
//
//    default List<T> getActivityMatches(long userId) {
//        return null;
//    }

}
