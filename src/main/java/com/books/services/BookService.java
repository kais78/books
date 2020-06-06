package com.books.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    @Autowired
    private com.books.repositories.BookRepo bookRepo;

    public List<com.books.entities.Book> getAllBooks()
    {
        return (List<com.books.entities.Book>) bookRepo.findAll();
    }

}
