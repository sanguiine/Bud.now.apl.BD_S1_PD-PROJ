package com.example.UrbanLibrary.manager;

import com.example.UrbanLibrary.dao.entity.Members;
import com.example.UrbanLibrary.dao.entity.repositories.MembersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Optional;

@Service
public class MembersManager {

    private final MembersRepository membersRepository;

    @Autowired
    public MembersManager(MembersRepository membersRepository) {
        super();
        this.membersRepository = membersRepository;
    }

    public void fillDbMembers(){
        save(new Members("Anna","Kowalska", LocalDate.of(1995,10,5), "Warszawa", "01-934",
                "Opalin 5", "602595325", "anna1@gmail.com", "1234", "user"));
        save(new Members("Brajan","Nowak", LocalDate.of(1995,10,5), "Warszawa", "01-934",
                "Opalin 54", "982325325", "brajan@gmail.com", "1234", "admin"));
    }

    public Optional<Members> findById(Long id){
        return membersRepository.findById(id);
    }

    public Iterable<Members> findAll(){
        return membersRepository.findAll();
    }

    public Members save(Members member){
        return membersRepository.save(member);
    }

    public void deleteById(Long id){
        membersRepository.deleteById(id);
    }



}
