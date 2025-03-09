import { Component,OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { FormsModule } from '@angular/forms';
import { NgForOf,NgIf } from '@angular/common';
@Component({
  selector: 'app-book',
  imports: [FormsModule,NgForOf,NgIf],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent implements OnInit {

  ngOnInit(): void {
    let savedbooks = localStorage.getItem('books');
    this.books = savedbooks ? JSON.parse(savedbooks) : [];
 }


  bookName: string = '';
  authorName: string = '';
  publisherName: string = '';
  price: number = 0;

  books: Book[] = [];
  
  addBook() {
    alert('Book Added Successfully');
    if (
      this.bookName.trim() &&
      this.authorName.trim() &&
      this.publisherName.trim() &&
      this.price
    ) {
      let newBook: Book = {
        id: Date.now(),
        title: this.bookName,
        author: this.authorName,
        publisher: this.publisherName,
        price: this.price,
      };
      this.books.push(newBook);
    }

    // alert('Book Added ');
      localStorage.setItem('books', JSON.stringify(this.books));
    
      this.bookName = ''; 
      this.authorName = '';
      this.publisherName = '';
      this.price = 0;
    }

  deleteBook(index: number) {
    this.books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.books));
    alert('Book Deleted Successfully');
  }
  }
