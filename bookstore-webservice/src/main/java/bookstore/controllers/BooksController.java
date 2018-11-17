package bookstore.controllers;

import bookstore.patterns.domainlogic.transactionscript.AllBooks;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.ResultSet;

@RestController
@RequestMapping("/books")
public class BooksController
{

    @GetMapping("/all")
    public ResponseEntity<?> getAllBooks()
    {
        ResultSet result = new AllBooks().run();
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
