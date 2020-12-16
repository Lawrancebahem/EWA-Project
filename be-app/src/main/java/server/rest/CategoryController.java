package server.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;
import server.models.Activity;
import server.models.Category;
import server.repositories.ActivityRepositoryJpa;
import server.repositories.CategoryRepositoryJpa;

import java.util.List;

//@CrossOrigin(origins = {"http://localhost:4200", "https://digital-life-frontend-staging.herokuapp.com"})
@RestController
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    @Qualifier("activityRepositoryJpa")
    private ActivityRepositoryJpa activityRepositoryJpa;

    @Autowired
    @Qualifier("categoryRepositoryJpa")
    private CategoryRepositoryJpa categoryEntityRepositoryJpa;

    @GetMapping("/all")
    public List<Category> getAllCategories() {
        return this.categoryEntityRepositoryJpa.findAll();
    }

    @PostMapping("/add-category")
    public Category addNewCategory(@RequestBody Category category) {
        return categoryEntityRepositoryJpa.saveOrUpdate(category);
    }

    @GetMapping("/delete/{idCategory}")
    public boolean deleteCategory(@PathVariable long idCategory){
        Category foundCategory = this.categoryEntityRepositoryJpa.findById(idCategory);
        if (foundCategory != null){
            for (Activity activity : foundCategory.getActivities()) {
                Activity foundActivity = this.activityRepositoryJpa.findById(activity.getId());
                foundActivity.getCategories().clear();
                this.activityRepositoryJpa.saveOrUpdate(foundActivity);
            }
            this.categoryEntityRepositoryJpa.deleteById(idCategory);
            return true;
        }
        return false;
    }

    @GetMapping("/all/activityForCategory")
    public List<Object[]> getActivitiesForCategory(){
        return this.activityRepositoryJpa.getActivitiesForCategory();
    }

    @GetMapping("/activity/all/{id}")
    public List<Object[]> getAllActivitiesForThisCategory(@PathVariable long id){
        return this.categoryEntityRepositoryJpa.getAllActivitiesForThisCategory(id);
    }

}
