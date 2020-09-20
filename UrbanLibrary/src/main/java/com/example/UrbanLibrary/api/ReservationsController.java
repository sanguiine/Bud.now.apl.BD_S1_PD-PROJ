package com.example.UrbanLibrary.api;

import com.example.UrbanLibrary.dao.entity.Reservations;
import com.example.UrbanLibrary.dao.entity.ReservationsItems;
import com.example.UrbanLibrary.manager.ReservationsItemsManager;
import com.example.UrbanLibrary.manager.ReservationsManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*", exposedHeaders = "Authorization")
@RestController
@RequestMapping("/api/reservations")
public class ReservationsController {

    private ReservationsManager reservationsManager;
    private ReservationsItemsManager reservationsItemsManager;

    @Autowired
    public ReservationsController(ReservationsManager reservationsManager, ReservationsItemsManager reservationsItemsManager)
    {
        this.reservationsManager = reservationsManager;
        this.reservationsItemsManager = reservationsItemsManager;
    }

    @GetMapping("/all")
    public Iterable<Reservations> getAll()
    {
        return reservationsManager.findAll();
    }

    @GetMapping("/byId/{index}")
    public Optional<Reservations> getById(@PathVariable Long index)
    {

        return reservationsManager.findById(index);
    }

    @PostMapping
    public Reservations addReservation(@RequestBody Reservations reservation){

        return reservationsManager.save(reservation);
    }

    @PutMapping
    public Reservations updateReservation(@RequestBody Reservations reservation){
        return reservationsManager.save(reservation);
    }

    @DeleteMapping("/{index}")
    public void deleteReservation(@PathVariable Long index)
    {
        reservationsManager.deleteById(index);
    }

}
