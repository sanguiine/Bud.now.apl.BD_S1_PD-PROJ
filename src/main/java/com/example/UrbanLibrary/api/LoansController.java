package com.example.UrbanLibrary.api;

import com.example.UrbanLibrary.dao.entity.Authors;
import com.example.UrbanLibrary.dao.entity.Loans;
import com.example.UrbanLibrary.manager.AuthorsManager;
import com.example.UrbanLibrary.manager.LoansManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/loans")
public class LoansController {

    private LoansManager loansManager;

    @Autowired
    public LoansController(LoansManager loansManager)
    {
        this.loansManager = loansManager;
    }

    @GetMapping("/all")
    public Iterable<Loans> getAll()
    {
        return loansManager.findAll();
    }

    @GetMapping("/byId/{index}")
    public Optional<Loans> getById(@PathVariable Long index)
    {
        return loansManager.findById(index);
    }

    @PostMapping
    public Loans addLoan(@RequestBody Loans loan){
        return loansManager.save(loan);
    }

    @PutMapping
    public Loans updateLoan(@RequestBody Loans loan){
        return loansManager.save(loan);
    }

    @DeleteMapping("/{index}")
    public void deleteLoan(@PathVariable Long index)
    {
        loansManager.deleteById(index);
    }
}
