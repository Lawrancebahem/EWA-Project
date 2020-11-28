package server.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class ConfigureAbleFactoryBean implements WebMvcConfigurer{

  @Value("${jwt.issuer}")
  private String issuer;

  @Value("${jwt.pass-phrase:this is very very secret}")
  private String passPhrase;

  @Value("${jwt.duration-of-validity}")
  public int tokenDurationOfValidity;


  public String getIssuer() {
    return issuer;
  }

  public String getPassPhrase() {
    return passPhrase;
  }

  public int getTokenDurationOfValidity() {
    return tokenDurationOfValidity;
  }

  @Override
  public void addCorsMappings(CorsRegistry registry) {
    registry.addMapping("/**").allowedOrigins("http://localhost:4200", "https://digital-life-frontend-staging.herokuapp.com");
  }
}
