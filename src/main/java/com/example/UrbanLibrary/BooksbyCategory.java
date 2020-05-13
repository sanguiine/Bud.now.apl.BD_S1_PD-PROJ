package com.example.UrbanLibrary;

import javax.persistence.*;

@Entity
@Table(name = "BooksByCategory")
public class BooksbyCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "booksByCategoryID", nullable = false, unique = true)
    private long booksByCategoryID;

    //klucz obcy z Categories
    @Column(name = "categoryID", nullable = false)
    private long categoryID;
    //klucz obcy z Books
    @Column(name = "bookID", nullable = false)
    private long bookID;

    public long getBooksByCategoryID() {
        return booksByCategoryID;
    }

    public void setBooksByCategoryID(long booksByCategoryID) {
        this.booksByCategoryID = booksByCategoryID;
    }

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
                "booksByCategoryID=" + booksByCategoryID +
                ", categoryID=" + categoryID +
                ", bookID=" + bookID +
                '}';
    }
}
