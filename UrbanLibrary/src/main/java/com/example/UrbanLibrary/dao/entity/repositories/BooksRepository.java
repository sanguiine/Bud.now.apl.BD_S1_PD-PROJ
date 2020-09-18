package com.example.UrbanLibrary.dao.entity.repositories;

import com.example.UrbanLibrary.dao.entity.Books;
import org.springframework.data.repository.CrudRepository;

public interface BooksRepository extends CrudRepository<Books, Long> {
}
