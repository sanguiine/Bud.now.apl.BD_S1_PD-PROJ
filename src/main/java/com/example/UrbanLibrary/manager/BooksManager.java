package com.example.UrbanLibrary.manager;

import com.example.UrbanLibrary.dao.entity.Authors;
import com.example.UrbanLibrary.dao.entity.Books;
import com.example.UrbanLibrary.dao.entity.repositories.AuthorsRepository;
import com.example.UrbanLibrary.dao.entity.repositories.BooksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class BooksManager {

    private final BooksRepository booksRepository;

    @Autowired
    public BooksManager(BooksRepository booksRepository) {
        super();
        this.booksRepository = booksRepository;
    }

    @EventListener(ApplicationReadyEvent.class)
    public void fillDb()
    {

    }

    public Books save(Books book){
        return booksRepository.save(book);
    }

    public Optional<Books> findById(Long id){
        return booksRepository.findById(id);
    }

    public Iterable<Books> findAll(){
        return booksRepository.findAll();
    }

    public void deleteById(Long id){
        booksRepository.deleteById(id);
    }

}
