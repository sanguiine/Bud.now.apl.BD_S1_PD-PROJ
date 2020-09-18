package com.example.UrbanLibrary.api;


import com.example.UrbanLibrary.manager.MembersManager;
import com.example.UrbanLibrary.dao.entity.Members;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*", exposedHeaders = "Authorization")
@RestController
@RequestMapping("/api/members")
public class MembersController {

    private MembersManager membersManager;

    @Autowired
    public MembersController(MembersManager membersManager)
    {
        this.membersManager = membersManager;
    }

    @GetMapping("/all")
    public Iterable<Members> getAll()
    {
        return membersManager.findAll();
    }

    @GetMapping("/byId/{index}")
    public Optional<Members> getById(@PathVariable Long index)
    {
        return membersManager.findById(index);
    }

    @PostMapping
    public Members addMember(@RequestBody Members member){
        return membersManager.save(member);
    }

    @PutMapping
    public Members updateMember(@RequestBody Members member){
        return membersManager.save(member);
    }

    @DeleteMapping("/{index}")
    public void deleteMember(@PathVariable Long index)
    {
        membersManager.deleteById(index);
    }

}
