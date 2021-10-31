package com.example.UrbanLibrary.api;

import com.example.UrbanLibrary.dao.entity.Books;
import com.example.UrbanLibrary.manager.BooksManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*", exposedHeaders = "Authorization")
@RestController
@RequestMapping("/api/books")
public class BooksController {

    private BooksManager BooksManager;

    @Autowired
    public BooksController(BooksManager BooksManager)
    {
        this.BooksManager = BooksManager;
    }

    @GetMapping("/all")
    public Iterable<Books> getAll()
    {
        return BooksManager.findAll();
    }

    @GetMapping("/byId/{index}")
    public Optional<Books> getById(@PathVariable Long index)
    {
        return BooksManager.findById(index);
    }

    @PostMapping
    public Books addBook(@RequestBody Books book){
        return BooksManager.save(book);
    }

    @PutMapping
    public Books updateBook(@RequestBody Books book){
        return BooksManager.save(book);
    }

    @DeleteMapping("/{index}")
    public void deleteBook(@PathVariable Long index)
    {
        BooksManager.deleteById(index);
    }

}
