package com.example.UrbanLibrary;

import javax.persistence.*;

@Entity
@Table(name = "BooksByAuthor")
public class BooksByAuthor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "booksByAuthorID", nullable = false, unique = true)
    private long booksByAuthorID;

    //klucz obcy z Authors
    @Column(name = "authorID", nullable = false)
    private long authorID;
    //klucz obcy z Books
    @Column(name = "bookID", nullable = false)
    private long bookID;

    public long getBooksByAuthorID() {
        return booksByAuthorID;
    }

    public void setBooksByAuthorID(long booksByAuthorID) {
        this.booksByAuthorID = booksByAuthorID;
    }

    public long getAuthorID() {
        return authorID;
    }

    public void setAuthorID(long authorID) {
        this.authorID = authorID;
    }

    public long getBookID() {
        return bookID;
    }

    public void setBookID(long bookID) {
        this.bookID = bookID;
    }

    @Override
    public String toString() {
        return "BooksByAuthor{" +
                "booksByAuthorID=" + booksByAuthorID +
                ", authorID=" + authorID +
                ", bookID=" + bookID +
                '}';
    }
}