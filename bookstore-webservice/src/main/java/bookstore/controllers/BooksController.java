package bookstore.controllers;

import bookstore.dataaccess.BooksGateway;
import bookstore.domain.Book;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BooksController
{
    private BooksGateway gateway = new BooksGateway();

    @GetMapping("/all")
    public ResponseEntity<?> getAllBooks()
    {
        List<Book> result = gateway.findAll();
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
