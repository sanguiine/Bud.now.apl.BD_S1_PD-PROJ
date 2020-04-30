package com.example.UrbanLibrary;

import javax.persistence.*;

@Table(name = "ReadByMember")
public class ReadByMember {
    //klucz obcy z Books
    @Column(name = "bookID", nullable = false)
    private long bookID;
    //klucz obcy z Members
    @Column(name = "memberID", nullable = false)
    private long memberID;
    @Column(name = "rate")
    private int rate;

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
                "bookID=" + bookID +
                ", memberID=" + memberID +
                ", rate=" + rate +
                '}';
    }
}