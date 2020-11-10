package server.models;

import java.time.LocalDate;

public class User {

    private long id;
    public static long uniqueId = 100;
    private String firstName;
    private String lastName;
    private LocalDate birthDate;
    private Gender gender;
    private String profilePicture;
    private String password;
    private int interests[];

    public User() {
        this.id = uniqueId++;
        this.firstName = "firstName";
        this.lastName = "lastName";
        this.birthDate = LocalDate.now();
        this.gender = Gender.MAN;
        this.profilePicture = "profilePicture";
        this.password = "password";
        this.interests = new int[9];
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

    public int[] getInterests() {
        return interests;
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

    public void setInterests(int[] interests) {
        this.interests = interests;
    }


    enum Gender {
        MAN,
        WOMAN,
        OTHER
    }
}
