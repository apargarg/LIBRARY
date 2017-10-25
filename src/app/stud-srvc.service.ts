import { Injectable } from '@angular/core';

@Injectable()
export class StudSrvcService {

  constructor() { }
getStuds(){
  var studs=JSON.parse(localStorage.getItem('studs'));
  if(studs==null)return [];
  return studs;

}

addstud(newStud){
  var studs=JSON.parse(localStorage.getItem('studs'));
  if(studs==null)studs=[];
  studs.push(newStud);
  localStorage.setItem("studs", JSON.stringify(studs));
}

deletestud(studsafterdelete){
  
  localStorage.setItem("studs", JSON.stringify(studsafterdelete));
}
}
