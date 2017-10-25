import { Injectable } from '@angular/core';

@Injectable()
export class IssueSrvcService {

  constructor() { }

  getissues(){
  var issues=JSON.parse(localStorage.getItem('issues'));
  if(issues==null)return [];
  return issues;

}

addissue(newIssue){
  var issues=JSON.parse(localStorage.getItem('issues'));
  if(issues==null)issues=[];
  issues.push(newIssue);
  localStorage.setItem("issues", JSON.stringify(issues));
}
getreturns(){
  var returns=JSON.parse(localStorage.getItem('returns'));
  if(returns==null)return [];
  return returns;

}

updateissues(issues){
  localStorage.setItem("issues", JSON.stringify(issues));
}

addreturn(newReturn){
  var returns=JSON.parse(localStorage.getItem('returns'));
  if(returns==null)returns=[];
  returns.push(newReturn);
  localStorage.setItem("returns", JSON.stringify(returns));
}

}
