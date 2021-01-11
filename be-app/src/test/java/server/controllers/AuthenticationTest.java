package server.controllers;


import org.junit.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.*;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.RestClientException;
import server.models.Login;
import server.models.User;

import java.util.Objects;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.junit.jupiter.api.Assertions.assertThrows;

/**
 *To test if the user who's sending request, is authorized for a certain request
 * Getting all users with no admin privileges, responding with an error 500
 * Getting all users with admin privileges, responding with Ok 200
 * @author Lawrance Bahem
 */

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@RunWith(SpringRunner.class)
@ExtendWith(SpringExtension.class)
public class AuthenticationTest {

    @Autowired
    private TestRestTemplate restTemplate;

    /**
     * Try to get all users, if the requester not admin, it should return an error
     *(boundary condition)
     * System test
     */
    @Test
    public void shouldGetErrorWhenGettingAllUsersWithNoAdminPrivileges(){

        //Trying to get all users, expect to error(because there will be no response to extract)
        assertThrows(RestClientException.class,()->{
            restTemplate.getForEntity("/user/all", User[].class);
        });


    }

    /**
     * Try to get the all users, with a given token for the admin
     * (boundary condition)
     * System test
     */
    @Test
    public void loginAsAdminAndGetAllUsers(){

        //Log in as admin
        Login loginInfo = new Login("lawrancebahem@gmail.com", "admin");
        ResponseEntity<User> responseEntity = restTemplate.postForEntity("/authenticate/login", loginInfo, User.class);
        //Get the encryptedToken from the header
        String encryptedToken = responseEntity.getHeaders().get(HttpHeaders.AUTHORIZATION).get(0).replace("Bearer","").trim();

        //Crete header, add the bearer to it
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization", "Bearer "+encryptedToken);
        //Make an httpEntity and set the header in it
        HttpEntity<String> httpEntity = new HttpEntity<>("body",headers);
        //Make GET request with the httpEntity, to get all users
        ResponseEntity<User[]> gettingResults =  restTemplate.exchange("/user/all", HttpMethod.GET, httpEntity, User[].class);
        //Check if it's succeeded
        assertEquals(HttpStatus.OK, gettingResults.getStatusCode());
        assertTrue(Objects.requireNonNull(gettingResults.getBody()).length > 0);

//        System.out.println(gettingResults.getBody()[0].getFirstName() +"  the sstatus code");

    }
}
