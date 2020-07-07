package com.example.UrbanLibrary.manager;

import com.example.UrbanLibrary.dao.entity.Categories;
import com.example.UrbanLibrary.dao.entity.repositories.CategoriesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CategoriesManager {

    private final CategoriesRepository categoriesRepository;
    @Autowired
    public CategoriesManager(CategoriesRepository categoriesRepository) {
        super();
        this.categoriesRepository = categoriesRepository;
    }

    @EventListener(ApplicationReadyEvent.class)
    @Order(1)
    public void fillDbMembers(){
        save(new Categories("Powieść historyczna"));
        save(new Categories("Powieść społeczno-obyczajowa"));
        save(new Categories("Kryminał"));
        save(new Categories("Przygodowa"));
        save(new Categories("Akcji"));
        save(new Categories("Poemat Epicki"));
        save(new Categories("Fikcja historyczna"));
        save(new Categories("Powieść fantastycznonaukowa"));
    }

    public Optional<Categories> findById(Long id){
        return categoriesRepository.findById(id);
    }

    public Iterable<Categories> findAll(){
        return categoriesRepository.findAll();
    }

    public Categories save(Categories category){
        return categoriesRepository.save(category);
    }

    public void deleteById(Long id){
        categoriesRepository.deleteById(id);
    }



}


