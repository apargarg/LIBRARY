import { Component, OnInit } from '@angular/core';
import { BookSrvcService } from '../book-srvc.service'

@Component({
  selector: 'app-m-books',
  templateUrl: './m-books.component.html',
  styleUrls: ['./m-books.component.css'],
  providers: [BookSrvcService]
})
export class MBooksComponent implements OnInit {
  books;
  bookname;
  bookauth;
  mod_bookname;
  mod_bookauth;
  mod_bookid;
  mod_copies;
  bookid;
  copies;
  oldid;
  appState= 'default';
  constructor(private _bookSrvc: BookSrvcService) { }

  ngOnInit() {
    // var k=1;
    // this.books=[];
    //   {
    //    order:k++,
    //     name:'The Alchemist',
    //     id:'1234',
    //     copies:4
    //   },
    //   {order:k++,
    //     name:'The Alchemist2',
    //     id:'12345',
    //     copies:3
    //   },
    //   {order:k++,
    //     name:'The Alchemist3',
    //     id:'123456',
    //     copies:7
    //   },

    //];
   this.books=this._bookSrvc.getBooks();
   
    
  }
   
  addbook(){
    var newBook={
      order:this.books.length+1,
      name: this.bookname,
      auth:this.bookauth,
      id:this.bookid,
      copies: 1,
      issued: false
      
    }
     var found=0;
    for(var i=0;i<this.books.length;i++){
      if(this.books[i].id==this.bookid){found++;break;}
    }
    if(found!=0){this.bookid="Book ID already present."}
    else{this.books.push(newBook);
    this._bookSrvc.addbook(newBook);}
   }
   
   deletebook(bookid){
     for(var i=0;i<this.books.length;i++){
       if(this.books[i].id==bookid){
         this.books.splice(i,1);
         for(var i=0;i<this.books.length;i++){
           this.books[i].order=i+1;
         }
         break;
       }
     }
    this._bookSrvc.deletebook(this.books);      
}

editbook(book){
   this.appState= 'edit';
   this.mod_bookname= book.name;
   this.mod_bookauth= book.auth;
  //  this.mod_bookid= book.id;
   this.oldid= book.id;
  //  this.mod_copies = book.copies;

}
   
updatebook(){
  for(var i=0;i<this.books.length;i++){
    if(this.books[i].id==this.oldid){
      this.books[i].name=this.mod_bookname;
      this.books[i].auth= this.mod_bookauth;
      // this.books[i].id=this.mod_bookid;
      // this.books[i].copies=this.mod_copies;
      // this.books[i].remcopies=this.mod_copies-this.books[i].issuedcopies;
    }
  }
this._bookSrvc.deletebook(this.books); 

}  
   
   
}
