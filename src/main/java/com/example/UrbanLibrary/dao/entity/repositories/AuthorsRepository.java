package com.example.UrbanLibrary.dao.entity.repositories;

import com.example.UrbanLibrary.dao.entity.Authors;
import org.springframework.data.repository.CrudRepository;

public interface AuthorsRepository extends CrudRepository<Authors, Long> {
}
