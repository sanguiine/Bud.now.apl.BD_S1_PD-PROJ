package com.example.UrbanLibrary.manager;

import com.example.UrbanLibrary.dao.entity.Books;
import com.example.UrbanLibrary.dao.entity.repositories.AuthorsRepository;
import com.example.UrbanLibrary.dao.entity.repositories.BooksRepository;
import com.example.UrbanLibrary.dao.entity.repositories.CategoriesRepository;
import com.example.UrbanLibrary.dao.entity.repositories.ReadByMemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.time.LocalDate;
import java.util.Optional;


@Service
public class BooksManager {

    private final BooksRepository booksRepository;
    private final CategoriesRepository categoriesRepository;
    private final AuthorsRepository authorsRepository;
    private final ReadByMemberRepository readByMemberRepository;

    @Autowired
    public BooksManager(BooksRepository booksRepository, CategoriesRepository categoriesRepository, AuthorsRepository authorsRepository, ReadByMemberRepository readByMemberRepository) {
        super();
        this.booksRepository = booksRepository;
        this.categoriesRepository = categoriesRepository;
        this.authorsRepository = authorsRepository;
        this.readByMemberRepository = readByMemberRepository;
    }

    @EventListener(ApplicationReadyEvent.class)
    public void fillDb() throws IOException {
        //save(new Books("Potop", "Bardzo fajna książka", LocalDate.of(1959,11,11), imageFileToByte("cloth_1.jpg"), true,
        //        Arrays.asList(categoriesRepository.findById(1l).get()), Arrays.asList(authorsRepository.findById(2l).get()), null));
        save(new Books("Potop", "Bardzo fajna książka", LocalDate.of(1959,11,11), "cloth_1.jpg", true,
                null,null, null));
        save(new Books("Ogniem i mieczem", "Bardzo fajna książka", LocalDate.of(1959,11,11), "cloth_2.jpg", true,
                null,null, null));
        save(new Books("Lalka", "Bardzo fajna książka", LocalDate.of(1959,11,11), "cloth_3.jpg", true,
                null,null, null));
        save(new Books("Proces", "Bardzo fajna książka", LocalDate.of(1959,11,11), "shoe_1.jpg", true,
                null,null, null));
    }

    public Books save(Books book){
        return booksRepository.save(book);
    }

    public Optional<Books> findById(Long id){
        return booksRepository.findById(id);
    }

    public Iterable<Books> findAll(){
        return booksRepository.findAll();
    }

    public void deleteById(Long id){
        booksRepository.deleteById(id);
    }


    public byte[] imageFileToByte(String imagePath) throws IOException {
        BufferedImage bImage = ImageIO.read(new File("H:\\Studnia\\JAVA PROJECT\\UrbanLibrary\\src\\main\\resources\\img\\" + imagePath));
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        ImageIO.write(bImage, "jpg", bos );
        byte [] data = bos.toByteArray();
        return data;
    }

}
