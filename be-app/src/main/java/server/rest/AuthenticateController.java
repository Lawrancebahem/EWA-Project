package server.rest;


import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import server.exception.PreConditionalFailed;
import server.exception.UnAuthorizedException;
import server.models.Login;
import server.models.User;
import server.repositories.EntityRepository;
import server.service.APIConfiguration;
import server.utilities.JWToken;

import javax.naming.AuthenticationException;
import javax.servlet.http.HttpServletRequest;
import java.net.URI;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/authenticate")
public class AuthenticateController {


    @Autowired
    APIConfiguration apiConfig;

    @Autowired
    @Qualifier("userRepositoryJpa")
    public EntityRepository<User> userRepositoryJpa;

    /**
     * Authenticate logging in
     * @param signInfo
     * @param request
     * @return
     */
    @PostMapping(value = "/login", produces = "application/json")
    public ResponseEntity<User> authenticate(@RequestBody ObjectNode signInfo, HttpServletRequest request) {
        String email = signInfo.get("email").asText();
        String password = signInfo.get("password").asText();
        Login login = new Login(email, password);
        User user = userRepositoryJpa.authenticateLogin(login);
        if (user != null) {
            return this.getResponseBodyJWToken(user);
        } else {
            throw new UnAuthorizedException("Cannot authenticate user by email " + email + " and password #" + password.length());
        }
    }

    /**
     * @param user
     * @return
     */
    @PostMapping(value = "/register", produces = "application/json")
    public ResponseEntity<User> authenticateRegistration(@RequestBody User user) {
        User foundUserByEmail = this.userRepositoryJpa.findByEmail(user.getEmail());
        if (foundUserByEmail != null)
            throw new PreConditionalFailed("This email : '" + user.getEmail() + "' is already in use");
        this.userRepositoryJpa.saveOrUpdate(user);
        return this.getResponseBodyJWToken(user);
    }

    @PostMapping("/token-refresh")
    public ResponseEntity<User> refreshToken(HttpServletRequest request) throws AuthenticationException {
        String encryptedToken = request.getHeader(HttpHeaders.AUTHORIZATION);
        encryptedToken = encryptedToken.replace("Bearer", "");
        JWToken userJwToken = JWToken.decode(encryptedToken, apiConfig.getPassPhrase());
        if (userJwToken == null) throw new UnAuthorizedException("The token is not valid");
        if (!JWToken.isRenewable(userJwToken,apiConfig.getRefreshExpiration())){
            throw new AuthenticationException("Token is not renewable");
        }
        JWToken newToken = new JWToken(userJwToken.getId(), userJwToken.getFirstName(), userJwToken.getLastName(), userJwToken.getEmail(),userJwToken.isAdmin());
        String refreshedToken = newToken.encode(apiConfig.getIssuer(), apiConfig.getPassPhrase(), apiConfig.getRefreshExpiration());
        return ResponseEntity.ok().header(HttpHeaders.AUTHORIZATION, "Bearer " + refreshedToken).build();
    }

    /**
     * Helper method to encode a JWToken and to avoid duplicate code
     * @param user
     * @return
     */
    private ResponseEntity<User> getResponseBodyJWToken(User user) {
        JWToken jwToken = new JWToken(user.getId(), user.getFirstName(), user.getLastName(), user.getEmail(), user.isAdmin());
        String tokenString = jwToken.encode(this.apiConfig.getIssuer(), this.apiConfig.getPassPhrase(),
                this.apiConfig.getTokenDurationOfValidity());
        User clonedObject = this.userRepositoryJpa.getClonedObject(user);
        return ResponseEntity.accepted().header(HttpHeaders.AUTHORIZATION, "Bearer " + tokenString).body(clonedObject);
    }

}
