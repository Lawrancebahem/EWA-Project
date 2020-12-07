package server.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;
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


    @GetMapping("/all")
    public List<Category> getAllCategories() {
        return this.categoryEntityRepositoryJpa.findAll();
    }

    @PostMapping("/add-category-as-admin")
    public void addNewCategory(@RequestBody Category category) {
        categoryEntityRepositoryJpa.saveOrUpdate(category);
    }
}
