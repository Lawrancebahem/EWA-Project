package server.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import server.repositories.Identifiable;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;



//Mapping the attributes
//@SqlResultSetMapping(name = "userInfo",
//        entities = {
//                @EntityResult(entityClass = User.class, fields = {
//                        @FieldResult(name = "id", column = "ID"),
//                        @FieldResult(name = "admin", column = "ADMIN"),
//                        @FieldResult(name = "birthDate", column = "BIRTH_DATE"),
//                        @FieldResult(name = "email", column = "EMAIL"),
//                        @FieldResult(name = "firstName", column = "FIRST_NAME"),
//                        @FieldResult(name = "gender", column = "GENDER"),
//                        @FieldResult(name = "lastName", column = "LAST_NAME"),
//                        @FieldResult(name = "password", column = "PASSWORD"),
//                        @FieldResult(name = "profilePicture", column = "PROFILE_PICTURE"),
//
//                })}
//)

/**
 * Native queries
 * findByEmail: To find a certain user based on email
 * and AuthenticateLogin to authenticate login based on given email and password
 */
//@NamedNativeQueries({
//
//        @NamedNativeQuery(
//                name = "FindByEmail",
//                query = "SELECT * FROM User u WHERE lower(u.email) = :email",
//                resultSetMapping = "userInfo"
//        ),
//
//        @NamedNativeQuery(
//                name = "AuthenticateLogin",
//                query = "SELECT * FROM User u WHERE lower(u.email) = :email AND lower(u.password) = :password",
//                resultSetMapping = "userInfo"
//        )
//})


@NamedQueries({

        @NamedQuery(
                name = "FindByEmail",
                query = "SELECT u FROM User u WHERE lower(u.email) = :email"
        ),

        @NamedQuery(
                name = "AuthenticateLogin",
                query = "SELECT u FROM User u WHERE lower(u.email) = :email AND lower(u.password) = :password"
        )
})

@Entity
@Table(name = "\"user\"")
@SequenceGenerator(name = "userIds", initialValue = 1001)
public class User implements Identifiable, Serializable {

//    @JsonView(ShowInfoAdmin.class)
    @JsonIgnore
    @Id()
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "userIds")
    private long id;
    @Transient
    public static long uniqueId = 100;
    private String firstName;
    private String lastName;
    @JsonSerialize(using = CustomDateSerializer.class)
    private LocalDate birthDate;
//    @JsonIgnoreProperties("user")
    @Enumerated(EnumType.ORDINAL)
    private Gender gender;
    @Column(name = "PROFILE_PICTURE", columnDefinition = "text")
    private String profilePicture;
    private String email;
    private String password;
    private boolean admin;
    private boolean isBlocked;

    //interests
    @JsonIgnore
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "user_interest",
            joinColumns = @JoinColumn(name = "id"),
            inverseJoinColumns = @JoinColumn(name = "interest_id")
    )
    private List<Interest> interests;


//    //activities (fetch type is lazy)
//    @JsonIgnore
//    @ManyToMany
//    @JoinTable(
//            name = "user_activity",
//            joinColumns = @JoinColumn(name = "id"),
//            inverseJoinColumns = @JoinColumn(name = "idactivity")
//    )
//    private List<Activity>activities;

    //Reaction
    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<Reaction> reactions;



    public User() {
        this.firstName = "firstName";
        this.lastName = "lastName";
        this.birthDate = LocalDate.now();
        this.gender = Gender.MAN;
        this.profilePicture = "profilePicture";
        this.password = "password";
        this.interests = new ArrayList<>();
        this.reactions = new ArrayList<>();
        this.email = "";
        this.admin = false;
        this.isBlocked = false;
    }


    public User(String firstName, String lastName, LocalDate birthDate, Gender gender, String profilePicture, String email, String password, boolean admin, boolean isBlocked) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.gender = gender;
        this.profilePicture = profilePicture;
        this.email = email;
        this.password = password;
        this.admin = admin;
        this.interests = new ArrayList<>();
        this.isBlocked = isBlocked;
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

    public boolean isAdmin() {
        return admin;
    }

    public void setAdmin(boolean admin) {
        this.admin = admin;
    }

    public boolean isBlocked() {
        return isBlocked;
    }

    public void setBlocked(final boolean blocked) {
        isBlocked = blocked;
    }


//    public List<Activity> getActivities() {
//        return activities;
//    }
//
//    public void setActivities(List<Activity> activities) {
//        this.activities = activities;
//    }

    public List<Reaction> getReactions() {
        return reactions;
    }

    public void setReactions(List<Reaction> reactions) {
        this.reactions = reactions;
    }

    public enum Gender {
        MAN,
        WOMAN,
        OTHER
    }

    public class ShowInfoAdmin {

    }


}
