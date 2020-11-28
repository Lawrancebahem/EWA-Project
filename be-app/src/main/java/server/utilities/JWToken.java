package server.utilities;

import io.jsonwebtoken.*;

import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;

public class JWToken {
  public static final String JWT_ATTRIBUTE_NAME = "JWTokenInfo";
  private static final String JWT_USERID_CLAIM = "id";
  private static final String JWT_ADMIN_CLAIM = "admin";
  private static final String JWT_FIRST_NAME_CLAIM = "fir";
  private static final String JWT_LAST_NAME_CLAIM = "las";
  private static final String JWT_EMAIL_CLAIM = "em";


  private long id;

  private String firstName;
  private String lastName;
  private String email;
  private boolean admin;

  public JWToken(long id, String firstName, String lastName, String email, boolean admin) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;

    this.email = email;
    this.admin = admin;
  }

  public String encode(String issuer, String passPhrase, int expiration){
    Key key = getKey(passPhrase);
    String token = Jwts.builder()
                    .claim(JWT_USERID_CLAIM, this.id)
                    .claim(JWT_FIRST_NAME_CLAIM, this.firstName)
                    .claim(JWT_LAST_NAME_CLAIM, this.lastName)
                    .claim(JWT_EMAIL_CLAIM, this.email)
                    .claim(JWT_ADMIN_CLAIM, this.admin)
                    .setIssuer(issuer)
                    .setIssuedAt(new Date())
                    .setExpiration(new Date(System.currentTimeMillis() + expiration * 1000))
                    .signWith(key, SignatureAlgorithm.HS512)
                    .compact();

    return token;
  }


  public static JWToken decode(String token, String passPhrase){


    try {
      Key key = getKey(passPhrase);
      Jws<Claims> jws = Jwts.parser().setSigningKey(key).parseClaimsJws(token);
      Claims claims = jws.getBody();
      JWToken jwToken = new JWToken(
              Long.parseLong(claims.get(JWT_USERID_CLAIM).toString()),
              claims.get(JWT_FIRST_NAME_CLAIM).toString(),
              claims.get(JWT_LAST_NAME_CLAIM).toString(),
              claims.get(JWT_EMAIL_CLAIM).toString(),
              (boolean) claims.get(JWT_ADMIN_CLAIM)
      );



      return jwToken;
    }catch (ExpiredJwtException | UnsupportedJwtException | IllegalArgumentException E){
      return null;
    }
  }

  private static Key getKey(String passPhrase){
    byte [] hmacKey = passPhrase.getBytes(StandardCharsets.UTF_8);
    Key key = new SecretKeySpec(hmacKey, SignatureAlgorithm.HS512.getJcaName());
    return key;
  }


  public static String getJwtAttributeName() {
    return JWT_ATTRIBUTE_NAME;
  }

  public static String getJwtUseridClaim() {
    return JWT_USERID_CLAIM;
  }

  public static String getJwtAdminClaim() {
    return JWT_ADMIN_CLAIM;
  }

  public static String getJwtFirstNameClaim() {
    return JWT_FIRST_NAME_CLAIM;
  }

  public static String getJwtLastNameClaim() {
    return JWT_LAST_NAME_CLAIM;
  }


  public static String getJwtEmailClaim() {
    return JWT_EMAIL_CLAIM;
  }

  public boolean isAdmin() {
    return admin;
  }

  public long getId() {
    return id;
  }

  public String getFirstName() {
    return firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public String getEmail() {
    return email;
  }
}
