package com.example.UrbanLibrary.dao.entity;

import javax.persistence.*;

@Entity
@Table(name = "ReadByMember")
public class ReadByMember {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "readByMemberID", nullable = false, unique = true)
    private long readByMemberID;

    //klucz obcy z Books
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "bookID")
    private Books books;
    //klucz obcy z Members
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "memberID")
    private Members memberRead;
    @Column(name = "rate")
    private int rate;

    public ReadByMember()
    {

    }

    public ReadByMember(Members member, Books book, int rate)
    {
        this.memberRead = member;
        this.books = book;
        this.rate = rate;
    }

    public long getReadByMemberID() {
        return readByMemberID;
    }

    public void setReadByMemberID(long readByMemberID) {
        this.readByMemberID = readByMemberID;
    }

    public Books getBooks() { return books; }

    public void setBooks(Books books) { this.books = books; }

    public Members getMemberRead() {
        return memberRead;
    }

    public void setMemberRead(Members memberRead) {
        this.memberRead = memberRead;
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
                ", member=" + memberRead +
                ", rate=" + rate +
                '}';
    }
}