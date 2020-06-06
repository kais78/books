package com.books.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BookController {

    @Autowired
    private com.books.services.BookService bookService;

    @GetMapping("/rest/books")
    public List<com.books.entities.Book> getAllBooks() {
        return bookService.getAllBooks();
    }

}
