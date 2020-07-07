package com.example.UrbanLibrary.manager;

import com.example.UrbanLibrary.dao.entity.Authors;
import com.example.UrbanLibrary.dao.entity.repositories.AuthorsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Optional;

@Service
public class AuthorsManager {

    private final AuthorsRepository authorsRepository;

    @Autowired
    public AuthorsManager(AuthorsRepository authorsRepository) throws IOException {
        super();
        this.authorsRepository = authorsRepository;
    }

    @EventListener(ApplicationReadyEvent.class)
    @Order(2)
    public void fillDb()
    {
        save(new Authors("Adam", "Mickiewicz"));
        save(new Authors("Henryk", "Sienkiewicz"));
        save(new Authors("Stanisław", "Lem"));
        save(new Authors("Bolesław", "Prus"));
        save(new Authors("Franz", "Kawka"));
    }

    public Authors save(Authors author){
        return authorsRepository.save(author);
    }

    public Optional<Authors> findById(Long id){
        return authorsRepository.findById(id);
    }

    public Iterable<Authors> findAll(){
        return authorsRepository.findAll();
    }

    public void deleteById(Long id){
        authorsRepository.deleteById(id);
    }
}
