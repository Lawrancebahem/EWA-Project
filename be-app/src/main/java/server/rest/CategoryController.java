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
    @Qualifier("categoryRepositoryJpa")
    private EntityRepository<Category> categoryEntityRepositoryJpa;

    @Autowired
    @Qualifier("activityRepositoryJpa")
    private EntityRepository<Activity> activityRepositoryJpa;


    @GetMapping("/all")
    public List<Category> getAllCategories() {
        return this.categoryEntityRepositoryJpa.findAll();
    }

    @PostMapping("/add-category")
    public boolean addNewCategory(@RequestBody Category category) {
        categoryEntityRepositoryJpa.saveOrUpdate(category);
        return true;
    }

    @GetMapping("/all/{idCategory}")
    public List<Activity> getActivitiesForCategory(@PathVariable long idCategory){
        return this.activityRepositoryJpa.getActivitiesForCategory(idCategory);
    }
}
