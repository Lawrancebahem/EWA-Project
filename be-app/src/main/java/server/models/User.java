package server.models;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
public class User {

    @Id
    @GeneratedValue
    private long id;
    @Transient
    public static long uniqueId = 100;
    private String firstName;
    private String lastName;
    private LocalDate birthDate;
    @Enumerated(EnumType.STRING)
    private Gender gender;
    private String profilePicture;
    private String email;
    private String password;

    @ManyToMany
    @JoinTable(
            name = "user_interest",
            joinColumns = @JoinColumn(name = "name"),
            inverseJoinColumns = @JoinColumn(name = "id")
    )
    private List<Interest> interests;

    public User() {
//        this.id = uniqueId++;
        this.firstName = "firstName";
        this.lastName = "lastName";
        this.birthDate = LocalDate.now();
        this.gender = Gender.MAN;
        this.profilePicture = "profilePicture";
        this.password = "password";
        this.interests = new ArrayList<>();
        this.email = "";
    }

    public long getId() {
        return id;
    }

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
