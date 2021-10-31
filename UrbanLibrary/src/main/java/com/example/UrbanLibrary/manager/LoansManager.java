package com.example.UrbanLibrary.manager;

import com.example.UrbanLibrary.dao.entity.Loans;
import com.example.UrbanLibrary.dao.entity.repositories.LoansRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoansManager {

    private final LoansRepository loansRepository;

    @Autowired
    public LoansManager(LoansRepository loansRepository) {
        super();
        this.loansRepository = loansRepository;
    }


    public void fillDb()
    {
    }

    public Loans save(Loans loan){
        return loansRepository.save(loan);
    }

    public Optional<Loans> findById(Long id){
        return loansRepository.findById(id);
    }

    public Iterable<Loans> findAll(){
        return loansRepository.findAll();
    }

    public void deleteById(Long id){
        loansRepository.deleteById(id);
    }

}
