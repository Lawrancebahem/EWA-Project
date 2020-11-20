package server.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import server.repositories.Identifiable;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


@Entity
//Mapping the attributes
@SqlResultSetMapping(name = "userInfo",
        entities = {
                @EntityResult(entityClass = User.class, fields = {
                        @FieldResult(name = "id", column = "ID"),
                        @FieldResult(name = "birthDate", column = "BIRTH_DATE"),
                        @FieldResult(name = "email", column = "EMAIL"),
                        @FieldResult(name = "firstName", column = "FIRST_NAME"),
                        @FieldResult(name = "gender", column = "GENDER"),
                        @FieldResult(name = "lastName", column = "LAST_NAME"),
                        @FieldResult(name = "password", column = "PASSWORD"),
                        @FieldResult(name = "profilePicture", column = "PROFILE_PICTURE"),

                })}
)

@NamedNativeQueries({

        @NamedNativeQuery(
                name = "FindByEmail",
                query = "SELECT * FROM User u WHERE lower(u.email) = :email",
                resultSetMapping = "userInfo"
        ),

        @NamedNativeQuery(
                name = "AuthenticateLogin",
                query = "SELECT * FROM User u WHERE lower(u.email) = :email AND lower(u.password) = :password",
                resultSetMapping = "userInfo"
        )
})
public class User implements Identifiable, Serializable {

    @Id
    @GeneratedValue
    private long id;
    @Transient
    public static long uniqueId = 100;
    private String firstName;
    private String lastName;
    private LocalDate birthDate;
    //    @Enumerated(EnumType.STRING)
    private Gender gender;
    private String profilePicture;
    private String email;
    private String password;

    @JsonIgnore
    @ManyToMany
    @JoinTable(
            name = "user_interest",
            joinColumns = @JoinColumn(name = "id"),
            inverseJoinColumns = @JoinColumn(name = "interest_id")
    )
    private List<Interest> interests;

    public User() {
        this.firstName = "firstName";
        this.lastName = "lastName";
        this.birthDate = LocalDate.now();
        this.gender = Gender.MAN;
        this.profilePicture = "profilePicture";
        this.password = "password";
        this.interests = new ArrayList<>();
        this.email = "";
    }

    @Override
    public long getId() {
        return this.id;
    }

    @Override
    public void setId(long id) {
        this.id = id;
    }

    public static long getUniqueId() {
        return uniqueId;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }


    public LocalDate getBirthDate() {
        return birthDate;
    }

    public Gender getGender() {
        return gender;
    }

    public String getProfilePicture() {
        return profilePicture;
    }

    public String getPassword() {
        return password;
    }


    public static void setUniqueId(long uniqueId) {
        User.uniqueId = uniqueId;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public void setProfilePicture(String profilePicture) {
        this.profilePicture = profilePicture;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Interest> getInterests() {
        return interests;
    }

    public void setInterests(List<Interest> interests) {
        this.interests = interests;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    enum Gender {
        MAN,
        WOMAN,
        OTHER
    }

    public class ShowInfo {

    }


}
