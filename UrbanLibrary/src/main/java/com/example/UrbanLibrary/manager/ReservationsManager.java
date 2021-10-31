package com.example.UrbanLibrary.manager;

import com.example.UrbanLibrary.dao.entity.Members;
import com.example.UrbanLibrary.dao.entity.Reservations;
import com.example.UrbanLibrary.dao.entity.repositories.BooksRepository;
import com.example.UrbanLibrary.dao.entity.repositories.MembersRepository;
import com.example.UrbanLibrary.dao.entity.repositories.ReservationsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.Optional;

@Service
public class ReservationsManager {

    private final ReservationsRepository reservationsRepository;

    @Autowired
    public ReservationsManager(ReservationsRepository reservationsRepository) {
        super();
        this.reservationsRepository = reservationsRepository;
    }

    @EventListener(ApplicationReadyEvent.class)
    @Order(6)
    public void fillDbMembers(){
    }

    public Optional<Reservations> findById(Long id){
        return reservationsRepository.findById(id);
    }

    public Iterable<Reservations> findAll(){
        return reservationsRepository.findAll();
    }

    public Reservations save(Reservations reservations){
        return reservationsRepository.save(reservations);
    }

    public void deleteById(Long id){
        reservationsRepository.deleteById(id);
    }
}
