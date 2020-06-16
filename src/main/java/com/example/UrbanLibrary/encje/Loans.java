package com.example.UrbanLibrary.encje;

import javax.persistence.*;
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
    private Date dateLoaned;
    @Column(name = "dateReturned")
    private Date dateReturned;

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

    public Date getDateLoaned() {
        return dateLoaned;
    }

    public void setDateLoaned(Date dateLoaned) {
        this.dateLoaned = dateLoaned;
    }

    public Date getDateReturned() {
        return dateReturned;
    }

    public void setDateReturned(Date dateReturned) {
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