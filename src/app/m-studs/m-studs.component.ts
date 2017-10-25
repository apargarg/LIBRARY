import { Component, OnInit } from '@angular/core';
import {StudSrvcService} from '../stud-srvc.service'

@Component({
  selector: 'app-m-studs',
  templateUrl: './m-studs.component.html',
  styleUrls: ['./m-studs.component.css'],
  providers: [StudSrvcService]
})
export class MStudsComponent implements OnInit {
studs;
  studname;
  studroll;
  mod_studname;
  mod_studroll;
  oldroll;
  warn;
  appState= 'default';
  constructor(private _studSrvc: StudSrvcService) { }

  ngOnInit() {
   this.studs=this._studSrvc.getStuds();
   
    
  }
   
  addstud(){
    var newstud={
      order:this.studs.length+1,
      name: this.studname,
      roll:this.studroll,
      bookborrow:[]
    }
     var found=0;
    for(var i=0;i<this.studs.length;i++){
      if(this.studs[i].roll==this.studroll){found=1;break;}
    }
    if(found!=0){
      this.studroll = "Roll No. already present.";
      }
    else{ 
      this.studs.push(newstud);
    this._studSrvc.addstud(newstud);}
   }
   
   deletestud(studroll){
     for(var i=0;i<this.studs.length;i++){
       if(this.studs[i].roll==studroll){
         this.studs.splice(i,1);
         for(var i=0;i<this.studs.length;i++){
           this.studs[i].order=i+1;
         }
         break;
       }
     }
    this._studSrvc.deletestud(this.studs);      
}

editstud(stud){
   this.appState= 'edit';
   this.mod_studname= stud.name;
  //  this.mod_studroll= stud.roll;
   this.oldroll = stud.roll;
}
   
updatestud(){
  for(var i=0;i<this.studs.length;i++){
    if(this.studs[i].roll==this.oldroll){
      this.studs[i].name=this.mod_studname;
      // this.studs[i].roll= this.oldroll;
      
    }
  }
this._studSrvc.deletestud(this.studs); 

}  
   
   
}
