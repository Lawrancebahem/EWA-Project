package server.repositories;


import server.exception.ResourceNotFound;
import server.models.User;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import javax.transaction.Transactional;
import java.util.List;

@Transactional
public abstract class AbstractEntityRepositoryJpa<E extends Identifiable> implements EntityRepository<E> {

    @PersistenceContext
    protected EntityManager em;
    private Class<E> theEntityClass;

    public AbstractEntityRepositoryJpa(Class<E> theEntityClass) {
        this.theEntityClass = theEntityClass;
        System.out.println("Created " + this.getClass().getName() + "<" + this.theEntityClass.getSimpleName()+">");
    }


    /**
     * Return all users
     * @return
     */
    @Override
    public List<E> findAll() {
        CriteriaBuilder builder = em.getCriteriaBuilder();
        CriteriaQuery<E> query = builder.createQuery(theEntityClass);
        Root<E> root = query.from(theEntityClass);
        return em.createQuery(query.select(root)).getResultList();
    }

    @Override
    public E findById(long id) {
        return this.em.find(theEntityClass, id);
    }


    /**
      Save or update an object
     * @param e
     * @return
     */
    @Override
    public E saveOrUpdate(E e) {
        if (e instanceof User){
            User user = (User) e;
            //Check if the profile picture is empty, if yes add the default profile picture
            if (user.getProfilePicture().trim().isEmpty()){
                user.setProfilePicture("/assets/Images/picProfile.png");
            }
        }
        E foundInstance = findById(e.getId());
        if (foundInstance != null) {
            foundInstance = this.em.merge(e);
            return foundInstance;
        }
        this.em.persist(e);
        return e;
    }

    /**
     * delete by id
     * @param id
     * @return
     */
    @Override
    public boolean deleteById(long id) {
        E foundInstance = findById(id);
        if (foundInstance != null) {
            this.em.remove(foundInstance);
            return true;
        }
        throw new ResourceNotFound("The given id does not exist");
    }
}
