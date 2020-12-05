package server.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import server.exception.UnAuthorizedException;
import server.utilities.JWToken;

import javax.servlet.http.HttpServletRequest;

@Configuration
@EnableWebMvc
public class APIConfiguration implements WebMvcConfigurer {

    @Value("${jwt.issuer}")
    private String issuer;

    @Value("${jwt.pass-phrase:this is very very secret}")
    private String passPhrase;

    @Value("${jwt.duration-of-validity}")
    public int tokenDurationOfValidity;

    @Value("${jwt.refresh-expiration-seconds}")
    private int refreshExpiration;

    public String getIssuer() {
        return issuer;
    }

    public String getPassPhrase() {
        return passPhrase;
    }

    public int getTokenDurationOfValidity() {
        return tokenDurationOfValidity;
    }

    public int getRefreshExpiration() {
        return refreshExpiration;
    }

    /**
     * To get the user JWToken decoded
     * @param request
     * @return
     */
    public JWToken getUserJWTokenDecoded(HttpServletRequest request) {
        String encryptedToken = request.getHeader(HttpHeaders.AUTHORIZATION);
        encryptedToken = encryptedToken.replace("Bearer", "");
        System.out.println("The enc " + encryptedToken);
        JWToken userJwToken = JWToken.decode(encryptedToken, getPassPhrase());
        if (userJwToken == null) throw new UnAuthorizedException("The token is not valid");
        return userJwToken;
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowCredentials(true)
                .allowedHeaders(HttpHeaders.AUTHORIZATION, HttpHeaders.CONTENT_TYPE)
                .exposedHeaders(HttpHeaders.AUTHORIZATION, HttpHeaders.CONTENT_TYPE)
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedOrigins("http://localhost:4200", "https://digital-life-frontend-staging.herokuapp.com");
    }

}
