package com.example.UrbanLibrary.api;


import com.example.UrbanLibrary.dao.entity.Authors;
import com.example.UrbanLibrary.dao.entity.Members;
import com.example.UrbanLibrary.manager.AuthorsManager;
import com.example.UrbanLibrary.manager.MembersManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/authors")
public class AuthorsController {

    private AuthorsManager authorsManager;

    @Autowired
    public AuthorsController(AuthorsManager authorsManager)
    {
        this.authorsManager = authorsManager;
    }

    @GetMapping("/all")
    public Iterable<Authors> getAll()
    {
        return authorsManager.findAll();
    }

    @GetMapping("/byId/{index}")
    public Optional<Authors> getById(@PathVariable Long index)
    {
        return authorsManager.findById(index);
    }

    @PostMapping
    public Authors addAuthor(@RequestBody Authors author){
        return authorsManager.save(author);
    }

    @PutMapping
    public Authors updateAuthor(@RequestBody Authors author){
        return authorsManager.save(author);
    }

    @DeleteMapping("/{index}")
    public void deleteAuthor(@PathVariable Long index)
    {
        authorsManager.deleteById(index);
    }

}
