package server.utilities;

import io.jsonwebtoken.*;
import server.exception.AuthorizationException;

import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Calendar;
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
  private Date issuedAt;
  private Date expiration;

  public JWToken(long id, String firstName, String lastName, String email, boolean admin) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.admin = admin;
  }

  /**
   * build a token of the the id, firstname, lastname, email and admin instances of the user
   * @param issuer
   * @param passPhrase
   * @param expiration
   * @return
   */
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


  /**
   * Decode the JWToken, based on the passphrase of the profile properties
   * @param token
   * @param passPhrase
   * @return
   */
  public static JWToken decode(String token, String passPhrase, boolean extendTime){

    try {
      Key key = getKey(passPhrase);
      Jws<Claims> jws = Jwts.parser().setSigningKey(key).parseClaimsJws(token);
      Claims claims = jws.getBody();

       return generateTokenInfo(claims);


    } catch (MalformedJwtException |
            UnsupportedJwtException | IllegalArgumentException| SignatureException e) {
      throw new AuthorizationException(e.getMessage());
    } catch(ExpiredJwtException e) {
      if(!extendTime) {
        throw new AuthorizationException(e.getMessage());
      } else {
        return generateTokenInfo(e.getClaims());
      }
    }
  }

  /**
   * Generate token based on the given claims
   * @param claims
   * @return
   */
  private static JWToken generateTokenInfo(Claims claims) {

    JWToken jwToken = new JWToken(
            Long.parseLong(claims.get(JWT_USERID_CLAIM).toString()),
            claims.get(JWT_FIRST_NAME_CLAIM).toString(),
            claims.get(JWT_LAST_NAME_CLAIM).toString(),
            claims.get(JWT_EMAIL_CLAIM).toString(),
            (boolean) claims.get(JWT_ADMIN_CLAIM)
    );
    jwToken.setExpiration(claims.getExpiration());
    jwToken.setIssuedAt(claims.getIssuedAt());

    return jwToken;
  }


  /**
   * Get the key in HS512
   * @param passPhrase
   * @return
   */
  private static Key getKey(String passPhrase){
    byte [] hmacKey = passPhrase.getBytes(StandardCharsets.UTF_8);
    Key key = new SecretKeySpec(hmacKey, SignatureAlgorithm.HS512.getJcaName());
    return key;
  }

  /**
   * To check if a token is still renewable
   * @param tokenInfo
   * @param refreshExpiration
   * @return
   */
  public static boolean isRenewable(JWToken tokenInfo, int refreshExpiration) {
    // If token is still valid there is no reason to issue a new one
    if(tokenInfo.getExpiration().compareTo(new Date()) > 0) {
      return false;
    }

    // Calculating the refresh time limit
    Calendar cal = Calendar.getInstance();
    cal.setTime(tokenInfo.getIssuedAt());
    cal.add(Calendar.SECOND,refreshExpiration);

    System.out.println("max refresh: " + cal.getTime());
    System.out.println("current date: " + new Date());

    // max refresh time should be greater than current time
    return cal.getTime().compareTo(new Date()) > 0;
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


  public void setIssuedAt(Date issuedAt) {
    this.issuedAt = issuedAt;
  }

  public void setExpiration(Date expiration) {
    this.expiration = expiration;
  }

  public Date getIssuedAt() {
    return issuedAt;
  }

  public Date getExpiration() {
    return expiration;
  }
}
