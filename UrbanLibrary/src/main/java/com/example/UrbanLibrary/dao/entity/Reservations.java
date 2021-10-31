package com.example.UrbanLibrary.dao.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.sun.javafx.beans.IDProperty;

import javax.persistence.*;
import javax.validation.Valid;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "Reservations")
public class Reservations {

    @Id
    @Column(name = "reservationID", nullable = false, unique = true)
    private long reservationID;

    @Column(name = "mebmerID")
    private int memberID;

    @Column(name = "dateStartReservation")
    private LocalDate dateStartReservation;
    @Column(name = "dateEndReservation")
    private LocalDate dateEndReservation;


    public Reservations()
    {

    }

    public Reservations(int memberID, LocalDate dateStartReservation, LocalDate dateEndReservation)
    {
        this.memberID = memberID;
        this.dateStartReservation = dateStartReservation;
        this.dateEndReservation = dateEndReservation;
    }

    public int getMemberID() {
        return memberID;
    }

    public void setMemberID(int memberID) {
        this.memberID = memberID;
    }

    public long getReservationID() {
        return reservationID;
    }

    public void setReservationID(long reservationID) {
        this.reservationID = reservationID;
    }


    public LocalDate getDateStartReservation() {
        return dateStartReservation;
    }

    public void setDateStartReservation(LocalDate dateStartReservation) {
        this.dateStartReservation = dateStartReservation;
    }

    public LocalDate getDateEndReservation() {
        return dateEndReservation;
    }

    public void setDateEndReservation(LocalDate dateEndReservation) {
        this.dateEndReservation = dateEndReservation;
    }
}
