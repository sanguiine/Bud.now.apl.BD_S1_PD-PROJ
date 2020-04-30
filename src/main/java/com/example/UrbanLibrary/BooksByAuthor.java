package com.example.UrbanLibrary;

import javax.persistence.*;

@Table(name = "BooksbyAuthor")
public class BooksByAuthor {
    //klucz obcy z Authors
    @Column(name = "authorID", nullable = false)
    private long authorID;
    //klucz obcy z Books
    @Column(name = "bookID", nullable = false)
    private long bookID;

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
                "authorID=" + authorID +
                ", bookID=" + bookID +
                '}';
    }
}