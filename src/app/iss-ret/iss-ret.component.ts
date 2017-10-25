import { Component, OnInit } from '@angular/core';
import { IssueSrvcService } from '../issue-srvc.service';
import { BookSrvcService } from '../book-srvc.service'
import { StudSrvcService } from '../stud-srvc.service'

@Component({
  selector: 'app-iss-ret',
  templateUrl: './iss-ret.component.html',
  styleUrls: ['./iss-ret.component.css'],
  providers: [IssueSrvcService, BookSrvcService, StudSrvcService],
  
})
export class IssRetComponent implements OnInit {

constructor(private _issuesrvc : IssueSrvcService, private _bookSrvc: BookSrvcService, private _studsrvc: StudSrvcService) { }
issues;
issueid;
issueroll;
issuedate;
issuetill;
books; 
rolls;
returns;
returnid;
returndate;
roll;
fine;
  ngOnInit() {

    this.issues= this._issuesrvc.getissues();
    this.returns= this._issuesrvc.getreturns();
  }
  addissue(){
    var newissue={
      order: this.issues.length+1,
      id : this.issueid,
      roll:this.issueroll,
      date: this.issuedate,
      till: this.issuetill,
    

    }
    var foundbook=0;var foundroll=0;
    this.books= this._bookSrvc.getBooks();
    this.rolls= this._studsrvc.getStuds();

    var l=0,m=0;var borr_limit=0;
    for(l=0;l<this.books.length;l++){
      if(this.books[l].id==this.issueid&&this.books[l].issued==false){foundbook=1;break;}
    }
    for(m=0;m<this.rolls.length;m++){
       if(this.rolls[m].roll==this.issueroll){
        if(this.rolls[m].bookborrow.length>=3){borr_limit=1;} 
        foundroll=1;break;}
    }
      
      if(foundroll==1&&foundbook==1&&borr_limit==0){
        this.issues.push(newissue);
        this._issuesrvc.addissue(newissue);
        this.books[l].issued=true;
        this.rolls[m].bookborrow.push(this.issueid);
        this._bookSrvc.deletebook(this.books);
        this._studsrvc.deletestud(this.rolls);
      }
      else{
      if(borr_limit==1){this.issueroll="Roll No. reached max book limit"}  
      if(foundbook!=1){this.issueid="Book ID not available for issue"}
      if(foundroll!=1){this.issueroll="Roll No. not found"}
    }
  }

  addreturn(){
    var newreturn={
      order: this.returns.length+1,
      id : this.returnid,
      date:this.returndate,
      roll:this.roll,
      fine : this.fine
    }
    
    
     var foundissue=0;var i=0;var roll_no,till_date;
     var foundbook=0;var foundroll=0;
     this.books= this._bookSrvc.getBooks();
     this.rolls= this._studsrvc.getStuds();
    
     for(i=0;i<this.books.length;i++){if(this.books[i].id==this.returnid){foundbook=1;break;}}
     if(foundbook!=1){this.returnid="Unknown Book ID";return;}
    
     if(this.books[i].issued==false){this.returnid="Book already in library";return;} 
     
     this.books[i].issued=false;this._bookSrvc.deletebook(this.books);
     

     
     for(i=this.issues.length-1;i>=0;i--){
      if(this.issues[i].id==this.returnid){
        foundissue=1;roll_no=this.issues[i].roll;till_date=this.issues[i].till;
        break;
        }
      }
        newreturn.roll=roll_no;

        var rtn=this.returndate;var t=till_date;
        var y=parseInt(rtn.substring(0,4))-parseInt(t.substring(0,4));
        var m=parseInt(rtn.substring(5,7))-parseInt(t.substring(5,7));
        var d=parseInt(rtn.substring(8,10))-parseInt(t.substring(8,10));
        var f=0;
        if((y*365+m*30+d)>=0){f=(y*365+m*30+d);}
        newreturn.fine= "Rs. "+f+".00 /- Deposited";


        this.returns.push(newreturn);
        this._issuesrvc.addreturn(newreturn);

        var m=0;
        for(m=0;m<this.rolls.length;m++){
          if(this.rolls[m].roll==roll_no)break;
        }


        for(var p=0;p<this.rolls[m].bookborrow.length;p++){
          console.log(this.rolls[m].bookborrow[p]);
        if(this.rolls[m].bookborrow[p]==this.returnid){
           this.rolls[m].bookborrow.splice(p,1);
        }
      }
       this._studsrvc.deletestud(this.rolls);

  }

}
