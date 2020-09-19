package com.example.UrbanLibrary.api;

import com.example.UrbanLibrary.dao.entity.Categories;
import com.example.UrbanLibrary.manager.CategoriesManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*", exposedHeaders = "Authorization")
@RestController
@RequestMapping("/api/categories")
public class CategoriesController {

    private CategoriesManager categoriesManager;

    @Autowired
    public CategoriesController(CategoriesManager categoriesManager)
    {
        this.categoriesManager = categoriesManager;
    }

    @GetMapping("/all")
    public Iterable<Categories> getAll()
    {
        return categoriesManager.findAll();
    }

    @GetMapping("/byId/{index}")
    public Optional<Categories> getById(@PathVariable Long index)
    {
        return categoriesManager.findById(index);
    }

    @PostMapping
    public Categories addCategory(@RequestBody Categories category){
        return categoriesManager.save(category);
    }

    @PutMapping
    public Categories updateCategory(@RequestBody Categories category){
        return categoriesManager.save(category);
    }

    @DeleteMapping ("/{index}")
    public void deleteCategory(@PathVariable Long index)
    {
        categoriesManager.deleteById(index);
    }

}
