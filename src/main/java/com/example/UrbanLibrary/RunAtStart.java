package com.example.UrbanLibrary;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.text.ParseException;
import java.text.SimpleDateFormat;

@Component
public class RunAtStart {
    SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy");
    private final MembersRepository membersRepository;

    @Autowired
    public RunAtStart(MembersRepository membersRepository) {
        super();
        this.membersRepository = membersRepository;
    }

    @PostConstruct
    public void runAtStart() throws ParseException {
        Members members = new Members();
        members.setFirstNname("Anna");
        members.setLastName("Kowalska");
        members.setBirthDate(dateFormat.parse("05-10-1995"));
        members.setCity("Warszawa");
        members.setZipCode("01-934");
        members.setAddress("Opalin 5");
        members.setPhoneNumber("602595325");
        members.setEmail("anna1@gmail.com");
        members.setPassword("1234");
        membersRepository.save(members);
    }
}
