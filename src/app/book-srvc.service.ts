import { Injectable } from '@angular/core';

@Injectable()
export class BookSrvcService {

  constructor() {
    // console.log("srvc initiaised");
   }

getBooks(){
  var books=JSON.parse(localStorage.getItem('books'));
  if(books==null)return [];
  return books;

}

addbook(newBook){
  var books=JSON.parse(localStorage.getItem('books'));
  if(books==null)books=[];
  books.push(newBook);
  localStorage.setItem("books", JSON.stringify(books));
}

deletebook(booksafterdelete){
  //var books=JSON.parse(localStorage.getItem('books'));
  localStorage.setItem("books", JSON.stringify(booksafterdelete));
}



}
