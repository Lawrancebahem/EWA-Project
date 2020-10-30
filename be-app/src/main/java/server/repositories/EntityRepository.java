package server.repositories;

import java.util.List;

public interface EntityRepository<T> {


    List<T> findAll();

    T findById(long id);

    default T saveOrUpdate(T t) {
        return null;
    }

    default boolean deleteById(long id) {
        return false;
    }
}
