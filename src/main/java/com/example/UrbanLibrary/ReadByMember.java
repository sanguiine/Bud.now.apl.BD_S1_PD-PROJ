package com.example.UrbanLibrary;

import javax.persistence.*;

@Entity
@Table(name = "ReadByMember")
public class ReadByMember {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "readByMemberID", nullable = false, unique = true)
    private long readByMemberID;

    //klucz obcy z Books
    @Column(name = "bookID", nullable = false)
    private long bookID;
    //klucz obcy z Members
    @Column(name = "memberID", nullable = false)
    private long memberID;
    @Column(name = "rate")
    private int rate;

    public long getReadByMemberID() {
        return readByMemberID;
    }

    public void setReadByMemberID(long readByMemberID) {
        this.readByMemberID = readByMemberID;
    }

    public long getBookID() {
        return bookID;
    }

    public void setBookID(long bookID) {
        this.bookID = bookID;
    }

    public long getMemberID() {
        return memberID;
    }

    public void setMemberID(long memberID) {
        this.memberID = memberID;
    }

    public int getRate() {
        return rate;
    }

    public void setRate(int rate) {
        this.rate = rate;
    }

    @Override
    public String toString() {
        return "ReadByMember{" +
                "readByMemberID=" + readByMemberID +
                ", bookID=" + bookID +
                ", memberID=" + memberID +
                ", rate=" + rate +
                '}';
    }
}