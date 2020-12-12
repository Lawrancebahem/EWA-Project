package server.repositories;

import org.springframework.stereotype.Service;
import server.models.Category;

import javax.transaction.Transactional;
import java.util.List;

@Service("categoryRepositoryJpa")
@Transactional
public class CategoryRepositoryJpa extends AbstractEntityRepositoryJpa<Category> {

    public CategoryRepositoryJpa() {
        super(Category.class);
    }

    public List<Object[]> getAllActivitiesForThisCategory(long id){
        return this.em.createNativeQuery("select a.*  from activity a " +
                "join activity_category ac on a.idactivity = ac.idactivity " +
                "where ac.idcategory = ?1")
                .setParameter(1, id)
                .getResultList();
    }
}
