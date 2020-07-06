package com.example.UrbanLibrary.manager;

import com.example.UrbanLibrary.dao.entity.ReadByMember;
import com.example.UrbanLibrary.dao.entity.repositories.ReadByMemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ReadByMemberManager {

    private final ReadByMemberRepository readByMemberRepository;

    @Autowired
    public ReadByMemberManager(ReadByMemberRepository readByMemberRepository) {
        super();
        this.readByMemberRepository = readByMemberRepository;
    }

    public void fillDb()
    {
    }

    public ReadByMember save(ReadByMember readByMember){
        return readByMemberRepository.save(readByMember);
    }

    public Optional<ReadByMember> findById(Long id){
        return readByMemberRepository.findById(id);
    }

    public Iterable<ReadByMember> findAll(){
        return readByMemberRepository.findAll();
    }

    public void deleteById(Long id){
        readByMemberRepository.deleteById(id);
    }

}
