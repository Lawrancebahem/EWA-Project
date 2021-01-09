package server.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

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

//    /**
//     * To get the user JWToken decoded
//     * @param request
//     * @return
//     */
//    public JWToken getUserJWTokenDecoded(HttpServletRequest request) {
//        String encryptedToken = request.getHeader(HttpHeaders.AUTHORIZATION);
//        encryptedToken = encryptedToken.replace("Bearer", "");
//        return JWToken.decode(encryptedToken, getPassPhrase(), false);
//    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowCredentials(true)
                .allowedHeaders(HttpHeaders.AUTHORIZATION, HttpHeaders.CONTENT_TYPE)
                .exposedHeaders(HttpHeaders.AUTHORIZATION, HttpHeaders.CONTENT_TYPE)
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedOrigins("http://localhost:4200",
                        "http://localhost:9876","https://digital-life-frontend-staging.herokuapp.com",
                        "http://localhost:8080","https://digital-life-backend-prod.herokuapp.com");
    }

}
