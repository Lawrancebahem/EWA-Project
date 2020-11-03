package server.models;

import java.time.LocalDate;

public class User {

    private long id;
    public static long uniqueId = 100;
    private String firstName;
    private String lastName;
    private LocalDate birthDate;
    private String email;
    private Gender gender;
    private String profilePicture;
    private String password;
    private int interests[];

    public User() {
        this.id = 0;
        this.firstName = "firstName";
        this.lastName = "lastName";
        this.birthDate = LocalDate.now();
        this.gender = Gender.MAN;
        this.profilePicture = "profilePicture";
        this.password = "password";
        this.email = "";
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

    public String getEmail() {
        return email;
    }

    enum Gender {
        MAN,
        WOMAN,
        OTHER
    }
}
