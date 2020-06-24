package com.example.UrbanLibrary.dao.entity;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "Books")
public class Books {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bookID", nullable = false, unique = true)
    private long bookID;

    @Column(name = "title", nullable = false)
    private String title;
    @Lob
    @Basic(fetch = FetchType.LAZY)
    @Column(name = "cover")
    private byte[] cover;
    @Column(name = "description")
    private String description;
    @Column(name = "date")
    private LocalDate date;

    @OneToMany(mappedBy = "book")
    private List<ReadByMember> booksReadByMember;

    @ManyToMany
    @JoinTable(
            name="BookCategories",
            joinColumns=@JoinColumn(name="bookID", referencedColumnName="bookID"),
            inverseJoinColumns=@JoinColumn(name="categoryID", referencedColumnName="categoryID")
    )
    private List<Categories> categories;

    @ManyToMany
    @JoinTable(
            name="BookAuthors",
            joinColumns=@JoinColumn(name="bookID", referencedColumnName="bookID"),
            inverseJoinColumns=@JoinColumn(name="authorID", referencedColumnName="authorID")
    )
    private List<Authors> authors;

    public Books()
    {

    }
    public Books(String title, String description, LocalDate date, List<Categories> categories, List<Authors> authors)
    {
        this.title = title;
        this.description = description;
        this.date = date;
        this.categories = categories;
        this.authors = authors;
    }



    public long getBookID() {
        return bookID;
    }

    public void setBookID(long bookID) {
        this.bookID = bookID;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public byte[] getCover() {
        return cover;
    }

    public void setCover(byte[] cover) {
        this.cover = cover;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public List<ReadByMember> getBooksReadByMember() {
        return booksReadByMember;
    }

    public void setBooksReadByMember(List<ReadByMember> booksReadByMember) {
        this.booksReadByMember = booksReadByMember;
    }

    public List<Categories> getCategories() {
        return categories;
    }

    public void setCategories(List<Categories> categories) {
        this.categories = categories;
    }

    public List<Authors> getAuthors() {
        return authors;
    }

    public void setAuthors(List<Authors> authors) {
        this.authors = authors;
    }

    @Override
    public String toString() {
        return "Books{" +
                "bookID=" + bookID +
                ", title='" + title + '\'' +
                ", cover=" + Arrays.toString(cover) +
                ", description='" + description + '\'' +
                ", date=" + date +
                '}';
    }
}