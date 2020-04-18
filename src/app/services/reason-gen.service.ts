import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ReasonList } from './ReasonList';

@Injectable({
  providedIn: 'root'
})
export class ReasonGenService {
  rList: ReasonList;

  constructor(private http: HttpClient) {
    var json$ = this.http.get('../assets/reasons.json');
    this.rList = new ReasonList();

    json$.subscribe(data=> {
      this.rList = data as ReasonList;
    });
  }

  getNewReason(): string {
    var pos = Math.floor(Math.random()*this.rList.reasons.length);

    return this.rList.reasons[pos];
  }
}
