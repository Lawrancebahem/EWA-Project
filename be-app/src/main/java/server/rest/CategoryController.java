package server.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import server.models.Activity;
import server.models.Category;
import server.repositories.EntityRepository;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:4200", "https://digital-life-frontend-staging.herokuapp.com"})
@RestController
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    @Qualifier("activityRepositoryJpa")
    private EntityRepository<Activity> activityRepositoryJpa;

    @Autowired
    @Qualifier("categoryRepositoryJpa")
    private EntityRepository<Category> categoryEntityRepositoryJpa;


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
}
