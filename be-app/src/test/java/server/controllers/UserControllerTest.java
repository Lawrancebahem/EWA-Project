package server.controllers;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.junit.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.junit4.SpringRunner;
import server.exception.ResourceNotFound;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

/**
 *
 * To test resetting a password by email
 * @author Lawrance Bahem
 */
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@RunWith(SpringRunner.class)
@ExtendWith(SpringExtension.class)
public class UserControllerTest {

    @Autowired
    private TestRestTemplate restTemplate;


    /**
     * Test if the reset password works properly
     */
    @Test
    public void restPasswordForExistedUser() {

        ObjectMapper mapper = new ObjectMapper();
        ObjectNode root = mapper.createObjectNode();
        root.put("email", "lawrance@gmail.com");
        ResponseEntity<Boolean> booleanResponseEntity = restTemplate.postForEntity("/user/reset-password", root, Boolean.class);
        assertTrue(booleanResponseEntity.getBody().booleanValue());
    }

    /**
     * Test if a user is trying to reset a password for none existing email
     */
    @Test
    public void restPasswordForNoneExistedUser() {

        ObjectMapper mapper = new ObjectMapper();
        ObjectNode root = mapper.createObjectNode();
        root.put("email", "wwwlawrancewww@gmail.com");
        ResponseEntity<ResourceNotFound> booleanResponseEntity = restTemplate.postForEntity("/user/reset-password", root, ResourceNotFound.class);
        assertEquals(booleanResponseEntity.getStatusCode(), HttpStatus.NOT_FOUND);
    }
}
