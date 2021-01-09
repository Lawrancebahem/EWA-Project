package server.repository;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.junit4.SpringRunner;
import server.models.Activity;
import server.models.Category;
import server.repositories.ActivityRepositoryJpa;
import server.repositories.CategoryRepositoryJpa;

import static org.junit.Assert.assertNotNull;

@SpringBootTest
@RunWith(SpringRunner.class)
public class ActivityRepositoryTest {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private ActivityRepositoryJpa activityRepositoryJpa;

    @Autowired
    private CategoryRepositoryJpa categoryRepositoryJpa;

    @Test
    @DirtiesContext
    public void testFindingActivity(){
        Activity activity = this.activityRepositoryJpa.findById(1);
        logger.info(activity + "");
        assertNotNull(activity);
    }



    @Test
    @DirtiesContext
    public void testAddingActivities() {
        Activity activity1 = new Activity( 1001, "testActivityTitle", "testActivityDescription", "", "overal");
        Activity activity2 = new Activity( 1002,"activityTitleTest", "activityDescriptionTest", "", "overal");

        Category herfst = categoryRepositoryJpa.findById(27);

        assertNotNull(this.activityRepositoryJpa.saveOrUpdate(activity1));
        assertNotNull(this.activityRepositoryJpa.saveOrUpdate(activity2));


        activity1.getCategories().add(herfst);

        assertNotNull(this.categoryRepositoryJpa.saveOrUpdate(herfst));
        assertNotNull(this.activityRepositoryJpa.saveOrUpdate(activity1));
        assertNotNull(this.activityRepositoryJpa.saveOrUpdate(activity2));
    }

    @Test
    @DirtiesContext
    public void testFindingCategoriesOfActivity(){
        int[] categoryIds = this.activityRepositoryJpa.getActivityCategories(1);
        logger.info(categoryIds + "");
        assertNotNull(categoryIds);
    }
}
