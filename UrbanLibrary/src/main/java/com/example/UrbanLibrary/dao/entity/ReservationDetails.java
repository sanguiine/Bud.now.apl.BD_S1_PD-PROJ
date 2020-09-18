package com.example.UrbanLibrary.dao.entity;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "ReservationsDetails")
public class ReservationDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "reservationID", nullable = false, unique = true)
    private long reservationID;

    @ManyToOne
    @JoinColumn(name = "memberID")
    private Members member;

    @Column(name = "dateStartReservation", nullable = false)
    private LocalDate dateStartReservation;
    @Column(name = "dateEndReservation")
    private LocalDate dateEndReservation;

    public ReservationDetails()
    {

    }
    public ReservationDetails(Members member, LocalDate dateStartReservation, LocalDate dateEndReservation)
    {
        this.member = member;
        this.dateStartReservation = dateStartReservation;
        this.dateEndReservation = dateEndReservation;
    }

    public long getReservationID() {
        return reservationID;
    }

    public void setReservationID(long reservationID) {
        this.reservationID = reservationID;
    }

    public Members getMember() {
        return member;
    }

    public void setMember(Members member) {
        this.member = member;
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

    @Override
    public String toString() {
        return "ReservationDetails{" +
                "reservationID=" + reservationID +
                ", member=" + member +
                ", dateStartReservation=" + dateStartReservation +
                ", dateEndReservation=" + dateEndReservation +
                '}';
    }
}
