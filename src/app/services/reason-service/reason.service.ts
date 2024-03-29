import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { Reason } from 'src/app/models/Reason';
import { HttpService } from '../http-service/http.service';

@Injectable({
  providedIn: 'root'
})
export class ReasonService {
  reasonList: Reason[] = [];
  reasonListUsed: Reason[] = [];

  constructor(private httpService: HttpService) {
    this.getReasonsFromFile();
  }

  private getReasonsFromFile(): void {
    this.httpService
      .GET<Reason[]>('../assets/reasons.json')
      .pipe(take(1))
      .subscribe((reasons: Reason[]) => {
        this.reasonList = reasons;
      });
  }

  getNewReason(): any {
    // If we've cycled through our reason list, let's refresh.
    if (this.reasonList.length === 0 && this.reasonListUsed.length > 0) {
      this.reasonList = this.reasonListUsed;
      this.reasonListUsed = [];
    }

    // Get a random reason and add it to our list of used reasons.
    let pos = Math.floor(Math.random() * this.reasonList.length);
    let reason = this.reasonList[pos];

    this.reasonListUsed.push(reason);
    this.reasonList.splice(pos, 1);

    return reason;
  }
}
