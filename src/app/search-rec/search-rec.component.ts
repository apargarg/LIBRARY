import { Component, OnInit } from '@angular/core';
import { IssueSrvcService } from '../issue-srvc.service';
import { BookSrvcService } from '../book-srvc.service'
import { StudSrvcService } from '../stud-srvc.service'

@Component({
  selector: 'app-search-rec',
  templateUrl: './search-rec.component.html',
  styleUrls: ['./search-rec.component.css'],
  providers: [IssueSrvcService, BookSrvcService, StudSrvcService],
})
export class SearchRecComponent implements OnInit {

  constructor(private _issuesrvc : IssueSrvcService, private _bookSrvc: BookSrvcService, private _studsrvc: StudSrvcService) { }
  
  books;
  studs;
  issues;
  returns;
  bookquery;
  booksrch;
  studquery;
  studsrch;
  found_or_not="";
  datequery;
  datequery2;
  datesrch;
  headings=[];
  results=[];
  datas;
  tot_res;
  ngOnInit() {
      
      
      this.books= this._bookSrvc.getBooks();
      this.studs= this._studsrvc.getStuds();
      this.issues= this._issuesrvc.getissues();
      this.returns= this._issuesrvc.getreturns();

  }
  
  srchbook(){
    console.log(this.bookquery);
    console.log(this.booksrch);
    
     if(this.bookquery==undefined||this.booksrch==undefined||this.bookquery==""){return;}
     
     if(this.booksrch=="Book Name"){
       this.headings=[];this.results=[];this.tot_res="";this.found_or_not="";
       this.headings.push("#");
       this.headings.push("Book Name");
       this.headings.push("Book Author");
       this.headings.push("Book ID");
       this.headings.push("Current Status");
       var count=0;var arr=[];
       for(var i=0;i<this.books.length;i++){
         arr=[];
         if(this.books[i].name==this.bookquery){
           count++;
           arr.push(count);
           arr.push(this.books[i].name);
           arr.push(this.books[i].auth);
           arr.push(this.books[i].id);
           arr.push((this.books[i].issued==true)? "Issued":"Available");
           
          }
          if(arr.length!=0)this.results.push(arr);
       }
        if(count==0){this.found_or_not="No results found";return;}
        this.tot_res="Total search results: "+count;
        
     }
     else if(this.booksrch=="Book Author"){
       this.headings=[]; this.results=[];this.tot_res="";this.found_or_not="";
       this.headings.push("#");
       this.headings.push("Book Author");
       this.headings.push("Book Name");
       this.headings.push("Book ID");
       this.headings.push("Current Status");
       
       var count=0;var arr=[];
       for(var i=0;i<this.books.length;i++){
         arr=[];
         if(this.books[i].auth==this.bookquery){
           count++;
           arr.push(count);
           arr.push(this.books[i].auth);
           arr.push(this.books[i].name);
           arr.push(this.books[i].id);
           arr.push((this.books[i].issued==true)? "Issued":"Available");
           
          }
          if(arr.length!=0)this.results.push(arr);
       }
        if(count==0){this.found_or_not="No results found";return;}
        this.tot_res="Total search results: "+count;}
     else{
       this.headings=[]; this.results=[];this.tot_res="";this.found_or_not="";
       this.headings.push("Book ID");
       this.headings.push("Book Name");
       this.headings.push("Book Author");
       this.headings.push("Current Status");
       this.headings.push("Issued On");
       this.headings.push("By Roll No.");
       this.headings.push("Returned On");
       this.headings.push("with Fine of");
       
       var count=0;var arr=[];
       for(var i=0;i<this.books.length;i++){
         arr=[];
         if(this.books[i].id==this.bookquery){
           count++;
           arr.push(this.books[i].id);
           arr.push(this.books[i].name);
           arr.push(this.books[i].auth);
           arr.push((this.books[i].issued==true)? "Issued":"Available");
           break;
          }
          
       }
        if(count==0){this.found_or_not="No results found";return;}
        
        var j=0,k=0;var strisson="",strissby="",strrtnon="",strfine="";
        for(j=0;j<this.issues.length;j++){
          if(this.issues[j].id==this.bookquery){
            strisson+=this.issues[j].date+", ";
            strissby+=this.issues[j].roll+", ";
          }
            }
        
            for(k=0;k<this.returns.length;k++){
              if(this.returns[k].id==this.bookquery){
            strrtnon+=this.returns[k].date+", ";
            strfine+=this.returns[k].fine+", ";
          }
            }
         

        if(strisson=="")arr.push("No Issue Details");else arr.push(strisson);
        if(strissby=="")arr.push("No Details");else arr.push(strissby);
        if(strrtnon=="")arr.push("No Return Details");else arr.push(strrtnon);
        if(strfine=="")arr.push("No Details");else arr.push(strfine);
        this.results.push(arr);
     }
    }

