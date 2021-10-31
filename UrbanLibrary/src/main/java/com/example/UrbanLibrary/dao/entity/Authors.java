package com.example.UrbanLibrary.dao.entity;

import javax.persistence.*;

@Entity
@Table(name = "Authors")
public class Authors {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "authorID", nullable = false, unique = true)
    private long authorID;

    @Column(name = "firstName", nullable = false)
    private String firstName;
    @Column(name = "lastName", nullable = false)
    private String lastName;

    public Authors()
    {

    }

    public Authors(String firstName, String lastName)
    {
        this.firstName = firstName;
        this.lastName = lastName;
    }


    public long getAuthorID() {
        return authorID;
    }

    public void setAuthorID(long authorID) {
        this.authorID = authorID;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @Override
    public String toString() {
        return "Authors{" +
                "authorID=" + authorID +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                '}';
    }
}