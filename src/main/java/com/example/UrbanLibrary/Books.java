package com.example.UrbanLibrary;

import javax.persistence.*;
import java.util.Arrays;
import java.util.Date;

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