  srchstud(){
    console.log(this.studquery);
    console.log(this.studsrch);

    if(this.studquery==undefined||this.studsrch==undefined||this.studquery==""){return;}

    if(this.studsrch=="Student Name"){
       this.headings=[]; this.results=[];this.tot_res="";this.found_or_not="";
       this.headings.push("#");
       this.headings.push("Student Name");
       this.headings.push("Student Roll No.");
       this.headings.push("Current Issue ID's");
       
       var count=0;var arr=[];
       for(var i=0;i<this.studs.length;i++){
         arr=[];
         if(this.studs[i].name==this.studquery){
           count++;
           arr.push(count);
           arr.push(this.studs[i].name);
           arr.push(this.studs[i].roll);
           var list="";
           for(var p=0;p<this.studs[i].bookborrow.length;p++){
               list+=this.studs[i].bookborrow[p];
               if(p!=this.studs[i].bookborrow.length-1)list+=",";
          }
              if(list=="")list="No current issues";
              arr.push(list);
        }
          if(arr.length!=0)this.results.push(arr);
       }
        if(count==0){this.found_or_not="No results found";return;}
        this.tot_res="Total search results: "+count;
    }
    else{
       
       this.headings=[]; this.results=[];this.tot_res="";this.found_or_not="";
       this.headings.push("Student Roll No.");
       this.headings.push("Student Name");
       this.headings.push("Current Issued ID's");
       this.headings.push("Issued IDs");
       this.headings.push("Issued On")
       this.headings.push("Returned IDs");
       this.headings.push("Returned On");
       this.headings.push("with Fine of");
       
       var count=0;var arr=[];
       for(var i=0;i<this.studs.length;i++){
         arr=[];
         if(this.studs[i].roll==this.studquery){
           count++;
           arr.push(this.studs[i].roll);
           arr.push(this.studs[i].name);
           var list="";
           for(var p=0;p<this.studs[i].bookborrow.length;p++){
               list+=this.studs[i].bookborrow[p];
               if(p!=this.studs[i].bookborrow.length-1)list+=",";
          }
              if(list=="")list="No current issues";
              arr.push(list);
           
           break;
          }
          
       }
        if(count==0){this.found_or_not="No results found";return;}
        
        var j=0,k=0;var strissid="",strisson="",strrtnid="",strrtnon="",strfine="";
        for(j=0;j<this.issues.length;j++){
          if(this.issues[j].roll==this.studquery){
            strissid+=this.issues[j].id+", ";
            strisson+=this.issues[j].date+", ";
          }
            }
        
            for(k=0;k<this.returns.length;k++){
              if(this.returns[k].roll==this.studquery){
            strrtnid+=this.returns[k].id+", ";
            strrtnon+=this.returns[k].date+", ";
            strfine+=this.returns[k].fine+", ";
          }
            }
         

        if(strissid=="")arr.push("No Issue Details");else arr.push(strissid);
        if(strisson=="")arr.push("No Details");else arr.push(strisson);
        if(strrtnid=="")arr.push("No Return Details");else arr.push(strrtnid);
        if(strrtnon=="")arr.push("No Details");else arr.push(strrtnon);        
        if(strfine=="")arr.push("No Details");else arr.push(strfine);
         this.results.push(arr);
      }
     
  }

