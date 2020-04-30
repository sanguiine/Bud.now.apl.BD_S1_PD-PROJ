package com.example.UrbanLibrary;

import javax.persistence.*;

@Entity
@Table(name = "BooksInStock")
public class BooksInStock {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "stockID", nullable = false, unique = true)
    private long stockID;

    //klucz obcy z Books
    @Column(name = "bookID", nullable = false)
    private long bookID;
    @Column(name = "bookNumber", nullable = false)
    private long bookNumber;

    public long getBookID() {
        return bookID;
    }

    public void setBookID(long bookID) {
        this.bookID = bookID;
    }

    public long getBookNumber() {
        return bookNumber;
    }

    public void setBookNumber(long bookNumber) {
        this.bookNumber = bookNumber;
    }

    @Override
    public String toString() {
        return "BooksInStock{" +
                "bookID=" + bookID +
                ", bookNumber=" + bookNumber +
                '}';
    }
}