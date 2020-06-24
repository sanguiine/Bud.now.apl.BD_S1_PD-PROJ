package com.example.UrbanLibrary.api;

import com.example.UrbanLibrary.dao.entity.Authors;
import com.example.UrbanLibrary.dao.entity.Books;
import com.example.UrbanLibrary.manager.AuthorsManager;
import com.example.UrbanLibrary.manager.BooksManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/books")
public class BooksController {

    private BooksManager booksManager;

    @Autowired
    public BooksController(BooksManager booksManager)
    {
        this.booksManager = booksManager;
    }

    @GetMapping("/all")
    public Iterable<Books> getAll()
    {
        return booksManager.findAll();
    }

    @GetMapping("/byId/{index}")
    public Optional<Books> getById(@PathVariable Long index)
    {
        return booksManager.findById(index);
    }

    @PostMapping
    public Books addBook(@RequestBody Books book){
        return booksManager.save(book);
    }

    @PutMapping
    public Books updateBook(@RequestBody Books book){
        return booksManager.save(book);
    }

    @DeleteMapping("/{index}")
    public void deleteBook(@PathVariable Long index)
    {
        booksManager.deleteById(index);
    }

}
