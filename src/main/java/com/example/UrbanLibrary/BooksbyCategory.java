package com.example.UrbanLibrary;

import javax.persistence.*;

@Table(name = "BooksByCategory")
public class BooksbyCategory {
    //klucz obcy z Categories
    @Column(name = "categoryID", nullable = false)
    private long categoryID;
    //klucz obcy z Books
    @Column(name = "bookID", nullable = false)
    private long bookID;

    public long getCategoryID() {
        return categoryID;
    }

    public void setCategoryID(long categoryID) {
        this.categoryID = categoryID;
    }

    public long getBookID() {
        return bookID;
    }

    public void setBookID(long bookID) {
        this.bookID = bookID;
    }

    @Override
    public String toString() {
        return "BooksbyCategory{" +
                "categoryID=" + categoryID +
                ", bookID=" + bookID +
                '}';
    }
}
