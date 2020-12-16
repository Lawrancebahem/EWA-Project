package server.rest;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;
import server.models.Activity;
import server.models.Category;
import server.models.Interest;
import server.repositories.EntityRepository;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:4200", "https://digital-life-frontend-staging.herokuapp.com","https://digital-life-frontend-prod.herokuapp.com"})
@RestController
@RequestMapping("/activity")
public class ActivityController {

    @Autowired
    @Qualifier("activityRepositoryJpa")
    private EntityRepository<Activity> activityRepositoryJpa;

    @Autowired
    @Qualifier("interestRepositoryJpa")
    public EntityRepository<Interest> interestEntityRepositoryJpa;



    @Autowired
    @Qualifier("categoryRepositoryJpa")
    private EntityRepository<Category> categoryEntityRepositoryJpa;

    /**
     * get all activities
     * @return
     */
    @GetMapping("/all")
    public List<Activity> getAllActivities(){
        return this.activityRepositoryJpa.findAll();
    }


    /**
     * Get a specific activity
     * @param id
     * @return
     */
    @GetMapping("/{id}")
    public Activity getById(@PathVariable long id){
        return activityRepositoryJpa.findById(id);
    }


    @PostMapping("/add-activity")
    public Activity addNewActivity(@RequestBody Activity activity){
        System.out.println("The activity  ********************************************* "  + activity.getId());
        return activityRepositoryJpa.saveOrUpdate(activity);
    }

    /**
     * To insert interests for this activity
     * @param interestsIds
     * @param idActivity
     * @return
     */
    @PostMapping("/add-activity-interests/{idActivity}")
    public boolean addInterestsToActivity(@RequestBody int[] interestsIds,@PathVariable long idActivity) {
        Activity foundActivity = this.activityRepositoryJpa.findById(idActivity);
        for (int interestId : interestsIds) {// loop through the interests id's
            Interest interest = this.interestEntityRepositoryJpa.findById(interestId); // get the interest
            foundActivity.getInterests().add(interest); //add the interest to the activity
            interest.getActivities().add(foundActivity); // add the activities list of interest
            this.interestEntityRepositoryJpa.saveOrUpdate(interest); // add/,merge the interest
        }
        this.activityRepositoryJpa.saveOrUpdate(foundActivity);
        return true;
    }

    /**
     * To insert categroeis for a specific activity
     * @param categoriesIds
     * @param idActivity
     * @return
     */
    @PostMapping("/add-activity-categories/{idActivity}")
    public boolean addCategoriesToActivity(@RequestBody int[] categoriesIds,@PathVariable long idActivity) {
        Activity foundActivity = this.activityRepositoryJpa.findById(idActivity);
        for (int categoryId : categoriesIds) {// loop through the interests id's
            Category category = this.categoryEntityRepositoryJpa.findById(categoryId); // get the interest
            foundActivity.getCategories().add(category); //add the interest to the activity
            category.getActivities().add(foundActivity); // add the activities list of interest
            this.categoryEntityRepositoryJpa.saveOrUpdate(category); // add/,merge the interest
        }
        this.activityRepositoryJpa.saveOrUpdate(foundActivity);
        return true;
    }

    /**
     * To get the interests of a specific activity
     * @param idActivity
     * @return
     */
    @GetMapping("/activity-interests/{idActivity}")
    public int[] getActivityInterests(@PathVariable long idActivity){
        return this.interestEntityRepositoryJpa.getActivityInterests(idActivity);
    }

    /**
     * To get the categories of a specific activity
     * @param idActivity
     * @return
     */
    @GetMapping("/activity-category/{idActivity}")
    public int[] getActivityCategory(@PathVariable long idActivity){
        return this.activityRepositoryJpa.getActivityCategories(idActivity);
    }

    @GetMapping("/delete/{idActivity}")
    public boolean deleteAnActivity(@PathVariable long idActivity){
        Activity toDeleteActivity = this.activityRepositoryJpa.findById(idActivity);
        toDeleteActivity.getInterests().clear();
        toDeleteActivity.getReactions().clear();
        toDeleteActivity.getCategories().clear();

        this.activityRepositoryJpa.saveOrUpdate(toDeleteActivity);

        return this.activityRepositoryJpa.deleteById(idActivity);
    }
}
