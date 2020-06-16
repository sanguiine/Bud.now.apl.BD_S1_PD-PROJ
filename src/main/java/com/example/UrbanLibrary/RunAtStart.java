package com.example.UrbanLibrary;

import com.example.UrbanLibrary.encje.*;
import com.example.UrbanLibrary.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.List;

@Component
public class RunAtStart {
    SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy");
    private final AuthorsRepository authorsRepository;
    private final MembersRepository membersRepository;
    private final BooksRepository booksRepository;
    private final CategoriesRepository categoriesRepository;
    private final LoansRepository loansRepository;
    private final ReadByMemberRepository readByMemberRepository;

    @Autowired
    public RunAtStart(AuthorsRepository authorsRepository, BooksRepository booksRepository, CategoriesRepository categoriesRepository,
                      LoansRepository loansRepository, ReadByMemberRepository readByMemberRepository, MembersRepository membersRepository) {
        super();
        this.authorsRepository = authorsRepository;
        this.membersRepository = membersRepository;
        this.booksRepository = booksRepository;
        this.categoriesRepository = categoriesRepository;
        this.loansRepository = loansRepository;
        this.readByMemberRepository = readByMemberRepository;
    }

    @PostConstruct
    public void runAtStart() throws ParseException {
        addMember("Anna","Kowalska", "05-10-1995", "Warszawa", "01-934",
                "Opalin 5", "602595325", "anna1@gmail.com", "1234", "user");
        addMember("Brajan","Nowak", "05-10-1995", "Warszawa", "01-934",
                "Opalin 54", "982325325", "anna1@gmail.com", "1234", "admin");

        Authors author1 = addAuthor("Adam", "Mickiewicz");
        Authors author2 = addAuthor("Henryk", "Sienkiewicz");
        Authors author3 = addAuthor("Stanisław", "Lem");

        Categories cat1 = addCategory("Kryminał");
        Categories cat2 = addCategory("Przygodowa");
        Categories cat3 = addCategory("Akcji");
        Categories cat4 = addCategory("Poemat Epicki");
        Categories cat5 = addCategory("Fikcja historyczna");
        Categories cat6 = addCategory("Powieść fantastycznonaukowa");

        Books book1 = addBooks("Pan Tadeusz", "Ta epopeja narodowa (z elementami gawędy szlacheckiej) powstała w latach 1832–1834 w Paryżu. " +
                "Składa się z dwunastu ksiąg pisanych wierszem, " +
                "trzynastozgłoskowym aleksandrynem polskim. Czas akcji: pięć dni z roku 1811 i jeden dzień z roku 1812.","11-12-1990" ,Arrays.asList(cat4), Arrays.asList(author1));
        Books book2 = addBooks("Potop", "Druga z powieści tworzących Trylogię Henryka Sienkiewicza wydana w 1886 roku, opowiadająca o potopie szwedzkim z lat 1655–1660."
                ,"11-11-1999", Arrays.asList(cat5), Arrays.asList(author2));
        Books book3 = addBooks("Solaris", "Główny bohater – psycholog Kris Kelvin – przybywa z Ziemi na stację badawczą unoszącą się nad cytoplazmatycznym " +
                "oceanem pokrywającym planetę Solaris.", "01-05-2000", Arrays.asList(cat6), Arrays.asList(author3));




    }

    private void addMember(String firstName, String lastName, String birthDay, String city, String zipCode,
                           String address, String phoneNumber, String email, String password, String role) throws ParseException {
        Members members = new Members();
        members.setFirstNname(firstName);
        members.setLastName(lastName);
        members.setBirthDate(dateFormat.parse(birthDay));
        members.setCity(city);
        members.setZipCode(zipCode);
        members.setAddress(address);
        members.setPhoneNumber(phoneNumber);
        members.setEmail(email);
        members.setPassword(password);
        members.setRole(role);
        membersRepository.save(members);
    }

    private Authors addAuthor(String firstName, String lastName) {
        Authors author = new Authors();
        author.setFirstName(firstName);
        author.setLastName(lastName);
        authorsRepository.save(author);
        return author;
    }

    private Categories addCategory(String categoryName){
        Categories category = new Categories();
        category.setName(categoryName);
        categoriesRepository.save(category);
        return category;
    }

    private Books addBooks(String title, String description, String date, List<Categories> categories, List<Authors> authors) throws ParseException {
        Books book = new Books();
        book.setTitle(title);
        book.setDescription(description);
        book.setDate(dateFormat.parse(date));
        book.setCategories(categories);
        book.setAuthors(authors);
        booksRepository.save(book);
        return book;
    }

    private void addReadByMember(){

    }





}
