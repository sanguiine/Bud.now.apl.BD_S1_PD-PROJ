package com.example.UrbanLibrary.dao.entity;

import javax.persistence.*;

@Entity
@Table(name = "Categories")
public class Categories {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "categoryID", nullable = false, unique = true)
    private long categoryID;

    @Column(name = "name", nullable = false)
    private String name;

    public Categories(){}
    public Categories(String name)
    {
        this.name = name;
    }

    public long getCategoryID() {
        return categoryID;
    }

    public void setCategoryID(long categoryID) {
        this.categoryID = categoryID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Categories{" +
                "categoryID=" + categoryID +
                ", name='" + name + '\'' +
                '}';
    }
}