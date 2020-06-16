package com.example.UrbanLibrary.repositories;

import com.example.UrbanLibrary.encje.Books;
import org.springframework.data.repository.CrudRepository;

public interface BooksRepository extends CrudRepository<Books, Long> {
}
