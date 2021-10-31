package com.example.UrbanLibrary.manager;

import com.example.UrbanLibrary.dao.entity.ReadByMember;
import com.example.UrbanLibrary.dao.entity.repositories.BooksRepository;
import com.example.UrbanLibrary.dao.entity.repositories.MembersRepository;
import com.example.UrbanLibrary.dao.entity.repositories.ReadByMemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ReadByMemberManager {

    private final ReadByMemberRepository readByMemberRepository;
    private final MembersRepository membersRepository;
    private final BooksRepository booksRepository;

    @Autowired
    public ReadByMemberManager(ReadByMemberRepository readByMemberRepository,
                               MembersRepository membersRepository,
                               BooksRepository booksRepository) {
        super();
        this.readByMemberRepository = readByMemberRepository;
        this.membersRepository = membersRepository;
        this.booksRepository = booksRepository;
    }

    public void fillDb()
    {
        save(new ReadByMember(membersRepository.findById(1l).get(), booksRepository.findById(1l).get(), 5));
    }

    public ReadByMember save(ReadByMember readByMember){ return readByMemberRepository.save(readByMember); }

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
