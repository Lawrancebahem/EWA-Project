package server.rest;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;
import server.models.Activity;
import server.repositories.EntityRepository;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:4200", "https://digital-life-frontend-staging.herokuapp.com"})
@RestController
@RequestMapping("/activity")
public class ActivityController {

    @Autowired
    @Qualifier("activityRepositoryJpa")
    private EntityRepository<Activity> activityRepositoryJpa;


    @GetMapping("/all")
    public List<Activity> getAllActivities(){
        return this.activityRepositoryJpa.findAll();
    }

    @GetMapping("/{id}")
    public List<Activity> getById(@PathVariable long id){ return (List<Activity>)activityRepositoryJpa.findById(id);
    }



    @GetMapping("/{id}")
    public Activity getById(@PathVariable long id){
        return activityRepositoryJpa.findById(id);
    }



    @GetMapping("/{id}")
    public Activity getById(@PathVariable long id){
        return activityRepositoryJpa.findById(id);
    }


    @PostMapping("/add-acitivity-as-user")
    public void addNewActivity(@RequestBody Activity activity){
        activityRepositoryJpa.saveOrUpdate(activity);
    }
}
