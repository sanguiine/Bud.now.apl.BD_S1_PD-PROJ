package com.example.UrbanLibrary.dao.entity;

import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@Entity
@Table(name = "ReservationsItems")
public class ReservationsItems {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "reservationItemsID", nullable = false, unique = true)
    private long reservationItemsID;

    @Column(name = "reservationGUID")
    private int reservationGUID;

    @ManyToOne(optional = false)
    @JoinColumn(name = "bookID")
    private Books book;

    @Column(name = "orderItemQuantity")
    private int orderItemQuantity;


    public ReservationsItems()
    {

    }

    public ReservationsItems(Reservations reservation, int reservationGUID, Books book, int orderItemQuantity)
    {
        this.reservationGUID = reservationGUID;
        this.book = book;
        this.orderItemQuantity = orderItemQuantity;
    }


    public long getReservationItemsID() {
        return reservationItemsID;
    }

    public void setReservationItemsID(long reservationItemsID) {
        this.reservationItemsID = reservationItemsID;
    }

    public int getReservationGUID() {
        return reservationGUID;
    }

    public void setReservationGUID(int reservationGUID) {
        this.reservationGUID = reservationGUID;
    }

    public Books getBook() {
        return book;
    }

    public void setBook(Books book) {
        this.book = book;
    }

    public int getOrderItemQuantity() {
        return orderItemQuantity;
    }

    public void setOrderItemQuantity(int orderItemQuantity) {
        this.orderItemQuantity = orderItemQuantity;
    }
}
