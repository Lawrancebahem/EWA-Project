package server.repositories;

import org.springframework.stereotype.Service;
import server.models.Activity;
import server.models.Category;

import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import java.util.List;

@Service("categoryRepositoryJpa")
@Transactional
public class CategoryRepositoryJpa extends AbstractEntityRepositoryJpa<Category> {

    public CategoryRepositoryJpa() {
        super(Category.class);
    }

    @Override
    public List<Category> findByQuery(String queryName, Object... params) {
        TypedQuery<Category> namedQuery = em.createNamedQuery(queryName, Category.class);
        namedQuery.setParameter(1, params[0]);
        return namedQuery.getResultList();
    }
}
