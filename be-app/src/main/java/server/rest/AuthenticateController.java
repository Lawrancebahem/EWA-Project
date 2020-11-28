package server.rest;


import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import server.exception.UnAuthorizedException;
import server.models.Login;
import server.models.User;
import server.repositories.EntityRepository;
import server.service.ConfigureAbleFactoryBean;
import server.utilities.JWToken;

import javax.servlet.http.HttpServletRequest;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/authenticate")
public class AuthenticateController {


  @Autowired
  ConfigureAbleFactoryBean apiConfig;

  @Autowired
  @Qualifier("userRepositoryJpa")
  public EntityRepository<User> userRepositoryJpa;

  @PostMapping(value = "/login", produces = "application/json")
  public ResponseEntity<User> authenticate(@RequestBody ObjectNode signInfo, HttpServletRequest request) {
    String email = signInfo.get("email").asText();
    String password = signInfo.get("password").asText();
    Login login = new Login(email,password);
    User user = userRepositoryJpa.authenticateLogin(login);
    if (user != null) {
      JWToken jwToken = new JWToken(user.getId(), user.getFirstName(), user.getLastName(), user.getEmail(),user.isAdmin());
      String tokenString = jwToken.encode(this.apiConfig.getIssuer(), this.apiConfig.getPassPhrase(),
        this.apiConfig.getTokenDurationOfValidity());
      return ResponseEntity.accepted().header(HttpHeaders.AUTHORIZATION, "Bearer " + tokenString).body(user);
    } else {
      throw new UnAuthorizedException("Cannot authenticate user by email " + email + " and password #" + password.length());
    }
  }

}
