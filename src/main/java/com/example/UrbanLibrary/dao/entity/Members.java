package com.example.UrbanLibrary.dao.entity;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "Members")
public class Members {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "memberID", nullable = false, unique = true)
    private long memberID;

    @Column(name = "firstName", nullable = false)
    private String firstNname;
    @Column(name = "lastName", nullable = false)
    private String lastName;
    @Column(name = "birthDate", nullable = false)
    private LocalDate birthDate;
    @Column(name = "city")
    private String city;
    @Column(name = "zipCode")
    private String zipCode;
    @Column(name = "address")
    private String address;
    @Column(name = "phoneNumber")
    private String phoneNumber;
    @Column(name = "email", nullable = false)
    private String email;
    @Column(name = "password", nullable = false)
    private String password;
    @Column(name = "role")
    private String role;

    @OneToMany(mappedBy = "member")
    private List<ReadByMember> readByMemberList;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.REMOVE, orphanRemoval = true, mappedBy = "member")
    private List<Loans> loansList;

    public Members()
    {

    }

    public Members(String firstName, String lastName, LocalDate birthDay, String city, String zipCode,
                   String address, String phoneNumber, String email, String password, String role)
    {
        this.firstNname = firstName;
        this.lastName = lastName;
        this.birthDate = birthDay;
        this.city = city;
        this.zipCode = zipCode;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.password = password;
        this.role = role;
    }



    public long getMemberID() {
        return memberID;
    }

    public void setMemberID(long memberID) {
        this.memberID = memberID;
    }

    public String getFirstNname() {
        return firstNname;
    }

    public void setFirstNname(String firstNname) {
        this.firstNname = firstNname;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<ReadByMember> getReadByMemberList() {
        return readByMemberList;
    }

    public void setReadByMemberList(List<ReadByMember> readByMemberList) {
        this.readByMemberList = readByMemberList;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public List<Loans> getLoansList() {
        return loansList;
    }

    public void setLoansList(List<Loans> loansList) {
        this.loansList = loansList;
    }

    @Override
    public String toString() {
        return "Members{" +
                "memberID=" + memberID +
                ", firstNname='" + firstNname + '\'' +
                ", lastName='" + lastName + '\'' +
                ", birthDate=" + birthDate +
                ", city='" + city + '\'' +
                ", zipCode='" + zipCode + '\'' +
                ", address='" + address + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}