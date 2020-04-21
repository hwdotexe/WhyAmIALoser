import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReasonList } from './ReasonList';

@Injectable({
  providedIn: 'root'
})
export class ReasonGenService {
  rList: ReasonList;
  rListUsed: ReasonList;

  constructor(private http: HttpClient) {
    var json$ = this.http.get('../assets/reasons.json');
    this.rList = new ReasonList();
    this.rListUsed = new ReasonList();

    json$.subscribe(data=> {
      this.rList = data as ReasonList;
    });
  }

  getNewReason(): any {
    if(!this.rList.reasons){
      return {
        "text": "Click the button to start",
        "user": ""
      };
    }

    if(this.rList.reasons.length < 1){
      this.rListUsed.reasons.forEach(x => {
        this.rList.reasons.push(x);
      })

      this.rListUsed.reasons.splice(0, this.rListUsed.reasons.length);
    }

    var pos = Math.floor(Math.random()*this.rList.reasons.length);
    var i = this.rList.reasons[pos];

    if(!this.rListUsed.reasons){
      this.rListUsed.reasons = [i];
    }else{
      this.rListUsed.reasons.push(i);
    }
    
    this.rList.reasons.splice(this.rList.reasons.indexOf(i), 1);

    return i;
  }
}