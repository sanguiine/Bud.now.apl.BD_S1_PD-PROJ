package com.example.UrbanLibrary.manager;

import com.example.UrbanLibrary.dao.entity.Reservations;
import com.example.UrbanLibrary.dao.entity.ReservationsItems;
import com.example.UrbanLibrary.dao.entity.repositories.ReservationsItemsRepository;
import com.example.UrbanLibrary.dao.entity.repositories.ReservationsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ReservationsItemsManager {

    private final ReservationsItemsRepository reservationsItemsRepository;

    @Autowired
    public ReservationsItemsManager(ReservationsItemsRepository reservationsItemsRepository) {
        super();
        this.reservationsItemsRepository = reservationsItemsRepository;
    }

    public void fillDbMembers(){
    }

    public Optional<ReservationsItems> findById(Long id){
        return reservationsItemsRepository.findById(id);
    }

    public Iterable<ReservationsItems> findAll(){
        return reservationsItemsRepository.findAll();
    }

    public ReservationsItems save(ReservationsItems reservationsItems){
        return reservationsItemsRepository.save(reservationsItems);
    }

    public void deleteById(Long id){
        reservationsItemsRepository.deleteById(id);
    }
}
