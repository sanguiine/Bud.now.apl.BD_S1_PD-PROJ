package com.example.UrbanLibrary.dao.entity;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Entity
@Table(name = "Loans")
public class Loans {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "loanID", nullable = false, unique = true)
    private long loanID;

    //klucz obcy z Books
    @OneToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="bookID")
    private Books book;
    //klucz obcy z Members
    @ManyToOne
    @JoinColumn(name = "memberID")
    private Members member;
    @Column(name = "dateLoaned", nullable = false)
    private LocalDate dateLoaned;
    @Column(name = "dateReturned")
    private LocalDate dateReturned;

    public Loans()
    {

    }
    public Loans(Books book, Members member, LocalDate dateLoaned, LocalDate dateReturned)
    {
        this.book = book;
        this.member = member;
        this.dateLoaned = dateLoaned;
        this.dateReturned = dateReturned;
    }

    public long getLoanID() {
        return loanID;
    }

    public void setLoanID(long loanID) {
        this.loanID = loanID;
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

    public LocalDate getDateLoaned() {
        return dateLoaned;
    }

    public void setDateLoaned(LocalDate dateLoaned) {
        this.dateLoaned = dateLoaned;
    }

    public LocalDate getDateReturned() {
        return dateReturned;
    }

    public void setDateReturned(LocalDate dateReturned) {
        this.dateReturned = dateReturned;
    }

    @Override
    public String toString() {
        return "Loans{" +
                "loanID=" + loanID +
                ", stockID=" + book +
                ", memberID=" + member +
                ", dateLoaned=" + dateLoaned +
                ", dateReturned=" + dateReturned +
                '}';
    }
}