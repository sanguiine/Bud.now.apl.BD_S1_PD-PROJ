package com.example.UrbanLibrary.api;

import com.example.UrbanLibrary.dao.entity.Authors;
import com.example.UrbanLibrary.dao.entity.ReadByMember;
import com.example.UrbanLibrary.manager.AuthorsManager;
import com.example.UrbanLibrary.manager.ReadByMemberManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/readByMember")
public class ReadByMemberController {

    private ReadByMemberManager readByMemberManager;

    @Autowired
    public ReadByMemberController(ReadByMemberManager readByMemberManager)
    {
        this.readByMemberManager = readByMemberManager;
    }

    @GetMapping("/all")
    public Iterable<ReadByMember> getAll()
    {
        return readByMemberManager.findAll();
    }

    @GetMapping("/byId/{index}")
    public Optional<ReadByMember> getById(@PathVariable Long index)
    {
        return readByMemberManager.findById(index);
    }

    @PostMapping
    public ReadByMember addReadedByMember(@RequestBody ReadByMember readByMember){
        return readByMemberManager.save(readByMember);
    }

    @PutMapping
    public ReadByMember updateReadedByMember(@RequestBody ReadByMember readByMember){
        return readByMemberManager.save(readByMember);
    }

    @DeleteMapping("/{index}")
    public void deleteReadedByMember(@PathVariable Long index)
    {
        readByMemberManager.deleteById(index);
    }

}
