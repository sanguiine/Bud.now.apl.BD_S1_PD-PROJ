package com.example.UrbanLibrary;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Loans")
public class Loans {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "loanID", nullable = false, unique = true)
    private long loanID;

    //klucz obcy z BooksInStock
    @Column(name = "stockID", nullable = false)
    private long stockID;
    //klucz obcy z Members
    @Column(name = "memberID", nullable = false)
    private long memberID;
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

    public long getStockID() {
        return stockID;
    }

    public void setStockID(long stockID) {
        this.stockID = stockID;
    }

    public long getMemberID() {
        return memberID;
    }

    public void setMemberID(long memberID) {
        this.memberID = memberID;
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
                ", stockID=" + stockID +
                ", memberID=" + memberID +
                ", dateLoaned=" + dateLoaned +
                ", dateReturned=" + dateReturned +
                '}';
    }
}