  srchdate(){
    console.log(this.datequery);
    console.log(this.datesrch);

    if(this.datequery==undefined||this.datequery==""){return;}
    if(this.datesrch!="All"&&(this.datequery2==""||this.datequery2==undefined)){return;}
    
    if(this.datesrch=="Book ID"){
       this.headings=[]; this.results=[];this.tot_res="";this.found_or_not="";
       this.headings.push("#");
       this.headings.push("Date");
       this.headings.push("Activity");
       this.headings.push("Book ID");
       this.headings.push("Student Roll No.");
        var arr=[];var count=0;
       for(var i=0;i<this.issues.length;i++){
            arr=[];
            if(this.issues[i].date==this.datequery&&this.issues[i].id==this.datequery2){
              count++;
              arr.push(count);
              arr.push(this.datequery);
              arr.push("Issue");
              arr.push(this.issues[i].id);
              arr.push(this.issues[i].roll);
            }
            this.results.push(arr);
       }

          for(var i=0;i<this.returns.length;i++){
            arr=[];
            if(this.returns[i].date==this.datequery&&this.returns[i].id==this.datequery2){
              count++;
              arr.push(count);
              arr.push(this.datequery);
              arr.push("Return");
              arr.push(this.returns[i].id);
              arr.push(this.returns[i].roll);
            }
            this.results.push(arr);
       }

        if(count==0){this.found_or_not="No results found";return;}
        this.tot_res="Total search results: "+count;


    }
    else if(this.datesrch=="Student Roll No."){
       this.headings=[]; this.results=[];this.tot_res="";this.found_or_not="";
       this.headings.push("#");
       this.headings.push("Date");
       this.headings.push("Activity");
       this.headings.push("Student Roll No.");
       this.headings.push("Book ID");
       
        var arr=[];var count=0;
       for(var i=0;i<this.issues.length;i++){
            arr=[];
            if(this.issues[i].date==this.datequery&&this.issues[i].roll==this.datequery2){
              count++;
              arr.push(count);
              arr.push(this.datequery);
              arr.push("Issue");
              arr.push(this.issues[i].roll);
              arr.push(this.issues[i].id);
              
            }
            this.results.push(arr);
       }

          for(var i=0;i<this.returns.length;i++){
            arr=[];
            if(this.returns[i].date==this.datequery&&this.returns[i].roll==this.datequery2){
              count++;
              arr.push(count);
              arr.push(this.datequery);
              arr.push("Return");
              arr.push(this.returns[i].roll);
              arr.push(this.returns[i].id);
              
            }
            this.results.push(arr);
       }
          if(count==0){this.found_or_not="No results found";return;}
          this.tot_res="Total search results: "+count;
    }
    else{
       this.headings=[]; this.results=[];this.tot_res="";this.found_or_not="";
       this.headings.push("#");
       this.headings.push("Date");
       this.headings.push("Activity");
       this.headings.push("Book ID");
       this.headings.push("Student Roll No.");
       
       var arr=[];var count=0;
       for(var i=0;i<this.issues.length;i++){
            arr=[];
            if(this.issues[i].date==this.datequery){
              count++;
              arr.push(count);
              arr.push(this.datequery);
              arr.push("Issue");
              arr.push(this.issues[i].id);
              arr.push(this.issues[i].roll);
            }
            this.results.push(arr);
       }

          for(var i=0;i<this.returns.length;i++){
            arr=[];console.log("retunrs mei enter");
            if(this.returns[i].date==this.datequery){
              console.log("retunrs mei found");
              count++;
              arr.push(count);
              arr.push(this.datequery);
              arr.push("Return");
              arr.push(this.returns[i].id);
              arr.push(this.returns[i].roll);
              
            }
            this.results.push(arr);
       }
          if(count==0){this.found_or_not="No results found";return;}
          this.tot_res="Total search results: "+count;

    }

  }

}
