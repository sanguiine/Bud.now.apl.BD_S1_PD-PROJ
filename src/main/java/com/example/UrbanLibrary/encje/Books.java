package com.example.UrbanLibrary.encje;

import javax.persistence.*;
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
    private Date date;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.REMOVE, orphanRemoval = true, mappedBy = "book")
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

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
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