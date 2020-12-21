package server.repositories;

import java.util.List;

public interface EntityRepository<T extends Identifiable> {

    List<T> findAll();

    T findById(long id);

    T saveOrUpdate(T t);

    boolean deleteById(long id);

    List<T> findByQuery(String queryName, Object... params);

}
