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
@RequestMapping("/api/reservationsitems")
public class ReservationsItemsController {

    private ReservationsItemsManager reservationsItemsManager;

    @Autowired
    public ReservationsItemsController(ReservationsItemsManager reservationsItemsManager)
    {
        this.reservationsItemsManager = reservationsItemsManager;
    }

    @GetMapping("/all")
    public Iterable<ReservationsItems> getAll()
    {
        return reservationsItemsManager.findAll();
    }

    @GetMapping("/byId/{index}")
    public Optional<ReservationsItems> getById(@PathVariable Long index)
    {
        return reservationsItemsManager.findById(index);
    }

    @PostMapping
    public ReservationsItems addReservationItem(@RequestBody ReservationsItems reservationsItems){
        return reservationsItemsManager.save(reservationsItems);
    }

    @PutMapping
    public ReservationsItems updateReservationItem(@RequestBody ReservationsItems reservationsItems){
        return reservationsItemsManager.save(reservationsItems);
    }

    @DeleteMapping("/{index}")
    public void deleteReservationItem(@PathVariable Long index)
    {
        reservationsItemsManager.deleteById(index);
    }

}
