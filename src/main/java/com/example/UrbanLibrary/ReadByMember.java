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
    @ManyToOne
    @JoinColumn(name = "bookID")
    private Books book;
    //klucz obcy z Members
    @ManyToOne
    @JoinColumn(name = "memberID")
    private Members member;
    @Column(name = "rate")
    private int rate;

    public long getReadByMemberID() {
        return readByMemberID;
    }

    public void setReadByMemberID(long readByMemberID) {
        this.readByMemberID = readByMemberID;
    }

    public Books getBook() {
        return book;
    }

    public void setBook(Books book) {
        this.book = book;
    }

    public Members getMember() {
        return member;
    }

    public void setMember(Members member) {
        this.member = member;
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
                ", bookID=" + book +
                ", member=" + member +
                ", rate=" + rate +
                '}';
    }
}